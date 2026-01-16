import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { cardVariants } from "./card.variants";
import { tailwindStyles } from "../../styles/shared";
import type { UiCardContent } from "./ui-card-content";
import type { UiCardHeader } from "./ui-card-header";
import type { UiCardTitle } from "./ui-card-title";
import type { UiCardDescription } from "./ui-card-description";
import type { UiCardFooter } from "./ui-card-footer";

@customElement("ui-card")
export class UiCard extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="${cn(cardVariants())}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-card": UiCard;
    "ui-card-header": UiCardHeader;
    "ui-card-title": UiCardTitle;
    "ui-card-description": UiCardDescription;
    "ui-card-content": UiCardContent;
    "ui-card-footer": UiCardFooter;
  }
}
