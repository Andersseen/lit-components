import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";
import { UiSidebar } from "./ui-sidebar"; // Importamos tipo

@customElement("ui-sidebar-trigger")
export class UiSidebarTrigger extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  private _handleClick() {
    this.dispatchEvent(
      new CustomEvent("uib-sidebar-toggle", { bubbles: true, composed: true })
    );
    // Busca y acciona el sidebar
    const sidebar = document.querySelector("ui-sidebar") as UiSidebar | null;
    if (sidebar) sidebar.toggle();
  }

  render() {
    return html`
      <button
        class="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
        aria-label="Toggle Sidebar"
        @click="${this._handleClick}"
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
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
        </svg>
      </button>
    `;
  }
}
