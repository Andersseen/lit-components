import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";
import { toast } from "../components/toast";

@customElement("toast-demo")
export class ToastDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Toast</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A succinct message that is displayed temporarily.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card flex gap-4">
            <ui-button
              variant="outline"
              @click=${() => {
                toast({
                  title: "Scheduled: Catch up",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                });
              }}
            >
              Add to Calendar
            </ui-button>

            <ui-button
              variant="destructive"
              @click=${() => {
                toast({
                  title: "Uh oh! Something went wrong.",
                  description: "There was a problem with your request.",
                  variant: "error",
                });
              }}
            >
              Destructive
            </ui-button>
          </div>
        </section>
      </div>
    `;
  }
}
