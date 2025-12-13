import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";
import { cn } from "../../utils";
import { sidebarContentVariants } from "./sidebar.variants";

@customElement("ui-sidebar-content")
export class UiSidebarContent extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div class="${cn(sidebarContentVariants())}">
        <slot></slot>
      </div>
    `;
  }
}
