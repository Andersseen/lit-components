import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { modalHeaderVariants } from "./modal.variants";
import tailwindStyles from "./modal.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-modal-header")
export class UiModalHeader extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="${cn(modalHeaderVariants())}">
        <slot></slot>
      </div>
    `;
  }
}
