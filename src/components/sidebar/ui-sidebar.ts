import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./sidebar.css?inline";
import { sidebarVariants } from "./sidebar.variants";

@customElement("ui-sidebar")
export class UiSidebar extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property({ type: Boolean, reflect: true }) collapsed = false;

  connectedCallback() {
    super.connectedCallback();
    const saved = localStorage.getItem("sidebar-collapsed");
    // If explicitly 'true', set to true. Boolean coercion of string "false" is true, so be careful.
    if (saved === "true") {
      this.collapsed = true;
    }
  }

  toggle() {
    this.collapsed = !this.collapsed;
    localStorage.setItem("sidebar-collapsed", String(this.collapsed));
    this.dispatchEvent(
      new CustomEvent("uib-sidebar-change", {
        detail: { collapsed: this.collapsed },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div
        class="${cn(sidebarVariants())}"
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
