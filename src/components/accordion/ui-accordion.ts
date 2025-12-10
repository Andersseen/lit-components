import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { UiAccordionItem } from "./ui-accordion-item";
import tailwindStyles from "./accordion.css?inline";

const styles = unsafeCSS(tailwindStyles);

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
