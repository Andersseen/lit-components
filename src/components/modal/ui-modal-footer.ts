import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import { modalFooterVariants } from "./modal.variants";
import tailwindStyles from "./modal.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-modal-footer")
export class UiModalFooter extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="${cn(modalFooterVariants())}">
        <slot></slot>
      </div>
    `;
  }
}
