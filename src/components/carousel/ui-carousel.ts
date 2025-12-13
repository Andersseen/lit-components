import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./carousel.css?inline";
import type { UiCarouselContent } from "./ui-carousel-content";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-carousel")
export class UiCarousel extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="relative" role="region" aria-roledescription="carousel">
        <slot></slot>
      </div>
    `;
  }

  scrollPrev() {
    const content = this.querySelector("ui-carousel-content");
    if (content) {
      (content as UiCarouselContent).scrollPrev();
    }
  }

  scrollNext() {
    const content = this.querySelector("ui-carousel-content");
    if (content) {
      (content as UiCarouselContent).scrollNext();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-carousel": UiCarousel;
  }
}
