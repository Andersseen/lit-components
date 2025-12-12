import { LitElement, html, unsafeCSS, svg } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import { alertVariants, type AlertVariants } from "./alert.variants";
import tailwindStyles from "./alert.css?inline";

const styles = unsafeCSS(tailwindStyles);

// Definimos los iconos como Templates de Lit (svg tag)
const ICONS = {
  default: svg`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>`,
  destructive: svg`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" x2="9" y1="9" y2="15"></line>
      <line x1="9" x2="15" y1="9" y2="15"></line>
    </svg>`,
  success: svg`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>`,
  warning: svg`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>`,
};

@customElement("ui-alert")
export class UiAlert extends LitElement {
  @property() variant: AlertVariants["variant"] = "default";

  static styles = [styles];

  render() {
    // Seleccionamos el icono basado en la variante (o default si falla)
    const icon = ICONS[this.variant || "default"] || ICONS.default;

    return html`
      <div role="alert" class="${cn(alertVariants({ variant: this.variant }))}">
        ${icon}

        <div class="flex-1">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
