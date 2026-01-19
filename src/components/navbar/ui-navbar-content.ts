import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import tailwindStyles from "./navbar.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-navbar-content")
export class UiNavbarContent extends LitElement {
  static styles = [styles];

  @property({ type: String, reflect: true }) justify:
    | "start"
    | "center"
    | "end" = "center";

  render() {
    return html`<slot></slot>`;
  }
}
