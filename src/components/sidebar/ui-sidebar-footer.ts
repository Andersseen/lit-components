import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import tailwindStyles from "./sidebar.css?inline";
import { cn } from "../../utils";
import { sidebarFooterVariants } from "./sidebar.variants";

@customElement("ui-sidebar-footer")
export class UiSidebarFooter extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div class="${cn(sidebarFooterVariants())}">
        <slot></slot>
      </div>
    `;
  }
}
