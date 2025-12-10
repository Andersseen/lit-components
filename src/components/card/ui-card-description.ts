import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./card.css?inline";

const styles = unsafeCSS(tailwindStyles);

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
