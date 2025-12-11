import { LitElement, html, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import tailwindStyles from "./dropdown.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-dropdown")
export class UiDropdown extends LitElement {
  static styles = [styles];

  @state() open = false;

  toggle() {
    this.open = !this.open;
    this.requestUpdate();
  }

  close() {
    this.open = false;
    this.requestUpdate();
  }

  handleOutsideClick = (e: MouseEvent) => {
    // If the click is not inside the dropdown, close it
    if (!this.contains(e.target as Node)) {
      this.close();
    }
  };

  connectedCallback() {
    super.connectedCallback();
    // Use window or document. Capture phase might be better to handle events outside shadow dom boundaries if needed,
    // but standard document click is usually fine for "click outside"
    document.addEventListener("click", this.handleOutsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.handleOutsideClick);
  }

  render() {
    return html`
      <div
        class="relative inline-block text-left"
        @keyup=${(e: KeyboardEvent) => e.key === "Escape" && this.close()}
      >
        <slot></slot>
      </div>
    `;
  }

  updated() {
    // Notify content child to re-render when open state changes
    const content = this.querySelector("ui-dropdown-content");
    if (content) {
      (content as LitElement).requestUpdate();
    }
  }
}
