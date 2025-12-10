import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./tabs.css?inline";

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

@customElement("ui-tabs-list")
export class UiTabsList extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <div
        role="tablist"
        class="inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500 w-full"
      >
        <slot></slot>
      </div>
    `;
  }
}

@customElement("ui-tabs-trigger")
export class UiTabsTrigger extends LitElement {
  static styles = [styles];

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
        class="${cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          this.isActive
            ? "bg-white text-slate-950 shadow-sm"
            : "hover:bg-slate-200 hover:text-slate-900"
        )}"
        @click=${this.handleClick}
        ?aria-selected=${this.isActive}
      >
        <slot></slot>
      </button>
    `;
  }

  get isActive() {
    const parent = this.closest("ui-tabs") as any;
    return parent && parent.activeTab === this.value;
  }
}

@customElement("ui-tabs-content")
export class UiTabsContent extends LitElement {
  static styles = [styles];

  @property() value = "";

  render() {
    const parent = this.closest("ui-tabs") as any;
    const isActive = parent && parent.activeTab === this.value;

    return html`
      <div
        role="tabpanel"
        class="${cn(
          "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isActive ? "block" : "hidden"
        )}"
        ?hidden=${!isActive}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-tabs": UiTabs;
    "ui-tabs-list": UiTabsList;
    "ui-tabs-trigger": UiTabsTrigger;
    "ui-tabs-content": UiTabsContent;
  }
}
