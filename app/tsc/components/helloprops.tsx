import * as React from  'react';
export interface ToWho {
    to: string
}
export const HelloTo =  (props:ToWho) => <div>Hello {props.to}</div>