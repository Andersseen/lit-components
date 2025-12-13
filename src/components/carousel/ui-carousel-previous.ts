import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./carousel.css?inline";
import { UiCarousel } from "./ui-carousel";
import "../button/ui-button"; // Ensure button is available

@customElement("ui-carousel-previous")
export class UiCarouselPrevious extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <ui-button
        variant="outline"
        size="icon"
        class="absolute top-1/2 -translate-y-1/2 -left-12 h-8 w-8 rounded-full bg-background/80 hover:bg-background shadow-md z-10"
        @click="${this._handleClick}"
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
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span class="sr-only">Previous slide</span>
      </ui-button>
    `;
  }

  private _handleClick() {
    const carousel = this.closest("ui-carousel") as UiCarousel;
    if (carousel) carousel.scrollPrev();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-carousel-previous": UiCarouselPrevious;
  }
}
