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
      ::slotted(span),
      ::slotted(div.hide-on-collapse) {
        opacity: var(--sidebar-text-opacity, 1);
        width: var(--sidebar-text-width, auto);
        overflow: hidden;
        transition: opacity 0.2s;
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
