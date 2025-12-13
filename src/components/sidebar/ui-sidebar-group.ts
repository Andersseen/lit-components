import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";
import { cn } from "../../utils";
import { sidebarGroupVariants } from "./sidebar.variants";

@customElement("ui-sidebar-group")
export class UiSidebarGroup extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];
  render() {
    return html`<div class="${cn(sidebarGroupVariants())}">
      <slot></slot>
    </div>`;
  }
}
