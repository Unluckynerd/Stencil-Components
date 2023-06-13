import { Component, Event, EventEmitter, Method, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  buttonRef: HTMLButtonElement;

  @Prop() disabled = false;

  // Exposing focus method to focus the native button when my-button.focus() is called
  @Method() async focus() {
    this.buttonRef.focus();
  }

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
