import { LitElement, html, unsafeCSS, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./toast.css?inline";

const styles = unsafeCSS(tailwindStyles);

export type ToastVariant = "default" | "success" | "error" | "warning";

export interface ToastOptions {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

export function toast(options: ToastOptions) {
  const event = new CustomEvent("show-toast", {
    detail: options,
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(event);
}

@customElement("ui-toaster")
export class UiToaster extends LitElement {
  static styles = [styles];

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

@customElement("ui-toast")
export class UiToast extends LitElement {
  static styles = [styles];

  @property({ type: Boolean }) open = true;
  @property() variant: ToastVariant = "default";

  render() {
    const variantClasses = {
      default: "bg-white border-slate-200 text-slate-950",
      success: "bg-green-50 border-green-200 text-green-900",
      error: "bg-red-50 border-red-200 text-red-900",
      warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
    };

    return html`
      <div
        class="${cn(
          "pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full",
          variantClasses[this.variant] || variantClasses.default,
          this.open ? "data-[state=open]" : "data-[state=closed] hidden"
        )}"
      >
        <div class="grid gap-1">
          <slot></slot>
        </div>
        <button
          @click=${() =>
            this.dispatchEvent(
              new CustomEvent("close", { bubbles: true, composed: true })
            )}
          class="absolute right-2 top-2 rounded-md p-1 opacity-50 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
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
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-toaster": UiToaster;
    "ui-toast": UiToast;
  }
}
