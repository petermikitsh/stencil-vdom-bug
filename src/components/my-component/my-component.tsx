import { Component, State, h } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  connectedCallback() {
    window.setTimeout(() => {
      this.options = ["foo", "bar"];
    }, 4000);
  }

  @State() options = ["foo"];

  render() {
    return (
      <div>
        <div>
          <my-select>
            {this.options.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </my-select>
        </div>
      </div>
    );
  }
}
