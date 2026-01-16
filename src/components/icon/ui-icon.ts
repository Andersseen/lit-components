import { LitElement, html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { icons, type IconName } from "./icons";
import { cn } from "../../utils";

@customElement("ui-icon")
export class UiIcon extends LitElement {
  @property() name?: IconName;
  @property({ type: Number }) size = 16;
  @property() className = "";

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
    }
    svg {
      width: 100%;
      height: 100%;
      color: currentColor;
    }
  `;

  render() {
    if (!this.name || !icons[this.name]) {
      return nothing;
    }

    return html`
      <div
        class="${cn("flex items-center justify-center", this.className)}"
        style="width: ${this.size}px; height: ${this.size}px;"
      >
        ${icons[this.name]}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-icon": UiIcon;
  }
}
