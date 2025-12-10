import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { modalDescriptionVariants } from "./modal.variants";
import tailwindStyles from "./modal.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-modal-description")
export class UiModalDescription extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <p class="${cn(modalDescriptionVariants())}">
        <slot></slot>
      </p>
    `;
  }
}
