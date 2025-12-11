import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import tailwindStyles from "./breadcrumb.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-breadcrumb")
export class UiBreadcrumb extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <nav aria-label="breadcrumb">
        <ol
          class="flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5"
        >
          <slot></slot>
        </ol>
      </nav>
    `;
  }
}
