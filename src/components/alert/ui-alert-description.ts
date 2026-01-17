import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { tailwindStyles } from "../../styles/shared";

@customElement("ui-alert-description")
export class UiAlertDescription extends LitElement {
  static styles = [
    tailwindStyles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <div class="${cn("text-sm [&_p]:leading-relaxed")}">
        <slot></slot>
      </div>
    `;
  }
}
