import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { tailwindStyles } from "../../styles/shared";

@customElement("ui-alert-title")
export class UiAlertTitle extends LitElement {
  static styles = [
    tailwindStyles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    // mb-1 gives space between title and description
    return html`
      <h5 class="${cn("mb-1 font-medium leading-none tracking-tight")}">
        <slot></slot>
      </h5>
    `;
  }
}
