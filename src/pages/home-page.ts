import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("home-page")
export class HomePage extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-6">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Lit UI Components</h1>
          <p class="text-lg text-muted-foreground mt-2">
            Beautifully designed components built with Lit, Tailwind CSS v4, and
            TypeScript.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ui-card>
            <ui-card-header>
              <ui-card-title>Modern Stack</ui-card-title>
              <ui-card-description>Latest technologies</ui-card-description>
            </ui-card-header>
            <ui-card-content>
              <p class="text-sm">
                Built with pure Web Components using Lit 3 and styled with the
                new Tailwind CSS v4 engine.
              </p>
            </ui-card-content>
          </ui-card>

          <ui-card>
            <ui-card-header>
              <ui-card-title>Themable</ui-card-title>
              <ui-card-description>Semantic design system</ui-card-description>
            </ui-card-header>
            <ui-card-content>
              <p class="text-sm">
                Uses CSS variables for specific theme tokens. Easily switch
                between light and dark modes.
              </p>
            </ui-card-content>
          </ui-card>

          <ui-card>
            <ui-card-header>
              <ui-card-title>Accessible</ui-card-title>
              <ui-card-description>ARIA compliant</ui-card-description>
            </ui-card-header>
            <ui-card-content>
              <p class="text-sm">
                Follows WAI-ARIA patterns for accessible interactive components
                suitable for all users.
              </p>
            </ui-card-content>
          </ui-card>
        </div>
      </div>
    `;
  }
}
