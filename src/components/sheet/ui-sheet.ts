import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./sheet.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-sheet")
export class UiSheet extends LitElement {
  static styles = [styles];

  @property({ type: Boolean, reflect: true }) open = false;

  constructor() {
    super();
    this.addEventListener("sheet-close", () => {
      this.open = false;
      this.dispatchEvent(
        new CustomEvent("open-change", { detail: { open: false } })
      );
    });
    this.addEventListener("sheet-trigger", () => {
      this.open = true;
      this.dispatchEvent(
        new CustomEvent("open-change", { detail: { open: true } })
      );
    });
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("open")) {
      const content = this.querySelector("ui-sheet-content");
      if (content) (content as LitElement).requestUpdate();

      const overlay = this.querySelector("ui-sheet-overlay");
      if (overlay) (overlay as LitElement).requestUpdate();

      if (this.open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

@customElement("ui-sheet-trigger")
export class UiSheetTrigger extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div
        @click=${() =>
          this.dispatchEvent(
            new CustomEvent("sheet-trigger", { bubbles: true, composed: true })
          )}
        class="cursor-pointer inline-block"
      >
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-sheet-overlay")
export class UiSheetOverlay extends LitElement {
  static styles = [styles];

  render() {
    const parent = this.closest("ui-sheet") as UiSheet;
    const isOpen = parent?.open || false;

    return html`
      <div
        class="${cn(
          "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          isOpen ? "data-[state=open] block" : "data-[state=closed] hidden"
        )}"
        @click=${() =>
          parent.dispatchEvent(
            new CustomEvent("sheet-close", { bubbles: true, composed: true })
          )}
      ></div>
    `;
  }
}

@customElement("ui-sheet-content")
export class UiSheetContent extends LitElement {
  static styles = [styles];

  @property() side: "top" | "bottom" | "left" | "right" = "right";

  render() {
    const parent = this.closest("ui-sheet") as UiSheet;
    const isOpen = parent?.open || false;

    const sideVariants = {
      top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom:
        "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right:
        "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
    };

    return html`
      <!-- Overlay is technically sibling usually, but here we require strict hierarchy or use portal. 
         For simplicity in Web Components without Portal, we render overlay inside sheet or content renders it?
         Ideally overlay is separate. Let's assume user puts <ui-sheet-overlay> in <ui-sheet>
    -->
      <div
        class="${cn(
          "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          sideVariants[this.side],
          isOpen ? "data-[state=open] block" : "data-[state=closed] hidden"
        )}"
      >
        <button
          type="button"
          @click=${() =>
            parent.dispatchEvent(
              new CustomEvent("sheet-close", { bubbles: true, composed: true })
            )}
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
        >
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
            class="h-4 w-4"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span class="sr-only">Close</span>
        </button>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-sheet": UiSheet;
    "ui-sheet-trigger": UiSheetTrigger;
    "ui-sheet-content": UiSheetContent;
    "ui-sheet-overlay": UiSheetOverlay;
  }
}
