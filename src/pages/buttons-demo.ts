import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("buttons-demo")
export class ButtonsDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Buttons</h1>
          <p class="text-lg text-muted-foreground mt-2">
            Displays a button or a component that looks like a button.
          </p>
        </div>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold">Variants</h2>
          <div class="flex flex-wrap gap-4 p-6 border rounded-lg bg-card">
            <ui-button variant="primary">Primary</ui-button>
            <ui-button variant="secondary">Secondary</ui-button>
            <ui-button variant="outline">Outline</ui-button>
            <ui-button variant="ghost">Ghost</ui-button>
            <ui-button variant="destructive">Destructive</ui-button>
            <ui-button variant="link">Link</ui-button>
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold">Sizes</h2>
          <div
            class="flex flex-wrap items-center gap-4 p-6 border rounded-lg bg-card"
          >
            <ui-button size="sm">Small</ui-button>
            <ui-button size="md">Medium</ui-button>
            <ui-button size="lg">Large</ui-button>
            <ui-button size="icon" variant="outline">
              <ui-icon name="arrow-right"></ui-icon>
            </ui-button>
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold">States</h2>
          <div class="flex flex-wrap gap-4 p-6 border rounded-lg bg-card">
            <ui-button disabled>Disabled</ui-button>
            <ui-button loading>Loading</ui-button>
          </div>
        </section>

        <section class="space-y-4">
          <h2 class="text-xl font-semibold">With Icons</h2>
          <div class="flex flex-wrap gap-4 p-6 border rounded-lg bg-card">
            <ui-button iconLeft="check">Save</ui-button>
            <ui-button iconRight="arrow-right" variant="outline"
              >Next Step</ui-button
            >
          </div>
        </section>
      </div>
    `;
  }
}
