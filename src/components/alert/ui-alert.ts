import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { cn } from "../../utils";
import { tailwindStyles } from "../../styles/shared";
import { alertVariants, type AlertVariants } from "./alert.variants";
import "../icon/ui-icon";
import { type IconName } from "../icon/icons";

@customElement("ui-alert")
export class UiAlert extends LitElement {
  @property() variant: AlertVariants["variant"] = "default";

  static styles = [tailwindStyles];

  private getIconName(): IconName {
    switch (this.variant) {
      case "destructive":
        return "circle-x"; // matches destructive
      case "success":
        return "circle-check"; // matches success
      case "warning":
        return "triangle-alert"; // matches warning
      default:
        return "info"; // matches default 'book' icon
    }
  }

  render() {
    return html`
      <div role="alert" class="${cn(alertVariants({ variant: this.variant }))}">
        <ui-icon name="${this.getIconName()}" class="h-4 w-4"></ui-icon>
        <div class="flex-1">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
