import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import tailwindStyles from "./menu.css?inline";
import { cn } from "../../utils";
import { menuItemVariants } from "./menu.variants";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-menu-item")
export class UiMenuItem extends LitElement {
  static styles = [styles];

  @property({ type: Boolean }) disabled = false;

  render() {
    return html`
      <div
        class="${cn(
          menuItemVariants(),
          this.disabled ? "pointer-events-none opacity-50" : "cursor-pointer"
        )}"
        ?data-disabled="${this.disabled}"
      >
        <slot></slot>
      </div>
    `;
  }
}
