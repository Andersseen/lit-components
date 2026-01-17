import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { tailwindStyles } from "../../styles/shared";
import { cardFooterVariants } from "./card.variants";

@customElement("ui-card-footer")
export class UiCardFooter extends LitElement {
  static styles = [tailwindStyles];

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
