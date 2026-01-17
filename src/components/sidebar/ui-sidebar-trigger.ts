import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../../styles/shared";
import { cn } from "../../utils";
import { sidebarTriggerVariants } from "./sidebar.variants";
import { UiSidebar } from "./ui-sidebar";
import "../icon/ui-icon";

@customElement("ui-sidebar-trigger")
export class UiSidebarTrigger extends LitElement {
  static styles = [tailwindStyles];

  private _handleClick() {
    this.dispatchEvent(
      new CustomEvent("uib-sidebar-toggle", { bubbles: true, composed: true })
    );
    const sidebar = document.querySelector("ui-sidebar") as UiSidebar | null;
    if (sidebar) sidebar.toggle();
  }

  render() {
    return html`
      <button
        class="${cn(sidebarTriggerVariants())}"
        aria-label="Toggle Sidebar"
        @click="${this._handleClick}"
      >
        <ui-icon name="panel-left" class="h-4 w-4"></ui-icon>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-sidebar-trigger": UiSidebarTrigger;
  }
}
