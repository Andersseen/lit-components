import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import { accordionItemVariants } from "./accordion.variants";
import tailwindStyles from "./accordion.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-accordion-item")
export class UiAccordionItem extends LitElement {
  static styles = [styles];

  @property() value: string = "";
  @property({ type: Boolean, reflect: true }) open = false;

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("open")) {
      this.updateChildren();
    }
  }

  updateChildren() {
    // Slotted content
    const trigger = this.querySelector("ui-accordion-trigger");
    const content = this.querySelector("ui-accordion-content");

    if (trigger) {
      trigger.setAttribute("data-state", this.open ? "open" : "closed");
      if (content) {
        content.toggleAttribute("hidden", !this.open);
        (content as LitElement).requestUpdate();
      }
    }
  }

  // Handle slot change to initialize
  handleSlotChange() {
    this.updateChildren();
  }

  render() {
    return html`
      <div class="${cn(accordionItemVariants())}">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}
