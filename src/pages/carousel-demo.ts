import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";

@customElement("carousel-demo")
export class CarouselDemo extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Carousel</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A carousel with motion and swipe support.
          </p>
        </div>

        <section class="space-y-4">
          <div class="p-6 border rounded-lg bg-card flex justify-center">
            <ui-carousel class="w-full max-w-xs">
              <ui-carousel-content>
                ${Array.from({ length: 5 }).map(
                  (_, index) => html`
                    <ui-carousel-item>
                      <div class="p-1">
                        <ui-card>
                          <ui-card-content
                            class="flex aspect-square items-center justify-center p-6"
                          >
                            <span class="text-4xl font-semibold"
                              >${index + 1}</span
                            >
                          </ui-card-content>
                        </ui-card>
                      </div>
                    </ui-carousel-item>
                  `,
                )}
              </ui-carousel-content>
              <ui-carousel-previous></ui-carousel-previous>
              <ui-carousel-next></ui-carousel-next>
            </ui-carousel>
          </div>
        </section>
      </div>
    `;
  }
}
