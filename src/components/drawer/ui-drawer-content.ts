import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import {
  drawerContentVariants,
  type DrawerContentVariants,
} from "./drawer.variants";
import tailwindStyles from "./drawer.css?inline";
import { UiDrawer } from "./ui-drawer";

@customElement("ui-drawer-content")
export class UiDrawerContent extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property() side: DrawerContentVariants["side"] = "right";

  render() {
    const parent = this.closest("ui-drawer") as UiDrawer;
    const isOpen = parent?.open || false;

    return html`
      <div
        class="${cn(
          drawerContentVariants({ side: this.side }),
          isOpen ? "data-[state=open] block" : "data-[state=closed] hidden"
        )}"
      >
        <button
          type="button"
          @click=${() =>
            parent.dispatchEvent(
              new CustomEvent("drawer-close", { bubbles: true, composed: true })
            )}
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span class="sr-only">Close</span>
        </button>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-drawer-content": UiDrawerContent;
  }
}
