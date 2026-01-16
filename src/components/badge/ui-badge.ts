import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import { badgeVariants, type BadgeVariants } from "./badge.variants";
import { tailwindStyles } from "../../styles/shared";

@customElement("ui-badge")
export class UiBadge extends LitElement {
  static styles = [
    tailwindStyles,
    css`
      :host {
        display: inline-flex;
      }
    `,
  ];

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
