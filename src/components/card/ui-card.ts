import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./card.css?inline";

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

@customElement("ui-card-header")
export class UiCardHeader extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="${cn("flex flex-col space-y-1.5 p-6")}">
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-card-title")
export class UiCardTitle extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <h3 class="${cn("font-semibold leading-none tracking-tight")}">
        <slot></slot>
      </h3>
    `;
  }
}

@customElement("ui-card-description")
export class UiCardDescription extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <p class="${cn("text-sm text-slate-500")}">
        <slot></slot>
      </p>
    `;
  }
}

@customElement("ui-card-content")
export class UiCardContent extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="${cn("p-6 pt-0")}">
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-card-footer")
export class UiCardFooter extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="${cn("flex items-center p-6 pt-0")}">
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
