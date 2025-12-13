import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./carousel.css?inline";

@customElement("ui-carousel-content")
export class UiCarouselContent extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div class="flex overflow-x-auto snap-x snap-mandatory -ml-4">
        <slot></slot>
      </div>
    `;
  }

  scrollPrev() {
    const container = this.shadowRoot?.querySelector("div");
    if (container) {
      container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
    }
  }

  scrollNext() {
    const container = this.shadowRoot?.querySelector("div");
    if (container) {
      container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-carousel-content": UiCarouselContent;
  }
}
