import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./drawer.css?inline";
import { UiDrawer } from "./ui-drawer";

@customElement("ui-drawer-overlay")
export class UiDrawerOverlay extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    const parent = this.closest("ui-drawer") as UiDrawer;
    const isOpen = parent?.open || false;

    return html`
      <div
        class="${cn(
          "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          isOpen ? "data-[state=open] block" : "data-[state=closed] hidden"
        )}"
        @click=${() =>
          parent.dispatchEvent(
            new CustomEvent("drawer-close", { bubbles: true, composed: true })
          )}
      ></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-drawer-overlay": UiDrawerOverlay;
  }
}
