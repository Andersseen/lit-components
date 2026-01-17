import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("drawer-demo")
export class DrawerDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Drawer</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A drawer component for displaying content that slides in from the
            edge of the screen.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card flex justify-center">
            <ui-drawer>
              <ui-drawer-trigger asChild>
                <ui-button variant="outline">Open Drawer</ui-button>
              </ui-drawer-trigger>
              <ui-drawer-content>
                <ui-drawer-header>
                  <h2 class="text-lg font-semibold">Edit Profile</h2>
                  <p class="text-sm text-muted-foreground">
                    Make changes to your profile here. Click save when you're
                    done.
                  </p>
                </ui-drawer-header>
                <div class="p-4 space-y-4">
                  <!-- Example content -->
                  <div class="grid grid-cols-4 items-center gap-4">
                    <label for="name" class="text-right text-sm font-medium"
                      >Name</label
                    >
                    <input
                      id="name"
                      value="Pedro Duarte"
                      class="col-span-3 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <ui-drawer-footer>
                  <ui-button>Save changes</ui-button>
                  <ui-drawer-trigger asChild>
                    <ui-button variant="outline">Cancel</ui-button>
                  </ui-drawer-trigger>
                </ui-drawer-footer>
              </ui-drawer-content>
            </ui-drawer>
          </div>
        </section>
      </div>
    `;
  }
}
