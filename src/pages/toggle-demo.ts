import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("toggle-demo")
export class ToggleDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Toggle</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A two-state button that can be either on or off.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card flex gap-4">
            <ui-toggle aria-label="Toggle bold">
              <ui-icon name="bold" class="size-4"></ui-icon>
            </ui-toggle>

            <ui-toggle variant="outline" aria-label="Toggle italic">
              <ui-icon name="italic" class="size-4"></ui-icon>
            </ui-toggle>

            <ui-toggle size="lg" aria-label="Toggle large">
              <span class="font-semibold">Large</span>
            </ui-toggle>
          </div>
        </section>
      </div>
    `;
  }
}
