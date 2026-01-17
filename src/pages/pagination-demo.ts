import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("pagination-demo")
export class PaginationDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Pagination</h1>
          <p class="text-lg text-muted-foreground mt-2">
            Pagination with page navigation, next and previous links.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card">
            <ui-pagination>
              <ui-pagination-content>
                <ui-pagination-item>
                  <ui-pagination-previous href="#"></ui-pagination-previous>
                </ui-pagination-item>
                <ui-pagination-item>
                  <ui-pagination-link href="#" isActive>1</ui-pagination-link>
                </ui-pagination-item>
                <ui-pagination-item>
                  <ui-pagination-link href="#">2</ui-pagination-link>
                </ui-pagination-item>
                <ui-pagination-item>
                  <ui-pagination-link href="#">3</ui-pagination-link>
                </ui-pagination-item>
                <ui-pagination-item>
                  <ui-pagination-ellipsis></ui-pagination-ellipsis>
                </ui-pagination-item>
                <ui-pagination-item>
                  <ui-pagination-next href="#"></ui-pagination-next>
                </ui-pagination-item>
              </ui-pagination-content>
            </ui-pagination>
          </div>
        </section>
      </div>
    `;
  }
}
