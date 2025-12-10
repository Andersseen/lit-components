import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { modalTitleVariants } from "./modal.variants";
import tailwindStyles from "./modal.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-modal-title")
export class UiModalTitle extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <h2 class="${cn(modalTitleVariants())}">
        <slot></slot>
      </h2>
    `;
  }
}
