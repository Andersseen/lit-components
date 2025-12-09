import { LitElement, html, unsafeCSS, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./accordion.css?inline";

const styles = unsafeCSS(tailwindStyles);

// Minimal Event Bus for Accordion communication (or just use DOM events)
// Since we are using standard DOM events, we can just bubble up.

@customElement("ui-accordion")
export class UiAccordion extends LitElement {
  static styles = [styles];

  @property() type: "single" | "multiple" = "single";

  // Track open items by value
  @state() private openItems: string[] = [];

  constructor() {
    super();
    this.addEventListener("accordion-trigger", (e: Event) => {
      const detail = (e as CustomEvent).detail;
      this.toggleItem(detail.value);
    });
  }

  toggleItem(value: string) {
    if (this.type === "single") {
      this.openItems = this.openItems.includes(value) ? [] : [value];
    } else {
      if (this.openItems.includes(value)) {
        this.openItems = this.openItems.filter((v) => v !== value);
      } else {
        this.openItems = [...this.openItems, value];
      }
    }
    this.requestUpdate();
    this.updateChildren();
  }

  updateChildren() {
    const items = this.querySelectorAll("ui-accordion-item");
    items.forEach((item) => {
      if (item instanceof UiAccordionItem) {
        const isOpen = this.openItems.includes(item.value);
        item.open = isOpen;
      }
    });
  }

  // Initial setup
  firstUpdated() {
    this.updateChildren();
  }

  render() {
    return html`<slot></slot>`;
  }
}

@customElement("ui-accordion-item")
export class UiAccordionItem extends LitElement {
  static styles = [styles];

  @property() value: string = "";
  @property({ type: Boolean, reflect: true }) open = false;

  render() {
    return html`
      <div class="border-b border-slate-200">
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-accordion-trigger")
export class UiAccordionTrigger extends LitElement {
  static styles = [styles];

  private handleClick() {
    // Find closest item value
    const item = this.closest("ui-accordion-item");
    if (item && item instanceof UiAccordionItem) {
      this.dispatchEvent(
        new CustomEvent("accordion-trigger", {
          bubbles: true,
          composed: true,
          detail: { value: item.value },
        })
      );
    }
  }

  render() {
    // Check if parent item is open to rotate icon
    const item = this.closest("ui-accordion-item") as UiAccordionItem;
    const isOpen = item?.open || false;

    return html`
      <button
        class="${cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-slate-900 w-full bg-transparent border-0 cursor-pointer"
        )}"
        @click=${this.handleClick}
      >
        <slot></slot>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen
            ? "rotate-180"
            : ""}"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    `;
  }
}

@customElement("ui-accordion-content")
export class UiAccordionContent extends LitElement {
  static styles = [styles];

  render() {
    const item = this.closest("ui-accordion-item") as UiAccordionItem;
    const isOpen = item?.open || false;

    return html`
      <div
        class="overflow-hidden text-sm transition-all ${isOpen
          ? "animate-accordion-down"
          : "animate-accordion-up"} ${isOpen ? "block" : "hidden"}"
      >
        <div class="pb-4 pt-0 text-slate-700">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-accordion": UiAccordion;
    "ui-accordion-item": UiAccordionItem;
    "ui-accordion-trigger": UiAccordionTrigger;
    "ui-accordion-content": UiAccordionContent;
  }
}
