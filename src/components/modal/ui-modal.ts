import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { cn } from "../../utils";
import { modalVariants } from "./modal.variants";
import tailwindStyles from "./modal.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-modal")
export class UiModal extends LitElement {
  static styles = [styles];

  // Reflecting the property to an attribute is useful for CSS styling if needed
  @property({ type: Boolean, reflect: true }) open = false;

  @query("dialog") dialog!: HTMLDialogElement;

  firstUpdated() {
    // Initial sync in case open is set on load
    this.syncDialogState();
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("open")) {
      this.syncDialogState();
    }
  }

  private syncDialogState() {
    if (!this.dialog) return;

    if (this.open && !this.dialog.open) {
      this.dialog.showModal();
    } else if (!this.open && this.dialog.open) {
      this.dialog.close();
    }
  }

  private handleClose() {
    this.open = false;
    this.dialog.close();
    this.dispatchEvent(new Event("close", { bubbles: true, composed: true }));
  }

  private handleBackdropClick(e: MouseEvent) {
    // Native dialog backdrop click detection
    if (e.target === this.dialog) {
      // Check if the click was strictly on the dialog (backdrop) and not its children
      // The native dialog element spans the whole viewport when open as modal
      const rect = this.dialog.getBoundingClientRect();
      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;

      if (!isInDialog) {
        this.handleClose();
      }
    }
  }

  render() {
    // We removed the conditional 'open' class logic.
    // The dialog is hidden by browser default until showModal() is called.
    return html`
      <dialog
        class="${cn(modalVariants())}"
        @click=${this.handleBackdropClick}
        @close=${this.handleClose}
      >
        <slot></slot>

        <button
          class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer bg-transparent border-0 p-0"
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
