import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {

  constructor(){
    this.hostElement.componentOnReady().then(() => {
      this.hostElement.focus = () => this.buttonRef.focus();
    });
  }

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
