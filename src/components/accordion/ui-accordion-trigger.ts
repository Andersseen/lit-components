import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { UiAccordionItem } from "./ui-accordion-item";
import { accordionTriggerVariants } from "./accordion.variants";
import tailwindStyles from "./accordion.css?inline";

const styles = unsafeCSS(tailwindStyles);

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
    // In Shadow DOM, 'this' is the host.
    // The parent Item puts data-state="open" on THIS host element (light dom side).
    // We need to reflect that in our internal render.
    // But we are inside the shadow root. We can check `this.getAttribute("data-state")`.
    // However, for that to be reactive, we need it as a property or requestUpdate on mutation.

    // Simpler: Just rely on the received attribute if we enable MutationObserver,
    // OR have UiAccordionItem call a method on us.

    // Let's assume UiAccordionItem calls setOpen on us?
    // Or we use `closest` which DOES work if components are composed in Light DOM of the app (which they are in index.html).
    // The problem in the user's report is that it "doesn't expand".
    // This implies `item.open` is false or not updating.

    // Let's try `this.closest` again but safely.
    // Spec: `this.closest` works in connectedCallback.
    // But in `render`, it might be too early? No, Lit renders after connected.

    const item = this.closest("ui-accordion-item") as UiAccordionItem;
    const isOpen = item?.open || false;
    const value = item?.value || "default";
    const contentId = `accordion-content-${value}`;
    const triggerId = `accordion-trigger-${value}`;

    return html`
      <button
        id="${triggerId}"
        type="button"
        class="${cn(accordionTriggerVariants())}"
        @click=${this.handleClick}
        aria-expanded="${isOpen}"
        aria-controls="${contentId}"
      >
        <div
          class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
          data-state="${isOpen ? "open" : "closed"}"
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
            class="h-4 w-4 shrink-0 transition-transform duration-200"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </button>
    `;
  }
}
