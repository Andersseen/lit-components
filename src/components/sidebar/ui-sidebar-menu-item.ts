import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";
import { cn } from "../../utils";
import { sidebarMenuItemVariants } from "./sidebar.variants";

@customElement("ui-sidebar-menu-item")
export class UiSidebarMenuItem extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];
  render() {
    return html`<li class="${cn(sidebarMenuItemVariants())}">
      <slot></slot>
    </li>`;
  }
}
