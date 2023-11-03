import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'new-button',
  styleUrl: 'new-button.css',
  shadow: true,
})
export class NewButton {

  @Element() hostElement;

  buttonRef: HTMLButtonElement;

  @Prop() disabled = false;

  @Event() zClick: EventEmitter;

  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.zClick.emit(event);
    }
  }

  render() {
    return (
      <button
        ref={el => (this.buttonRef = el)}
        disabled={this.disabled}
        onClick={event => this.handleClick(event)}
      >
        <slot />
      </button>
    );
  }
}
