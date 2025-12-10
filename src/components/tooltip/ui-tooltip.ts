import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./tooltip.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-tooltip")
export class UiTooltip extends LitElement {
  static styles = [styles];

  @property({ type: Number }) delayDuration = 200;
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

  render() {
    return html`
      <div
        class="relative inline-block"
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @focusin=${this.handleMouseEnter}
        @focusout=${this.handleMouseLeave}
      >
        <slot></slot>
      </div>
    `;
  }

  updated() {
    // Notify content child
    const content = this.querySelector("ui-tooltip-content");
    if (content) {
      (content as LitElement).requestUpdate();
    }
  }
}

@customElement("ui-tooltip-trigger")
export class UiTooltipTrigger extends LitElement {
  static styles = [styles];

  render() {
    return html`<slot></slot>`;
  }
}

@customElement("ui-tooltip-content")
export class UiTooltipContent extends LitElement {
  static styles = [styles];

  render() {
    const parent = this.closest("ui-tooltip") as UiTooltip;
    const isOpen = parent && parent.open;

    if (!parent) return html``;

    return html`
      <div
        class="${cn(
          "absolute z-50 overflow-hidden rounded-md border bg-slate-900 px-3 py-1.5 text-xs text-slate-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 top-full -left-1/2 transform translate-x-1/2 mt-2 whitespace-nowrap shadow-md",
          isOpen ? "block" : "hidden"
        )}"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-tooltip": UiTooltip;
    "ui-tooltip-trigger": UiTooltipTrigger;
    "ui-tooltip-content": UiTooltipContent;
  }
}
