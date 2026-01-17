import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { tailwindStyles } from "../../styles/shared";
import { cardTitleVariants } from "./card.variants";

@customElement("ui-card-title")
export class UiCardTitle extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <h3 class="${cn(cardTitleVariants())}">
        <slot></slot>
      </h3>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-card-title": UiCardTitle;
  }
}
