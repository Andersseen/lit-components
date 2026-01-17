import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { tailwindStyles } from "./styles/shared";
import "./pages/home-page";
import "./pages/buttons-demo";
import "./pages/icons-demo";
import "./pages/cards-demo";
import "./pages/accordion-demo";
import "./pages/alert-demo";
import "./pages/badge-demo";
import "./pages/breadcrumb-demo";
import "./pages/carousel-demo";
import "./pages/drawer-demo";
import "./pages/dropdown-demo";
import "./pages/menu-demo";
import "./pages/modal-demo";
import "./pages/navbar-demo";
import "./pages/pagination-demo";
import "./pages/sidebar-demo";
import "./pages/switch-demo";
import "./pages/tabs-demo";
import "./pages/toast-demo";
import "./pages/toggle-demo";
import "./pages/tooltip-demo";
import "./index";

@customElement("app-root")
export class AppRoot extends LitElement {
  static styles = [
    tailwindStyles,
    css`
      :host {
        display: flex;
        height: 100vh;
        overflow: hidden;
        background-color: var(--background);
        color: var(--foreground);
        font-family: var(--font-sans, system-ui, sans-serif);
      }
    `,
  ];

  @state() private activeRoute = "home";

  connectedCallback() {
    super.connectedCallback();
    this.handleHashChange();
    window.addEventListener("hashchange", this.handleHashChange);
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this.handleHashChange);
    super.disconnectedCallback();
  }

  private handleHashChange = () => {
    const hash = window.location.hash.replace("#", "");
    this.activeRoute = hash || "home";
  };

  render() {
    return html`
      <!-- Sidebar -->
      <ui-sidebar class="hidden md:block w-64 border-r bg-card h-full">
        <ui-sidebar-header>
          <div class="flex items-center justify-between px-4 py-2">
            <span class="font-bold text-lg">Lit Components</span>
          </div>
        </ui-sidebar-header>
        <ui-sidebar-content>
          <ui-sidebar-menu>
            <ui-sidebar-group>
              <ui-sidebar-group-label>Getting Started</ui-sidebar-group-label>
              <ui-sidebar-menu-item>
                <ui-sidebar-menu-button
                  href="#home"
                  ?isActive=${this.activeRoute === "home"}
                >
                  Introduction
                </ui-sidebar-menu-button>
              </ui-sidebar-menu-item>

              <ui-sidebar-group-label>Foundations</ui-sidebar-group-label>
              <ui-sidebar-menu-item>
                <ui-sidebar-menu-button
                  href="#icons"
                  ?isActive=${this.activeRoute === "icons"}
                >
                  Icons
                </ui-sidebar-menu-button>
              </ui-sidebar-menu-item>

              <ui-sidebar-group-label>Components</ui-sidebar-group-label>
              ${this.renderSidebarLink("Accordion", "accordion")}
              ${this.renderSidebarLink("Alert", "alert")}
              ${this.renderSidebarLink("Badge", "badge")}
              ${this.renderSidebarLink("Breadcrumb", "breadcrumb")}
              ${this.renderSidebarLink("Buttons", "buttons")}
              ${this.renderSidebarLink("Cards", "cards")}
              ${this.renderSidebarLink("Carousel", "carousel")}
              ${this.renderSidebarLink("Drawer", "drawer")}
              ${this.renderSidebarLink("Dropdown", "dropdown")}
              ${this.renderSidebarLink("Menu", "menu")}
              ${this.renderSidebarLink("Modal", "modal")}
              ${this.renderSidebarLink("Navbar", "navbar")}
              ${this.renderSidebarLink("Pagination", "pagination")}
              ${this.renderSidebarLink("Sidebar", "sidebar")}
              ${this.renderSidebarLink("Switch", "switch")}
              ${this.renderSidebarLink("Tabs", "tabs")}
              ${this.renderSidebarLink("Toast", "toast")}
              ${this.renderSidebarLink("Toggle", "toggle")}
              ${this.renderSidebarLink("Tooltip", "tooltip")}
            </ui-sidebar-group>
          </ui-sidebar-menu>
        </ui-sidebar-content>
        <ui-sidebar-footer class="p-4 border-t">
          <div class="text-xs text-muted-foreground">v0.1.0</div>
        </ui-sidebar-footer>
      </ui-sidebar>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto p-8 relative">
        <div class="max-w-5xl mx-auto">${this.renderPage()}</div>
      </main>

      <ui-toaster></ui-toaster>
    `;
  }

  private renderSidebarLink(label: string, route: string) {
    return html`
      <ui-sidebar-menu-item>
        <ui-sidebar-menu-button
          href="#${route}"
          ?isActive=${this.activeRoute === route}
        >
          ${label}
        </ui-sidebar-menu-button>
      </ui-sidebar-menu-item>
    `;
  }

  private renderPage() {
    switch (this.activeRoute) {
      case "home":
        return html`<home-page></home-page>`;
      case "accordion":
        return html`<accordion-demo></accordion-demo>`;
      case "alert":
        return html`<alert-demo></alert-demo>`;
      case "badge":
        return html`<badge-demo></badge-demo>`;
      case "breadcrumb":
        return html`<breadcrumb-demo></breadcrumb-demo>`;
      case "buttons":
        return html`<buttons-demo></buttons-demo>`;
      case "cards":
        return html`<cards-demo></cards-demo>`;
      case "carousel":
        return html`<carousel-demo></carousel-demo>`;
      case "drawer":
        return html`<drawer-demo></drawer-demo>`;
      case "dropdown":
        return html`<dropdown-demo></dropdown-demo>`;
      case "icons":
        return html`<icons-demo></icons-demo>`;
      case "menu":
        return html`<menu-demo></menu-demo>`;
      case "modal":
        return html`<modal-demo></modal-demo>`;
      case "navbar":
        return html`<navbar-demo></navbar-demo>`;
      case "pagination":
        return html`<pagination-demo></pagination-demo>`;
      case "sidebar":
        return html`<sidebar-demo></sidebar-demo>`;
      case "switch":
        return html`<switch-demo></switch-demo>`;
      case "tabs":
        return html`<tabs-demo></tabs-demo>`;
      case "toast":
        return html`<toast-demo></toast-demo>`;
      case "toggle":
        return html`<toggle-demo></toggle-demo>`;
      case "tooltip":
        return html`<tooltip-demo></tooltip-demo>`;
      default:
        return html`<div class="p-4">Page not found</div>`;
    }
  }
}
