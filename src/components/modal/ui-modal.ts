import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { cn } from "../../utils";
import { modalVariants } from "./modal.variants";
import tailwindStyles from "./modal.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-modal")
export class UiModal extends LitElement {
  static styles = [styles];

  @property({ type: Boolean, reflect: true }) open = false;
  @query("dialog") dialog!: HTMLDialogElement;

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("open")) {
      if (this.open && !this.dialog.open) {
        this.dialog.showModal();
      } else if (!this.open && this.dialog.open) {
        this.dialog.close();
      }
    }
  }

  private handleClose() {
    this.open = false;
    this.dialog.close(); // Force native close to be sure
    this.dispatchEvent(new Event("close"));
  }

  private handleBackdropClick(e: MouseEvent) {
    if (e.target === this.dialog) {
      this.handleClose();
    }
  }

  render() {
    return html`
      <dialog
        class="${cn(modalVariants())}"
        @click=${this.handleBackdropClick}
        @close=${this.handleClose}
      >
        <slot></slot>
        <button
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer bg-transparent border-0"
          @click=${this.handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="h-4 w-4"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span class="sr-only">Close</span>
        </button>
      </dialog>
    `;
  }
}
