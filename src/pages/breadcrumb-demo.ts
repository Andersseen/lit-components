import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("breadcrumb-demo")
export class BreadcrumbDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Breadcrumb</h1>
          <p class="text-lg text-muted-foreground mt-2">
            Displays the path to the current resource using a hierarchy of
            links.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card">
            <ui-breadcrumb>
              <ui-breadcrumb-item href="#">Home</ui-breadcrumb-item>
              <ui-breadcrumb-separator></ui-breadcrumb-separator>
              <ui-breadcrumb-item href="#">Components</ui-breadcrumb-item>
              <ui-breadcrumb-separator></ui-breadcrumb-separator>
              <ui-breadcrumb-item>Breadcrumb</ui-breadcrumb-item>
            </ui-breadcrumb>
          </div>
        </section>
      </div>
    `;
  }
}
