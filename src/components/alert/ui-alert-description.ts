import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./alert.css?inline";

@customElement("ui-alert-description")
export class UiAlertDescription extends LitElement {
  static styles = [
    unsafeCSS(tailwindStyles),
    css`
      /* OBLIGATORIO: Convierte el componente en una caja real */
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
