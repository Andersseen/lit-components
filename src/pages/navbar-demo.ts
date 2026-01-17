import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("navbar-demo")
export class NavbarDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Navbar</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A responsive navigation header.
          </p>
        </div>

        <section class="space-y-4">
          <div class="border rounded-lg bg-card overflow-hidden">
            <ui-navbar>
              <ui-navbar-brand href="#">Brand</ui-navbar-brand>
              <ui-navbar-content>
                <a
                  href="#"
                  class="text-sm font-medium transition-colors hover:text-primary"
                  >Overview</a
                >
                <a
                  href="#"
                  class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >Customers</a
                >
                <a
                  href="#"
                  class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >Products</a
                >
                <a
                  href="#"
                  class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >Settings</a
                >
              </ui-navbar-content>
            </ui-navbar>
          </div>
        </section>
      </div>
    `;
  }
}
