import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./carousel.css?inline";
import { UiCarousel } from "./ui-carousel";
import "../button/ui-button"; // Ensure button is available

@customElement("ui-carousel-next")
export class UiCarouselNext extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <ui-button
        variant="outline"
        size="icon"
        class="absolute top-1/2 -translate-y-1/2 -right-12 h-8 w-8 rounded-full bg-background/80 hover:bg-background shadow-md z-10"
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
          <path d="m9 18 6-6-6-6" />
        </svg>
        <span class="sr-only">Next slide</span>
      </ui-button>
    `;
  }

  private _handleClick() {
    const carousel = this.closest("ui-carousel") as UiCarousel;
    if (carousel) carousel.scrollNext();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-carousel-next": UiCarouselNext;
  }
}
