import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./dropdown.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-dropdown-item")
export class UiDropdownItem extends LitElement {
  static styles = [styles, unsafeCSS(`:host { display: block; width: 100%; }`)];

  render() {
    return html`
      <div
        class="${cn(
          "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer",
        )}"
      >
        <slot></slot>
      </div>
    `;
  }
}
