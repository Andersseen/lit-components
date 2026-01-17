import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../../styles/shared";
import { UiCarousel } from "./ui-carousel";
import "../button/ui-button";
import "../icon/ui-icon";

@customElement("ui-carousel-previous")
export class UiCarouselPrevious extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <ui-button
        variant="outline"
        size="icon"
        class="absolute top-1/2 -translate-y-1/2 -left-12 h-8 w-8 rounded-full bg-background/80 hover:bg-background shadow-md z-10"
        @click="${this._handleClick}"
      >
        <ui-icon name="chevron-left" class="h-4 w-4"></ui-icon>
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
