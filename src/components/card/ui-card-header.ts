import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { cardHeaderVariants } from "./card.variants";
import { tailwindStyles } from "../../styles/shared";

@customElement("ui-card-header")
export class UiCardHeader extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="${cn(cardHeaderVariants())}">
        <slot></slot>
      </div>
    `;
  }
}
