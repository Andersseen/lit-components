import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";
import { cn } from "../../utils";
import { sidebarGroupLabelVariants } from "./sidebar.variants";

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
      <div class="${cn(sidebarGroupLabelVariants())}">
        <slot></slot>
      </div>
    `;
  }
}
