import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./tabs.css?inline";
import { tabsContentVariants } from "./tabs.variants";
import { UiTabs } from "./ui-tabs";

@customElement("ui-tabs-content")
export class UiTabsContent extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property() value = "";

  render() {
    const parent = this.closest("ui-tabs") as UiTabs;
    const isActive = parent && parent.activeTab === this.value;

    return html`
      <div
        role="tabpanel"
        class="${cn(tabsContentVariants(), isActive ? "block" : "hidden")}"
        ?hidden=${!isActive}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-tabs-content": UiTabsContent;
  }
}
