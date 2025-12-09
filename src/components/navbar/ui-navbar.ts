import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./navbar.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-navbar")
export class UiNavbar extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <nav
        class="${cn(
          "flex h-14 items-center gap-4 border-b border-slate-200 bg-white px-6 shadow-sm"
        )}"
      >
        <slot></slot>
      </nav>
    `;
  }
}

@customElement("ui-navbar-brand")
export class UiNavbarBrand extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div
        class="${cn("mr-4 hidden md:flex font-bold text-lg text-slate-900")}"
      >
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-navbar-content")
export class UiNavbarContent extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="${cn("flex flex-1 items-center justify-end space-x-2")}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-navbar": UiNavbar;
    "ui-navbar-brand": UiNavbarBrand;
    "ui-navbar-content": UiNavbarContent;
  }
}
