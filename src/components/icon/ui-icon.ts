import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { tailwindStyles } from "../../styles/shared";
import { icons, type IconName } from "./icons";

export { type IconName };

@customElement("ui-icon")
export class UiIcon extends LitElement {
  static styles = [
    tailwindStyles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        vertical-align: middle;
      }
      svg {
        width: 100%;
        height: 100%;
        fill: var(--icon-fill, none);
        fill-opacity: var(--icon-fill-opacity, 1);
        stroke: currentColor;
        stroke-width: var(--icon-stroke-width, 2.5);
        stroke-linecap: round;
        stroke-linejoin: round;
        overflow: visible;
      }

      /* Bodyless Icon Logic */
      svg.bodyless {
        fill: none !important;
      }
      svg.bodyless .base-circle {
        fill: currentColor;
        opacity: var(--icon-bodyless-opacity, 0);
        stroke: none;
        transition: opacity 0.2s;
      }
      svg.bodyless *:not(.base-circle) {
        stroke: var(--icon-bodyless-stroke, currentColor);
        transition: stroke 0.2s;
      }
    `,
  ];

  @property({ type: String })
  src = "";

  @property({ type: String })
  name?: IconName | string;

  @property({ type: Boolean })
  filled = false;

  @property({ type: Number })
  strokeWidth = 2.5;

  @property({ type: Number })
  size = 24;

  @property({ type: String, reflect: true, attribute: "aria-label" })
  override ariaLabel: string | null = null;

  @property({ type: String, reflect: true, attribute: "aria-hidden" })
  override ariaHidden: string | null = "true";

  render() {
    if (this.src) {
      // iconContent = this.src;
    } else if (this.name) {
      // Check if it's in the registry
      const registeredIcon = icons[this.name as IconName];
      if (registeredIcon) {
        // registeredIcon is a TemplateResult (html`...`), we need to render it.
        // Wait, unsafeSVG expects a string. `html` returns a TemplateResult.
        // If the registry returns a TemplateResult, we can just render it directly.
        // But we want to apply generic styles/unsafeSVG wrapper?
        // Actually, existing icons.ts returns html`...` which is TemplateResult.
        // So we can just return it.
        return html`
          <style>
            :host {
              width: ${this.size}px;
              height: ${this.size}px;
              --icon-fill: ${this.filled ? "currentColor" : "none"};
              --icon-fill-opacity: ${this.filled ? "0.2" : "1"};
              --icon-stroke-width: ${this.strokeWidth};
              --icon-bodyless-opacity: ${this.filled ? "1" : "0"};
              --icon-bodyless-stroke: currentColor;
            }
          </style>
          ${registeredIcon}
        `;
      }
    }

    // Fallback for src string (unsafeSVG)
    return html`
      <style>
        :host {
          width: ${this.size}px;
          height: ${this.size}px;
          --icon-fill: ${this.filled ? "currentColor" : "none"};
          --icon-fill-opacity: ${this.filled ? "0.2" : "1"};
          --icon-stroke-width: ${this.strokeWidth};
          --icon-bodyless-opacity: ${this.filled ? "1" : "0"};
          --icon-bodyless-stroke: currentColor;
        }
      </style>
      ${this.src ? unsafeSVG(this.src) : ""}
    `;
  }
}
