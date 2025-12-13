import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";

@customElement("ui-sidebar-footer")
export class UiSidebarFooter extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div class="flex flex-col gap-2 p-2 border-t border-slate-100">
        <slot></slot>
      </div>
    `;
  }
}
