import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./menu.css?inline";
import { cn } from "../../utils";
import { menuVariants } from "./menu.variants";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-menu")
export class UiMenu extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="${cn(menuVariants())}">
        <slot></slot>
      </div>
    `;
  }
}
