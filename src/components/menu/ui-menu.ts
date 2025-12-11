import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./menu.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-menu")
export class UiMenu extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div
        class="min-w-[8rem] overflow-hidden rounded-md border p-1 text-slate-950 shadow-sm bg-white"
      >
        <slot></slot>
      </div>
    `;
  }
}
