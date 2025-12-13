import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";

@customElement("ui-sidebar-menu")
export class UiSidebarMenu extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];
  render() {
    return html`<ul class="flex w-full min-w-0 flex-col gap-1">
      <slot></slot>
    </ul>`;
  }
}
