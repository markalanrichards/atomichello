import * as React from 'react';
import {ChangeEvent} from 'react';

export interface ToWhoWithUpdate {
    to: string,
    updateTo: ((updateTo: string) => void)
}


export const HelloGlobalState = (props: ToWhoWithUpdate) => {
    const eventUpdate = (event: ChangeEvent<HTMLInputElement>) => props.updateTo(event.target.value)
    return <label>
        Hello {props.to}
        <input type="text" value={props.to} onChange={eventUpdate}/>
    </label>
}