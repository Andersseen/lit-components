import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./sidebar.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-sidebar")
export class UiSidebar extends LitElement {
  static styles = [styles];

  @property({ type: Boolean, reflect: true }) collapsed = false;

  toggle() {
    this.collapsed = !this.collapsed;
    this.dispatchEvent(
      new CustomEvent("uib-sidebar-change", {
        detail: { collapsed: this.collapsed },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div
        class="${cn(
          "group peer hidden md:block h-full border-r bg-sidebar text-sidebar-foreground transition-[width] duration-300 ease-in-out",
          this.collapsed
            ? "w-[var(--sidebar-width-collapsed)]"
            : "w-[var(--sidebar-width)]"
        )}"
        style="--sidebar-width: 16rem; --sidebar-width-collapsed: 4rem;"
        data-collapsed="${this.collapsed}"
      >
        <div class="flex h-full w-full flex-col bg-white overflow-hidden">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

@customElement("ui-sidebar-trigger")
export class UiSidebarTrigger extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <ui-button variant="ghost" size="icon" @click="${this._handleClick}">
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
          class="h-5 w-5"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 3v18" />
        </svg>
        <span class="sr-only">Toggle Sidebar</span>
      </ui-button>
    `;
  }

  private _handleClick() {
    // Dispatch event to be handled by the layout or parent
    this.dispatchEvent(
      new CustomEvent("uib-sidebar-toggle", {
        bubbles: true,
        composed: true,
      })
    );

    // Also try to find a sidebar sibling or known sidebar to toggle directly if possible,
    // but event bubbling is safer for decoupled components.
    // For this demo, we'll rely on the main layout script to catch this or the sidebar itself if it's a parent (unlikely for a trigger).
    const sidebar = document.querySelector("ui-sidebar");
    if (sidebar) {
      sidebar.toggle();
    }
  }
}

@customElement("ui-sidebar-header")
export class UiSidebarHeader extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div
        class="flex flex-col gap-2 p-4 group-data-[collapsed=true]:px-2 group-data-[collapsed=true]:py-4 group-data-[collapsed=true]:items-center"
      >
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-sidebar-content")
export class UiSidebarContent extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div
        class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"
      >
        <div class="px-2">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

@customElement("ui-sidebar-footer")
export class UiSidebarFooter extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="flex flex-col gap-2 p-2">
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-sidebar-group")
export class UiSidebarGroup extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div class="relative flex w-full min-w-0 flex-col p-2">
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-sidebar-group-label")
export class UiSidebarGroupLabel extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div
        class="px-2 text-xs font-medium text-slate-500 mb-2 group-data-[collapsed=true]:hidden"
      >
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-sidebar-menu")
export class UiSidebarMenu extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <ul class="flex w-full min-w-0 flex-col gap-1">
        <slot></slot>
      </ul>
    `;
  }
}

@customElement("ui-sidebar-menu-item")
export class UiSidebarMenuItem extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <li class="group/menu-item relative">
        <slot></slot>
      </li>
    `;
  }
}

@customElement("ui-sidebar-menu-button")
export class UiSidebarMenuButton extends LitElement {
  static styles = [styles];

  @property({ type: Boolean }) isActive = false;
  @property() href = "#";

  render() {
    return html`
      <a
        href="${this.href}"
        class="${cn(
          "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 active:bg-slate-100 active:text-slate-900 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          this.isActive
            ? "bg-slate-100 text-slate-900 font-medium"
            : "text-slate-500"
        )}"
      >
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-sidebar": UiSidebar;
    "ui-sidebar-trigger": UiSidebarTrigger;
    "ui-sidebar-header": UiSidebarHeader;
    "ui-sidebar-content": UiSidebarContent;
    "ui-sidebar-footer": UiSidebarFooter;
    "ui-sidebar-group": UiSidebarGroup;
    "ui-sidebar-group-label": UiSidebarGroupLabel;
    "ui-sidebar-menu": UiSidebarMenu;
    "ui-sidebar-menu-item": UiSidebarMenuItem;
    "ui-sidebar-menu-button": UiSidebarMenuButton;
  }
}
