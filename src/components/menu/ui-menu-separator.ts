import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./menu.css?inline";
import { cn } from "../../utils";
import { menuSeparatorVariants } from "./menu.variants";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-menu-separator")
export class UiMenuSeparator extends LitElement {
  static styles = [styles];

  render() {
    return html` <div class="${cn(menuSeparatorVariants())}"></div> `;
  }
}
