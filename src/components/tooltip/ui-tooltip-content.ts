import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./tooltip.css?inline";
import { UiTooltip } from "./ui-tooltip";
import { tooltipContentVariants } from "./tooltip.variants";

@customElement("ui-tooltip-content")
export class UiTooltipContent extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) side:
    | "top"
    | "right"
    | "bottom"
    | "left" = "top";

  render() {
    // We prioritize the property/attribute state which is synced by the parent
    return html`
      <div
        class="${cn(
          tooltipContentVariants({ side: this.side, open: this.open }),
        )}"
        data-side="${this.side}"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-tooltip-content": UiTooltipContent;
  }
}
