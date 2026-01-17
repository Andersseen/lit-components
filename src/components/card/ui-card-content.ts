import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { tailwindStyles } from "../../styles/shared";
import { cardContentVariants } from "./card.variants";

@customElement("ui-card-content")
export class UiCardContent extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="${cn(cardContentVariants())}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-card-content": UiCardContent;
  }
}
