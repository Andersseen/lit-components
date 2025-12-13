import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./tooltip.css?inline";

@customElement("ui-tooltip-trigger")
export class UiTooltipTrigger extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-tooltip-trigger": UiTooltipTrigger;
  }
}
