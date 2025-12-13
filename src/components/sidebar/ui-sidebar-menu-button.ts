import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./sidebar.css?inline";

@customElement("ui-sidebar-menu-button")
export class UiSidebarMenuButton extends LitElement {
  static styles = [
    unsafeCSS(tailwindStyles),
    css`
      /* 1. Layout del enlace */
      a {
        justify-content: var(--sidebar-item-justify, flex-start);
        padding: var(--sidebar-item-padding, 0.5rem 0.75rem);
      }

      /* 2. Icono (SVG) fijo */
      ::slotted(svg) {
        flex-shrink: 0;
        width: 1rem;
        height: 1rem;
      }

      /* 3. Texto (SPAN) animado */
      ::slotted(span) {
        opacity: var(--sidebar-text-opacity, 1);
        width: var(--sidebar-text-width, auto);
        overflow: hidden;
        white-space: nowrap;
        transition: opacity 0.2s, width 0.2s;
        margin-left: 0.5rem; /* Gap normal */
      }

      /* Si colapsamos, quitamos el margen del texto para centrar bien el icono */
      :host-context([collapsed]) ::slotted(span) {
        margin-left: 0;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) isActive = false;
  @property() href = "#";

  render() {
    return html`
      <a
        href="${this.href}"
        class="${cn(
          "flex w-full items-center rounded-md text-sm font-medium transition-colors duration-200 outline-none",
          "hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-slate-950",
          this.isActive
            ? "bg-slate-100 text-slate-900 shadow-sm" // Activo
            : "text-slate-500 hover:text-slate-900" // Inactivo
        )}"
      >
        <slot></slot>
      </a>
    `;
  }
}
