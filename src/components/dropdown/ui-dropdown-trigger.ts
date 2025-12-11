import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { UiDropdown } from "./ui-dropdown";
import tailwindStyles from "./dropdown.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-dropdown-trigger")
export class UiDropdownTrigger extends LitElement {
  static styles = [styles];

  handleClick(e: Event) {
    e.stopPropagation();
    const parent = this.closest("ui-dropdown") as UiDropdown;
    if (parent) {
      parent.toggle();
    }
  }

  render() {
    return html`
      <div @click=${this.handleClick} class="inline-flex">
        <slot></slot>
      </div>
    `;
  }
}
