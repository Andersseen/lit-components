import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { tailwindStyles } from "./styles/shared";
import "./pages/home-page";
import "./pages/buttons-demo";
import "./pages/icons-demo";
import "./pages/cards-demo";
import "./index";
// Import other demos as created

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
              <ui-sidebar-menu-item>
                <ui-sidebar-menu-button
                  href="#buttons"
                  ?isActive=${this.activeRoute === "buttons"}
                >
                  Buttons
                </ui-sidebar-menu-button>
              </ui-sidebar-menu-item>
              <ui-sidebar-menu-item>
                <ui-sidebar-menu-button
                  href="#cards"
                  ?isActive=${this.activeRoute === "cards"}
                >
                  Cards
                </ui-sidebar-menu-button>
              </ui-sidebar-menu-item>
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

  private renderPage() {
    switch (this.activeRoute) {
      case "home":
        return html`<home-page></home-page>`;
      case "buttons":
        return html`<buttons-demo></buttons-demo>`;
      case "icons":
        return html`<icons-demo></icons-demo>`;
      case "cards":
        return html`<cards-demo></cards-demo>`;
      default:
        return html`<div class="p-4">Page not found</div>`;
    }
  }
}
