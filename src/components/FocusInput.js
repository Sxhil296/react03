import React, { Component } from 'react'
import Input from './Input'

export class FocusInput extends Component {

  clickHandler = () => {
    this.componentRef.current.focusInput()
  }
  render() {
    return (
      <div>
        <Input />
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}

export default FocusInput