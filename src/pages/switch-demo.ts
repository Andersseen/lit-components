import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("switch-demo")
export class SwitchDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Switch</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A control that allows the user to toggle between checked and
            unchecked states.
          </p>
        </div>

        <section class="space-y-4">
          <div
            class="p-6 border rounded-lg bg-card flex items-center space-x-2"
          >
            <ui-switch id="airplane-mode"></ui-switch>
            <label
              for="airplane-mode"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Airplane Mode
            </label>
          </div>
        </section>
      </div>
    `;
  }
}
