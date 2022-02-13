import React, { Component } from 'react';
import style from './button.module.css'

class Button extends Component{

    render() {
        return (
            <button className={style.button} onClick={this.props.handleAction}>
                {this.props.tittle}
            </button>
        )
    }
}
export default Button;
