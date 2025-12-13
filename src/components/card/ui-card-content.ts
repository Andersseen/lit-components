import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./card.css?inline";
import { cardContentVariants } from "./card.variants";

@customElement("ui-card-content")
export class UiCardContent extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

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
