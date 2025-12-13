import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import tailwindStyles from "./tabs.css?inline";
import "./ui-tabs-list";
import "./ui-tabs-trigger";
import "./ui-tabs-content";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-tabs")
export class UiTabs extends LitElement {
  static styles = [styles];

  @property() defaultValue = "";
  @property() value = "";
  @state() activeTab = "";

  constructor() {
    super();
    this.addEventListener("tab-trigger", (e: Event) => {
      const detail = (e as CustomEvent).detail;
      this.setActiveTab(detail.value);
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.activeTab = this.value || this.defaultValue;
  }

  setActiveTab(value: string) {
    this.activeTab = value;
    this.dispatchEvent(new CustomEvent("value-change", { detail: { value } }));
    this.requestUpdate();
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("value") && this.value !== undefined) {
      this.activeTab = this.value;
    }
    if (changedProperties.has("activeTab")) {
      // Notify children to re-render since they depend on parent state
      [
        ...Array.from(this.querySelectorAll("ui-tabs-trigger")),
        ...Array.from(this.querySelectorAll("ui-tabs-content")),
      ].forEach((el) => (el as LitElement).requestUpdate());
    }
  }

  render() {
    return html`<div class="w-full"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-tabs": UiTabs;
  }
}
