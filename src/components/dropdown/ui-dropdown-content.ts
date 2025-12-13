import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { UiDropdown } from "./ui-dropdown";
import tailwindStyles from "./dropdown.css?inline";
import { dropdownContentVariants } from "./dropdown.variants";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-dropdown-content")
export class UiDropdownContent extends LitElement {
  static styles = [styles];

  render() {
    const parent = this.closest("ui-dropdown") as UiDropdown;
    const isOpen = parent && parent.open;

    return html`
      <div
        class="${cn(dropdownContentVariants(), isOpen ? "block" : "hidden")}"
      >
        <div class="py-1" role="none">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
