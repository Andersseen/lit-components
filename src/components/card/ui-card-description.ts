import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./card.css?inline";
import { cardDescriptionVariants } from "./card.variants";

@customElement("ui-card-description")
export class UiCardDescription extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

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
