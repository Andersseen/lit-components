import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";

@customElement("ui-sidebar-group")
export class UiSidebarGroup extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];
  render() {
    return html`<div class="relative flex w-full min-w-0 flex-col p-2">
      <slot></slot>
    </div>`;
  }
}
