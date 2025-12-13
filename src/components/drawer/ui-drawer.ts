import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import tailwindStyles from "./drawer.css?inline";

@customElement("ui-drawer")
export class UiDrawer extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property({ type: Boolean, reflect: true }) open = false;

  constructor() {
    super();
    this.addEventListener("drawer-close", () => {
      this.open = false;
      this.dispatchEvent(
        new CustomEvent("open-change", { detail: { open: false } })
      );
    });
    this.addEventListener("drawer-trigger", () => {
      this.open = true;
      this.dispatchEvent(
        new CustomEvent("open-change", { detail: { open: true } })
      );
    });
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("open")) {
      const content = this.querySelector("ui-drawer-content");
      if (content) (content as LitElement).requestUpdate();

      const overlay = this.querySelector("ui-drawer-overlay");
      if (overlay) (overlay as LitElement).requestUpdate();

      if (this.open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-drawer": UiDrawer;
  }
}
