import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import tailwindStyles from "./breadcrumb.css?inline";

const styles = unsafeCSS(tailwindStyles);

@customElement("ui-breadcrumb-item")
export class UiBreadcrumbItem extends LitElement {
  static styles = [styles];

  @property({ type: String }) href = "";
  @property({ type: Boolean }) active = false;

  render() {
    return html`
      <li class="inline-flex items-center gap-1.5">
        ${this.href
          ? html`<a
              href="${this.href}"
              class="${cn(
                "transition-colors hover:text-slate-900",
                this.active ? "text-slate-900 font-normal" : "font-normal"
              )}"
              ><slot></slot
            ></a>`
          : html`<span
              class="${cn("font-normal", this.active ? "text-slate-900" : "")}"
              ><slot></slot
            ></span>`}
      </li>
    `;
  }
}
