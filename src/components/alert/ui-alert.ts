import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import { alertVariants, type AlertVariants } from "./alert.variants";
import tailwindStyles from "./alert.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-alert")
export class UiAlert extends LitElement {
  @property() variant: AlertVariants["variant"] = "default";

  static styles = [styles];

  render() {
    return html`
      <div role="alert" class="${cn(alertVariants({ variant: this.variant }))}">
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-alert-title")
export class UiAlertTitle extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <h5 class="mb-1 font-medium leading-none tracking-tight">
        <slot></slot>
      </h5>
    `;
  }
}

@customElement("ui-alert-description")
export class UiAlertDescription extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="text-sm [&_p]:leading-relaxed">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-alert": UiAlert;
    "ui-alert-title": UiAlertTitle;
    "ui-alert-description": UiAlertDescription;
  }
}
