import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";

@customElement("ui-sidebar-content")
export class UiSidebarContent extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div
        class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto no-scrollbar py-2"
      >
        <slot></slot>
      </div>
    `;
  }
}
