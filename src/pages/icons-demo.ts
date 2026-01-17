import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { tailwindStyles } from "../styles/shared";
import * as Icons from "../icons/index";

@customElement("icons-demo")
export class IconsDemo extends LitElement {
  static styles = [
    tailwindStyles,
    css`
      :host {
        display: block;
      }
      .icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 1rem;
      }
    `,
  ];

  @state() searchQuery = "";
  @state() size = 24;
  @state() selectedColor = "currentColor";
  @state() selectedIconName = "search";
  @state() filled = false;
  @state() strokeWidth = 2.5;

  render() {
    // Icons namespace might contain other exports, we filter for strings (legacy SVG strings or Templates)
    // But checking Icons object structure:
    const allIcons = Object.entries(Icons).filter(
      ([, content]) =>
        // Ensure we are only picking up icon exports, which are likely strings or TemplateResults.
        // Also filtering out potential module metadata if any.
        typeof content === "string" ||
        (typeof content === "object" && content !== null),
    );

    const filteredIcons = allIcons.filter(([name]) =>
      name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );

    const colors = [
      { name: "Current", value: "currentColor", bg: "#334155" },
      {
        name: "Blue",
        value: "oklch(0.593 0.179 246.382)",
        bg: "oklch(0.593 0.179 246.382)",
      },
      {
        name: "Red",
        value: "oklch(0.577 0.245 27.325)",
        bg: "oklch(0.577 0.245 27.325)",
      },
      {
        name: "Green",
        value: "oklch(0.627 0.194 149.214)",
        bg: "oklch(0.627 0.194 149.214)",
      },
      {
        name: "Orange",
        value: "oklch(0.769 0.188 70.08)",
        bg: "oklch(0.769 0.188 70.08)",
      },
    ];

    const sizeOptions = [
      { label: "Small", value: 16 },
      { label: "Medium", value: 24 },
      { label: "Large", value: 32 },
    ];

    const getDisplayName = (name: string) =>
      name.replace(/^icon/, "").toLowerCase();

    return html`
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold tracking-tight">Icons</h1>
          <p class="text-lg text-muted-foreground mt-2">
            A centralized icon registry. Contains ${allIcons.length} icons.
          </p>
        </div>

        <!-- Controls -->
        <div
          class="grid gap-6 p-6 border rounded-lg bg-card text-card-foreground"
        >
          <div class="grid gap-2">
            <label class="text-sm font-medium">Search</label>
            <input
              type="text"
              class="flex h-10 w-full max-w-sm rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Search icons..."
              .value=${this.searchQuery}
              @input=${(e: Event) =>
                (this.searchQuery = (e.target as HTMLInputElement).value)}
            />
          </div>

          <div class="flex flex-wrap gap-8">
            <div class="grid gap-2">
              <label class="text-sm font-medium">Style</label>
              <div class="flex items-center gap-4">
                <label class="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    .checked=${this.filled}
                    @change=${(e: Event) =>
                      (this.filled = (e.target as HTMLInputElement).checked)}
                    class="h-4 w-4 rounded border-primary text-primary focus:ring-primary"
                  />
                  Filled
                </label>

                <label class="flex items-center gap-2 text-sm">
                  <span>Width: ${this.strokeWidth}px</span>
                  <input
                    type="range"
                    min="0.5"
                    max="4"
                    step="0.5"
                    .value=${this.strokeWidth.toString()}
                    @input=${(e: Event) =>
                      (this.strokeWidth = parseFloat(
                        (e.target as HTMLInputElement).value,
                      ))}
                    class="w-24 accent-primary"
                  />
                </label>
              </div>
            </div>

            <div class="grid gap-2">
              <label class="text-sm font-medium">Size</label>
              <div class="flex gap-2">
                ${sizeOptions.map(
                  (opt) => html`
                    <button
                      class="px-3 py-1.5 text-sm rounded-md border transition-colors ${this
                        .size === opt.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background hover:bg-muted"}"
                      @click=${() => (this.size = opt.value)}
                    >
                      ${opt.label}
                    </button>
                  `,
                )}
              </div>
            </div>

            <div class="grid gap-2">
              <label class="text-sm font-medium">Color</label>
              <div class="flex gap-2">
                ${colors.map(
                  (c) => html`
                    <button
                      class="w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${this
                        .selectedColor === c.value
                        ? "border-primary ring-2 ring-offset-2 ring-primary"
                        : "border-transparent"}"
                      style="background-color: ${c.bg}"
                      title="${c.name}"
                      @click=${() => (this.selectedColor = c.value)}
                    ></button>
                  `,
                )}
              </div>
            </div>
          </div>
        </div>

        <!-- Grid -->
        <div
          class="icon-grid"
          style="color: ${this.selectedColor === "currentColor"
            ? "inherit"
            : this.selectedColor}"
        >
          ${filteredIcons.map(
            ([name, svg]) => html`
              <div
                class="flex flex-col items-center justify-center p-4 gap-3 bg-card text-card-foreground border rounded-lg cursor-pointer hover:border-primary/50 hover:shadow-md transition-all active:scale-95"
                @click=${() => (this.selectedIconName = getDisplayName(name))}
              >
                <ui-icon
                  .src=${svg}
                  .filled=${this.filled}
                  .strokeWidth=${this.strokeWidth}
                  style="width: ${this.size}px; height: ${this.size}px;"
                ></ui-icon>
                <span
                  class="text-xs text-muted-foreground font-medium truncate w-full text-center"
                  >${getDisplayName(name)}</span
                >
              </div>
            `,
          )}
        </div>

        <!-- Usage -->
        <div class="p-6 bg-muted rounded-lg border">
          <h3 class="font-semibold mb-3">Usage</h3>
          <div
            class="bg-card p-4 rounded-md font-mono text-sm overflow-x-auto text-card-foreground border"
          >
            &lt;ui-icon <br />
            &nbsp;&nbsp;.src=\${Icons.icon${this.selectedIconName
              .charAt(0)
              .toUpperCase() +
            this.selectedIconName.replace(/\s/g, "").slice(1)}} <br />
            &nbsp;&nbsp;class="text-${this.selectedColor === "currentColor"
              ? "foreground"
              : "custom"}" <br />
            &gt;&lt;/ui-icon&gt;
          </div>
        </div>
      </div>
    `;
  }
}
