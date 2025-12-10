import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./card.css?inline";

const styles = unsafeCSS(tailwindStyles);

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
