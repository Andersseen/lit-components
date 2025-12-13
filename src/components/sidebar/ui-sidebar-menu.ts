import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";
import { cn } from "../../utils";
import { sidebarMenuVariants } from "./sidebar.variants";

@customElement("ui-sidebar-menu")
export class UiSidebarMenu extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];
  render() {
    return html`<ul class="${cn(sidebarMenuVariants())}">
      <slot></slot>
    </ul>`;
  }
}
