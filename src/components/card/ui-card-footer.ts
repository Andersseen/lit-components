import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./card.css?inline";
import { cardFooterVariants } from "./card.variants";

@customElement("ui-card-footer")
export class UiCardFooter extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div class="${cn(cardFooterVariants())}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-card-footer": UiCardFooter;
  }
}
