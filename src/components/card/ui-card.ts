import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./card.css?inline";
import type { UiCardContent } from "./ui-card-content";
import type { UiCardHeader } from "./ui-card-header";
import type { UiCardTitle } from "./ui-card-title";
import type { UiCardDescription } from "./ui-card-description";
import type { UiCardFooter } from "./ui-card-footer";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-card")
export class UiCard extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div
        class="${cn(
          "rounded-xl border border-slate-200 bg-white text-slate-950 shadow"
        )}"
      >
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
