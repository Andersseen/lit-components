import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("dropdown-demo")
export class DropdownDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Dropdown Menu</h1>
          <p class="text-lg text-muted-foreground mt-2">
            Displays a menu to the user — such as a set of actions or functions
            — triggered by a button.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card flex justify-center py-24">
            <ui-dropdown>
              <ui-dropdown-trigger asChild>
                <ui-button variant="outline">Open Menu</ui-button>
              </ui-dropdown-trigger>
              <ui-dropdown-content align="end">
                <ui-dropdown-item>Profile</ui-dropdown-item>
                <ui-dropdown-item>Billing</ui-dropdown-item>
                <ui-dropdown-item>Team</ui-dropdown-item>
                <ui-dropdown-item>Subscription</ui-dropdown-item>
              </ui-dropdown-content>
            </ui-dropdown>
          </div>
        </section>
      </div>
    `;
  }
}
