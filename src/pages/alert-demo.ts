import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("alert-demo")
export class AlertDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Alert</h1>
          <p class="text-lg text-muted-foreground mt-2">
            Displays a callout for user attention.
          </p>
        </div>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold">Default</h2>
          <div class="p-6 border rounded-lg bg-card text-foreground">
            <ui-alert>
              <ui-icon name="circle-alert" class="size-4"></ui-icon>
              <ui-alert-title>Heads up!</ui-alert-title>
              <ui-alert-description>
                You can add components to your app using the cli.
              </ui-alert-description>
            </ui-alert>
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold">Destructive</h2>
          <div class="p-6 border rounded-lg bg-card">
            <ui-alert variant="destructive">
              <ui-icon name="circle-alert" class="size-4"></ui-icon>
              <ui-alert-title>Error</ui-alert-title>
              <ui-alert-description>
                Your session has expired. Please log in again.
              </ui-alert-description>
            </ui-alert>
          </div>
        </section>
      </div>
    `;
  }
}
