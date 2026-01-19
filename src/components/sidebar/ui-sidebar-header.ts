import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";
import { cn } from "../../utils";
import { sidebarHeaderVariants } from "./sidebar.variants";

@customElement("ui-sidebar-header")
export class UiSidebarHeader extends LitElement {
  static styles = [
    unsafeCSS(tailwindStyles),
    css`
      /* Oculta texto dentro del header si colapsa */
      /* Note: content inside slotted span or div */

      :host-context([collapsed]) ::slotted(span) {
        display: none;
      }

      :host-context([collapsed]) {
        justify-content: center;
        padding-left: 0;
        padding-right: 0;
      }
    `,
  ];

  render() {
    return html`
      <div class="${cn(sidebarHeaderVariants())}">
        <slot></slot>
      </div>
    `;
  }
}
