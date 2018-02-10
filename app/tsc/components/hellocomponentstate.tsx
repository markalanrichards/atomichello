import * as React from 'react';
import {ChangeEvent} from 'react';

export interface HelloCompomentProps {
    initialState: string
}

export interface HelloCompomentState {
    currentState: string
}

export class HelloStatefulComponent extends React.Component<HelloCompomentProps, HelloCompomentState> {
    constructor(props: HelloCompomentProps) {
        super(props);
        this.state = {
            currentState: props.initialState
        }
        this.stateChanged = this.stateChanged.bind(this)
    }

    public stateChanged(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            currentState: e.target.value
        })
    }

    public render() {
        return <label>
            Hello {this.state.currentState}
            <input type="text" value={this.state.currentState} onChange={this.stateChanged}/>
        </label>
    }
}
