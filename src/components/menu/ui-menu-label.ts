import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./menu.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-menu-label")
export class UiMenuLabel extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="px-2 py-1.5 text-sm font-semibold text-slate-950">
        <slot></slot>
      </div>
    `;
  }
}
