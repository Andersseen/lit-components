import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./alert.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-alert-title")
export class UiAlertTitle extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <h5 class="${cn("mb-1 font-medium leading-none tracking-tight")}">
        <slot></slot>
      </h5>
    `;
  }
}
