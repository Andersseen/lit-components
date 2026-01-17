import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("cards-demo")
export class CardsDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Card</h1>
          <p class="text-lg text-muted-foreground mt-2">
            Displays a card with header, content, and footer.
          </p>
        </div>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold">Examples</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Simple Card -->
            <ui-card>
              <ui-card-header>
                <ui-card-title>Create project</ui-card-title>
                <ui-card-description
                  >Deploy your new project in one-click.</ui-card-description
                >
              </ui-card-header>
              <ui-card-content>
                <form>
                  <div class="grid w-full items-center gap-4">
                    <div class="flex flex-col space-y-1.5">
                      <label class="text-sm font-medium leading-none" for="name"
                        >Name</label
                      >
                      <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        id="name"
                        placeholder="Name of your project"
                      />
                    </div>
                  </div>
                </form>
              </ui-card-content>
              <ui-card-footer class="justify-between">
                <ui-button variant="outline">Cancel</ui-button>
                <ui-button>Deploy</ui-button>
              </ui-card-footer>
            </ui-card>

            <!-- Notifications Card -->
            <ui-card>
              <ui-card-header>
                <ui-card-title>Notifications</ui-card-title>
                <ui-card-description
                  >You have 3 unread messages.</ui-card-description
                >
              </ui-card-header>
              <ui-card-content class="grid gap-4">
                <div
                  class="flex items-center space-x-4 rounded-md border p-4 bg-muted/40"
                >
                  <ui-icon name="check" class="text-primary"></ui-icon>
                  <div class="flex-1 space-y-1">
                    <p class="text-sm font-medium leading-none">
                      Push Notifications
                    </p>
                    <p class="text-sm text-muted-foreground">
                      Send notifications to device.
                    </p>
                  </div>
                </div>
                <div
                  class="flex items-center space-x-4 rounded-md border p-4 bg-muted/40"
                >
                  <ui-icon name="loader" class="text-primary"></ui-icon>
                  <div class="flex-1 space-y-1">
                    <p class="text-sm font-medium leading-none">Processing</p>
                    <p class="text-sm text-muted-foreground">
                      Your transaction is being processed.
                    </p>
                  </div>
                </div>
              </ui-card-content>
              <ui-card-footer>
                <ui-button class="w-full" variant="secondary"
                  >Mark all as read</ui-button
                >
              </ui-card-footer>
            </ui-card>
          </div>
        </section>
      </div>
    `;
  }
}
