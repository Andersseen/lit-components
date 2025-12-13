import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./tabs.css?inline";
import { tabsListVariants } from "./tabs.variants";

@customElement("ui-tabs-list")
export class UiTabsList extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  render() {
    return html`
      <div role="tablist" class="${cn(tabsListVariants())}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-tabs-list": UiTabsList;
  }
}
