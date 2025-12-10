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
