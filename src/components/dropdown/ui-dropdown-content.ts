import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./dropdown.css?inline";
import { dropdownContentVariants } from "./dropdown.variants";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-dropdown-content")
export class UiDropdownContent extends LitElement {
  static styles = [styles];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) align: "start" | "end" = "end";

  render() {
    return html`
      <div
        class="${cn(dropdownContentVariants(), this.open ? "flex" : "hidden")}"
      >
        <div class="py-1" role="none">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
