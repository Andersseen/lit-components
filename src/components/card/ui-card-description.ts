import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { tailwindStyles } from "../../styles/shared";
import { cardDescriptionVariants } from "./card.variants";

@customElement("ui-card-description")
export class UiCardDescription extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <p class="${cn(cardDescriptionVariants())}">
        <slot></slot>
      </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-card-description": UiCardDescription;
  }
}
