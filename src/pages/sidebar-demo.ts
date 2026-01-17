import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("sidebar-demo")
export class SidebarDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Sidebar</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A composable sidebar component.
          </p>
        </div>

        <section class="space-y-4">
          <div class="border rounded-lg bg-card overflow-hidden h-[400px] flex">
            <!-- Basic Sidebar Example inside a container -->
            <ui-sidebar class="w-64 border-r h-full">
              <ui-sidebar-header>
                <div class="px-4 py-2 font-bold">My App</div>
              </ui-sidebar-header>
              <ui-sidebar-content>
                <ui-sidebar-menu>
                  <ui-sidebar-menu-item>
                    <ui-sidebar-menu-button isActive
                      >Dashboard</ui-sidebar-menu-button
                    >
                  </ui-sidebar-menu-item>
                  <ui-sidebar-menu-item>
                    <ui-sidebar-menu-button>Settings</ui-sidebar-menu-button>
                  </ui-sidebar-menu-item>
                </ui-sidebar-menu>
              </ui-sidebar-content>
              <ui-sidebar-footer>
                <div class="p-4 text-xs text-muted-foreground">User</div>
              </ui-sidebar-footer>
            </ui-sidebar>
            <div class="flex-1 p-8 bg-muted/20">
              <p>Main content area mimicking a layout.</p>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
