import { LitElement, html, unsafeCSS, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import tailwindStyles from "./toast.css?inline";
import type { ToastOptions } from "./defs";
import "./ui-toast";

@customElement("ui-toaster")
export class UiToaster extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @state() private toasts: (ToastOptions & { id: number; open: boolean })[] =
    [];
  private counter = 0;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("show-toast", this.handleToastEvent.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("show-toast", this.handleToastEvent.bind(this));
  }

  handleToastEvent(e: Event) {
    const detail = (e as CustomEvent).detail as ToastOptions;
    const id = this.counter++;
    this.toasts = [...this.toasts, { ...detail, id, open: true }];

    const duration = detail.duration || 3000;
    setTimeout(() => {
      this.closeToast(id);
    }, duration);
  }

  closeToast(id: number) {
    this.toasts = this.toasts.map((t) =>
      t.id === id ? { ...t, open: false } : t
    );
    // Remove from array after animation usually, but for simplicity:
    setTimeout(() => {
      this.toasts = this.toasts.filter((t) => t.id !== id);
    }, 300); // Wait for exit animation
  }

  render() {
    return html`
      <div
        class="fixed top-0 right-0 z-[100] flex flex-col gap-2 w-full max-w-[420px] p-4 max-h-screen overflow-hidden pointer-events-none"
      >
        ${this.toasts.map(
          (t) => html`
            <ui-toast
              .open=${t.open}
              .variant=${t.variant}
              @close=${() => this.closeToast(t.id)}
            >
              ${t.title
                ? html`<div class="text-sm font-semibold">${t.title}</div>`
                : nothing}
              ${t.description
                ? html`<div class="text-sm opacity-90">${t.description}</div>`
                : nothing}
            </ui-toast>
          `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-toaster": UiToaster;
  }
}
