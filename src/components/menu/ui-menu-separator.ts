import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./menu.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-menu-separator")
export class UiMenuSeparator extends LitElement {
  static styles = [styles];

  render() {
    return html` <div class="-mx-1 my-1 h-px bg-slate-100"></div> `;
  }
}
