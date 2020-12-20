import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

class EvilPlanElement extends HTMLElement {
  _ransom = "one million dollars!";

  get ransom() {
    return this._ransom;
  }

  // every time this property is changed on a DOM element like this `document.querySelector('...').ransom = 'blah';`
  set ransom(value) {
    this._plan = value;
    this.render();
  }

  // only changes to these attributes will trigger `attributeChangedCallback` method
  static get observedAttributes() {
    return ["ransom", "someother"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // when someone changes HTML or does element.setAttribute('ransom', '1 million dollars')

    switch (name) {
      case "ransom":
        // it doesn't have to match property name on the element
        // but it is always a string
        this._ransom = newValue;
        return;
      default:
        // do nothing
        return;
    }
  }

  render() {
    // renders your App within this element
    ReactDOM.render(<App ransom={this.ransom}></App>, this);
  }

  connectedCallback() {
    // every property assigned to the element before your component was defined, is available now
    this.render();
  }
}

const tagName = "evil-plan";

// condition to prevent rerunning on hot module reloads
if (!window.customElements.get(tagName)) {
  window.customElements.define(tagName, EvilPlanElement);
}
