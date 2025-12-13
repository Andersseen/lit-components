import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./sidebar.css?inline";
import { sidebarVariants } from "./sidebar.variants";

@customElement("ui-sidebar")
export class UiSidebar extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property({ type: Boolean, reflect: true }) collapsed = false;

  toggle() {
    this.collapsed = !this.collapsed;
    this.dispatchEvent(
      new CustomEvent("uib-sidebar-change", {
        detail: { collapsed: this.collapsed },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    // Variables CSS que controlan a los hijos reactivamente
    const styleVars = `
      --sidebar-width: ${this.collapsed ? "3rem" : "16rem"}; 
      --sidebar-text-opacity: ${this.collapsed ? "0" : "1"};
      --sidebar-text-width: ${this.collapsed ? "0px" : "auto"};
      --sidebar-item-justify: ${this.collapsed ? "center" : "flex-start"};
      --sidebar-item-padding: ${this.collapsed ? "0.5rem" : "0.5rem 0.75rem"};
      --sidebar-group-label-display: ${this.collapsed ? "none" : "block"};
    `;

    return html`
      <div
        style="${styleVars}"
        class="${cn(
          sidebarVariants(),
          "w-[var(--sidebar-width)]" // Ancho dinámico
        )}"
        data-state="${this.collapsed ? "collapsed" : "expanded"}"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-sidebar": UiSidebar;
  }
}
