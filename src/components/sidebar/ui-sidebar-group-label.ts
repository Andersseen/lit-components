import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";

@customElement("ui-sidebar-group-label")
export class UiSidebarGroupLabel extends LitElement {
  static styles = [
    unsafeCSS(tailwindStyles),
    css`
      :host {
        display: var(--sidebar-group-label-display, block);
      }
    `,
  ];

  render() {
    return html`
      <div
        class="px-2 py-1.5 text-xs font-semibold text-slate-500 whitespace-nowrap overflow-hidden"
      >
        <slot></slot>
      </div>
    `;
  }
}
