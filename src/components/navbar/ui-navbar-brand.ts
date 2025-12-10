import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import tailwindStyles from "./navbar.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-navbar-brand")
export class UiNavbarBrand extends LitElement {
  static styles = [styles];

  render() {
    return html`<slot></slot>`;
  }
}
