import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./pagination.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-pagination")
export class UiPagination extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <nav
        role="navigation"
        aria-label="pagination"
        class="mx-auto flex w-full justify-center"
      >
        <slot></slot>
      </nav>
    `;
  }
}

@customElement("ui-pagination-content")
export class UiPaginationContent extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <ul class="flex flex-row items-center gap-1">
        <slot></slot>
      </ul>
    `;
  }
}

@customElement("ui-pagination-item")
export class UiPaginationItem extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <li>
        <slot></slot>
      </li>
    `;
  }
}

@customElement("ui-pagination-link")
export class UiPaginationLink extends LitElement {
  static styles = [styles];

  @property({ type: Boolean }) isActive = false;
  @property({ type: String }) href = "#";
  @property({ type: String }) size = "icon"; // default, sm, lg, icon

  render() {
    return html`
      <a
        href="${this.href}"
        aria-current="${this.isActive ? "page" : undefined}"
        class="${cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 hover:text-slate-900 h-10 w-10",
          this.isActive
            ? "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900"
            : "ghost"
        )}"
      >
        <slot></slot>
      </a>
    `;
  }
}

@customElement("ui-pagination-previous")
export class UiPaginationPrevious extends LitElement {
  static styles = [styles];

  @property({ type: String }) href = "#";

  render() {
    return html`
      <ui-pagination-item>
        <ui-pagination-link
          href="${this.href}"
          aria-label="Go to previous page"
          class="gap-1 pl-2.5 h-auto w-auto p-2"
        >
          <span class="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Previous</span>
          </span>
        </ui-pagination-link>
      </ui-pagination-item>
    `;
  }
}

@customElement("ui-pagination-next")
export class UiPaginationNext extends LitElement {
  static styles = [styles];

  @property({ type: String }) href = "#";

  render() {
    return html`
      <ui-pagination-item>
        <ui-pagination-link
          href="${this.href}"
          aria-label="Go to next page"
          class="gap-1 pr-2.5 h-auto w-auto p-2"
        >
          <span class="flex items-center gap-1">
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </ui-pagination-link>
      </ui-pagination-item>
    `;
  }
}

@customElement("ui-pagination-ellipsis")
export class UiPaginationEllipsis extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <ui-pagination-item>
        <span class="flex h-9 w-9 items-center justify-center">
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
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
          <span class="sr-only">More pages</span>
        </span>
      </ui-pagination-item>
    `;
  }
}
