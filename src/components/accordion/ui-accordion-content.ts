import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { UiAccordionItem } from "./ui-accordion-item";
import { accordionContentVariants } from "./accordion.variants";
import tailwindStyles from "./accordion.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-accordion-content")
export class UiAccordionContent extends LitElement {
  static styles = [styles];

  render() {
    const item = this.closest("ui-accordion-item") as UiAccordionItem;
    const isOpen = item?.open || false;

    // If not open, we can just hide it or not render key parts.
    // But relying on Tailwind animate classes requires presence.

    return html`
      <div
        class="${cn(
          "overflow-hidden text-sm transition-all",
          isOpen ? "animate-accordion-down" : "animate-accordion-up",
          !isOpen && "hidden" // Helper to fully hide
        )}"
      >
        <div class="pb-4 pt-0 text-slate-700">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
