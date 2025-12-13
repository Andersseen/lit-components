import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./badge.css?inline";
import { badgeVariants, type BadgeVariants } from "./badge.variants";

@customElement("ui-badge")
export class UiBadge extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property() variant: BadgeVariants["variant"] = "default";

  render() {
    return html`
      <div class="${cn(badgeVariants({ variant: this.variant }))}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-badge": UiBadge;
  }
}
