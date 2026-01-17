import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("modal-demo")
export class ModalDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Modal (Dialog)</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A window overlaid on either the primary window or another dialog
            window, rendering the content underneath inert.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card flex justify-center">
            <ui-modal>
              <ui-button slot="trigger" variant="outline"
                >Edit Profile</ui-button
              >
              <ui-modal-header>
                <ui-modal-title>Edit Profile</ui-modal-title>
                <ui-modal-description>
                  Make changes to your profile here. Click save when you're
                  done.
                </ui-modal-description>
              </ui-modal-header>
              <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                  <label for="name" class="text-right text-sm font-medium"
                    >Name</label
                  >
                  <input
                    id="name"
                    value="Pedro Duarte"
                    class="col-span-3 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <ui-modal-footer>
                <ui-button type="submit">Save changes</ui-button>
              </ui-modal-footer>
            </ui-modal>
          </div>
        </section>
      </div>
    `;
  }
}
