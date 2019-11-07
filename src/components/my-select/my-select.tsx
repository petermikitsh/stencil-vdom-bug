import { Component, h } from "@stencil/core";

@Component({
  tag: "my-select",
  shadow: false
})
export class MySelect {
  render() {
    return (
      <select>
        <slot />
      </select>
    );
  }
}
