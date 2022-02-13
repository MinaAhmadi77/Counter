import React, { Component } from 'react';
import Button from '../button/Button';
import style from './counter.module.css'

class Counter extends Component{
    constructor() {
        super()
        this.state = {
            isUp: true,
            count: 0,
            isCounting: 0
        }
    }
    reset_function = () => {
        console.log("Reset");
        this.setState({ count: 0,isUp: true });
        clearInterval(this.state.isCounting);
            this.setState(prevState => {
              return {
                ...prevState,
                isCounting: 0,
              };
            });
            return;

    };
    get reset() {
        return this.reset_function;
    }
    set reset(value) {
        this.reset_function = value;
    }
    Start_pause_function = () => {
        if(this.state.isCounting){
            clearInterval(this.state.isCounting);
            this.setState(prevState => {
              return {
                ...prevState,
                isCounting: 0,
              };
            });
            return;
        }
        const newisCounting = setInterval(() => {
            this.setState(prevState => {
                return {
                ...prevState,
                count: prevState.count + 1,
                };
            });
        }, 1000);
        this.setState(prevState => {
        return {
            ...prevState,
            isCounting: newisCounting,
        };
        });
    
    }
    Up_down_function = () => {
        if (this.state.isUp) {
            this.setState({ isUp: false });
            clearInterval(this.state.isCounting);
            const newisCounting = setInterval(() => {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        count: prevState.count - 1
                    };
                });
            }, 1000);
            this.setState(prevState => {
                return {
                    ...prevState,
                    isCounting: newisCounting,
                };
            });
            return;
        } else {

            this.setState({ isUp: true });
            clearInterval(this.state.isCounting);
            const newisCountingg = setInterval(() => {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        count: prevState.count + 1
                    };
                });
            }, 1000);
            this.setState(prevState => {
                return {
                    ...prevState,
                    isCounting: newisCountingg,
                };
            });
        }
    };
    get Up_downfunction() {
        return this.Up_down_function;
    }
    set Up_downfunction(value) {
        this.Up_down_function = value;
    }


    render() {
        return (
            <div className={style.root}>
                <div className={style.tittle}>Counter : {this.state.count}</div>
                <div className={style.buttons}>
                    <Button tittle="Reset" handleAction={this.reset}></Button>
                    <Button tittle={this.state.isCounting ? 'Pause' : 'Start'} handleAction={this.Start_pause_function}></Button>
                    <Button tittle={this.state.isUp ? 'Down Counting' : 'Up Counting'} handleAction={this.Up_downfunction}></Button>
                </div>
            </div>
        )
    }
}
export default Counter;
