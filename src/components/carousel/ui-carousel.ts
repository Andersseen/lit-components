import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./carousel.css?inline";

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

@customElement("ui-carousel-content")
export class UiCarouselContent extends LitElement {
  static styles = [styles];

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

@customElement("ui-carousel-item")
export class UiCarouselItem extends LitElement {
  static styles = [styles];

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

@customElement("ui-carousel-previous")
export class UiCarouselPrevious extends LitElement {
  static styles = [styles];

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

@customElement("ui-carousel-next")
export class UiCarouselNext extends LitElement {
  static styles = [styles];

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
    "ui-carousel": UiCarousel;
    "ui-carousel-content": UiCarouselContent;
    "ui-carousel-item": UiCarouselItem;
    "ui-carousel-previous": UiCarouselPrevious;
    "ui-carousel-next": UiCarouselNext;
  }
}
