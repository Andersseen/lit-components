import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import tailwindStyles from "./tooltip.css?inline";
import "./ui-tooltip-trigger";
import "./ui-tooltip-content";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-tooltip")
export class UiTooltip extends LitElement {
  static styles = [styles];

  @property({ type: Number }) delayDuration = 200;
  @property({ type: String, reflect: true }) side:
    | "top"
    | "right"
    | "bottom"
    | "left" = "top";
  @state() open = false;

  private timer: number | null = null;

  handleMouseEnter() {
    this.timer = window.setTimeout(() => {
      this.open = true;
      this.requestUpdate(); // Force update to propagate to children if needed
    }, this.delayDuration);
  }

  handleMouseLeave() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.open = false;
    this.requestUpdate();
  }

  updated() {
    this.syncContentState();
  }

  handleSlotChange() {
    this.syncContentState();
  }

  private syncContentState() {
    const content = this.querySelector("ui-tooltip-content");
    if (content) {
      if (this.open) {
        content.setAttribute("open", "");
      } else {
        content.removeAttribute("open");
      }
      content.setAttribute("side", this.side);
      (content as LitElement).requestUpdate();
    }
  }

  render() {
    return html`
      <div
        class="relative inline-block"
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @focusin=${this.handleMouseEnter}
        @focusout=${this.handleMouseLeave}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-tooltip": UiTooltip;
  }
}
