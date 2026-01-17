import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../../styles/shared";
import { UiCarousel } from "./ui-carousel";
import "../button/ui-button";
import "../icon/ui-icon";

@customElement("ui-carousel-next")
export class UiCarouselNext extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <ui-button
        variant="outline"
        size="icon"
        class="absolute top-1/2 -translate-y-1/2 -right-12 h-8 w-8 rounded-full bg-background/80 hover:bg-background shadow-md z-10"
        @click="${this._handleClick}"
      >
        <ui-icon name="chevron-right" class="h-4 w-4"></ui-icon>
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
