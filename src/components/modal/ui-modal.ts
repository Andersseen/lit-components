import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { cn } from "../../utils";
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
        class="${cn(
          "backdrop:bg-black/50 backdrop:backdrop-blur-sm fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 rounded-lg sm:rounded-lg"
        )}"
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

@customElement("ui-modal-header")
export class UiModalHeader extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div
        class="${cn("flex flex-col space-y-1.5 text-center sm:text-left mb-4")}"
      >
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-modal-title")
export class UiModalTitle extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <h2 class="${cn("text-lg font-semibold leading-none tracking-tight")}">
        <slot></slot>
      </h2>
    `;
  }
}

@customElement("ui-modal-footer")
export class UiModalFooter extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div
        class="${cn(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4"
        )}"
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-modal": UiModal;
    "ui-modal-header": UiModalHeader;
    "ui-modal-title": UiModalTitle;
    "ui-modal-footer": UiModalFooter;
  }
}
