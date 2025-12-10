import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./alert.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-alert-description")
export class UiAlertDescription extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="${cn("text-sm [&_p]:leading-relaxed")}">
        <slot></slot>
      </div>
    `;
  }
}
