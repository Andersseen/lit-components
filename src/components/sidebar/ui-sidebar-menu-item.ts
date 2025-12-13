import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";

@customElement("ui-sidebar-menu-item")
export class UiSidebarMenuItem extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];
  render() {
    return html`<li class="relative"><slot></slot></li>`;
  }
}
