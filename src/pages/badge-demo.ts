import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("badge-demo")
export class BadgeDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Badge</h1>
          <p class="text-lg text-muted-foreground mt-2">
            Displays a badge or a component that looks like a badge.
          </p>
        </div>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold">Variants</h2>
          <div class="flex flex-wrap gap-4 p-6 border rounded-lg bg-card">
            <ui-badge>Default</ui-badge>
            <ui-badge variant="secondary">Secondary</ui-badge>
            <ui-badge variant="outline">Outline</ui-badge>
            <ui-badge variant="destructive">Destructive</ui-badge>
          </div>
        </section>
      </div>
    `;
  }
}
