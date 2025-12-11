import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import tailwindStyles from "./menu.css?inline";
import { cn } from "../../utils";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-menu-item")
export class UiMenuItem extends LitElement {
  static styles = [styles];

  @property({ type: Boolean }) disabled = false;

  render() {
    return html`
      <div
        class="${cn(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          this.disabled ? "pointer-events-none opacity-50" : "cursor-pointer"
        )}"
        ?data-disabled="${this.disabled}"
      >
        <slot></slot>
      </div>
    `;
  }
}
