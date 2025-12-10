import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./card.css?inline";

const styles = unsafeCSS(tailwindStyles);

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
