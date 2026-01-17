import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("menu-demo")
export class MenuDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Menubar</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A visually persistent menu common in desktop applications that
            provides quick access to a consistent set of commands.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card text-foreground">
            <ui-menu>
              <ui-menu-item>
                File
                <!-- Submenus would go here if implemented -->
              </ui-menu-item>
              <ui-menu-item>Edit</ui-menu-item>
              <ui-menu-item>View</ui-menu-item>
              <ui-menu-item>Profiles</ui-menu-item>
            </ui-menu>
          </div>
        </section>
      </div>
    `;
  }
}
