import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./tabs.css?inline";
import { tabsTriggerVariants } from "./tabs.variants";
import { UiTabs } from "./ui-tabs";

@customElement("ui-tabs-trigger")
export class UiTabsTrigger extends LitElement {
  static styles = [unsafeCSS(tailwindStyles)];

  @property() value = "";

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent("tab-trigger", {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
  }

  render() {
    return html`
      <button
        role="tab"
        type="button"
        class="${cn(tabsTriggerVariants({ isActive: this.isActive }))}"
        @click=${this.handleClick}
        ?aria-selected=${this.isActive}
      >
        <slot></slot>
      </button>
    `;
  }

  get isActive() {
    const parent = this.closest("ui-tabs") as UiTabs;
    return parent && parent.activeTab === this.value;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-tabs-trigger": UiTabsTrigger;
  }
}
