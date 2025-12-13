import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./carousel.css?inline";

@customElement("ui-carousel-item")
export class UiCarouselItem extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div
        role="group"
        aria-roledescription="slide"
        class="min-w-0 shrink-0 grow-0 basis-full pl-4 snap-center"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-carousel-item": UiCarouselItem;
  }
}
