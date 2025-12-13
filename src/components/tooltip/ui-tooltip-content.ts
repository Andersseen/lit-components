import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./tooltip.css?inline";
import { UiTooltip } from "./ui-tooltip";
import { tooltipContentVariants } from "./tooltip.variants";

@customElement("ui-tooltip-content")
export class UiTooltipContent extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    const parent = this.closest("ui-tooltip") as UiTooltip;
    const isOpen = parent && parent.open;

    if (!parent) return html``;

    return html`
      <div
        class="${cn(
          tooltipContentVariants({ side: parent.side, open: isOpen })
        )}"
        data-side="${parent.side}"
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
