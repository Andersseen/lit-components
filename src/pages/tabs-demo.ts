import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("tabs-demo")
export class TabsDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Tabs</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A set of layered sections of content—known as tab panels—that are
            displayed one at a time.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card">
            <ui-tabs defaultValue="account" class="w-[400px]">
              <ui-tabs-list class="grid w-full grid-cols-2">
                <ui-tabs-trigger value="account">Account</ui-tabs-trigger>
                <ui-tabs-trigger value="password">Password</ui-tabs-trigger>
              </ui-tabs-list>
              <ui-tabs-content value="account">
                <div class="p-4 border rounded-md mt-2">
                  <h3 class="font-semibold">Account</h3>
                  <p class="text-sm text-muted-foreground">
                    Make changes to your account here.
                  </p>
                </div>
              </ui-tabs-content>
              <ui-tabs-content value="password">
                <div class="p-4 border rounded-md mt-2">
                  <h3 class="font-semibold">Password</h3>
                  <p class="text-sm text-muted-foreground">
                    Change your password here.
                  </p>
                </div>
              </ui-tabs-content>
            </ui-tabs>
          </div>
        </section>
      </div>
    `;
  }
}
