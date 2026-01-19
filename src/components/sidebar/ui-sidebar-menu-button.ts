import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./sidebar.css?inline";
import { sidebarMenuButtonVariants } from "./sidebar.variants";
import "../icon/ui-icon";

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
      /* Si colapsamos, quitamos el margen del texto para centrar bien el icono */
      :host-context([collapsed]) span {
        width: 0;
        opacity: 0;
        margin-left: 0;
      }
    `,
  ];

  @property({ type: Boolean, reflect: true }) isActive = false;
  @property({ type: String }) href = "#";
  @property({ type: String }) icon = "";

  render() {
    return html`
      <a
        href="${this.href}"
        class="${cn(sidebarMenuButtonVariants({ isActive: this.isActive }))}"
      >
        ${this.icon
          ? html`<ui-icon
              name="${this.icon}"
              class="h-4 w-4 shrink-0"
            ></ui-icon>`
          : html`<slot name="icon"></slot>`}
        <span
          class="ml-2 whitespace-nowrap overflow-hidden transition-all duration-200"
        >
          <slot></slot>
        </span>
      </a>
    `;
  }
}
