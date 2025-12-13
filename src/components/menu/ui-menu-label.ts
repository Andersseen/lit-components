import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./menu.css?inline";
import { cn } from "../../utils";
import { menuLabelVariants } from "./menu.variants";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-menu-label")
export class UiMenuLabel extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="${cn(menuLabelVariants())}">
        <slot></slot>
      </div>
    `;
  }
}
