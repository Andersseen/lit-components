import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./alert.css?inline";

@customElement("ui-alert-title")
export class UiAlertTitle extends LitElement {
  static styles = [
    unsafeCSS(tailwindStyles),
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    // mb-1 da el espacio entre título y descripción
    return html`
      <h5 class="${cn("mb-1 font-medium leading-none tracking-tight")}">
        <slot></slot>
      </h5>
    `;
  }
}
