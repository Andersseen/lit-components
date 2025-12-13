import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./card.css?inline";
import { cardHeaderVariants } from "./card.variants";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-card-header")
export class UiCardHeader extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="${cn(cardHeaderVariants())}">
        <slot></slot>
      </div>
    `;
  }
}
