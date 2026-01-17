import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("accordion-demo")
export class AccordionDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Accordion</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A vertically stacked set of interactive headings that each reveal a
            section of content.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card">
            <ui-accordion type="single" collapsible>
              <ui-accordion-item value="item-1">
                <ui-accordion-trigger>Is it accessible?</ui-accordion-trigger>
                <ui-accordion-content>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </ui-accordion-content>
              </ui-accordion-item>

              <ui-accordion-item value="item-2">
                <ui-accordion-trigger>Is it styled?</ui-accordion-trigger>
                <ui-accordion-content>
                  Yes. It comes with default styles that matches the other
                  components' aesthetic.
                </ui-accordion-content>
              </ui-accordion-item>

              <ui-accordion-item value="item-3">
                <ui-accordion-trigger>Is it animated?</ui-accordion-trigger>
                <ui-accordion-content>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </ui-accordion-content>
              </ui-accordion-item>
            </ui-accordion>
          </div>
        </section>
      </div>
    `;
  }
}
