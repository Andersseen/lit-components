import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { UiDropdown } from "./ui-dropdown";
import tailwindStyles from "./dropdown.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-dropdown-content")
export class UiDropdownContent extends LitElement {
  static styles = [styles];

  render() {
    const parent = this.closest("ui-dropdown") as UiDropdown;
    const isOpen = parent && parent.open;

    return html`
      <div
        class="${cn(
          "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          isOpen ? "block" : "hidden"
        )}"
      >
        <div class="py-1" role="none">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
