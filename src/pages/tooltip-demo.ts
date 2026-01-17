import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("tooltip-demo")
export class TooltipDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Tooltip</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A popup that displays information related to an element when the
            element receives keyboard focus or the mouse hovers over it.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card flex justify-center py-12">
            <ui-tooltip>
              <ui-button variant="outline" slot="trigger">Hover me</ui-button>
              <ui-tooltip-content>
                <p>Add to library</p>
              </ui-tooltip-content>
            </ui-tooltip>
          </div>
        </section>
      </div>
    `;
  }
}
