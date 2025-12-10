import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./card.css?inline";

const styles = unsafeCSS(tailwindStyles);

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
