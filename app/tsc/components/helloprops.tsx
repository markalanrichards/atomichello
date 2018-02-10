import * as React from  'react';
export interface ToWho {
    to: string
}
export default (props:ToWho) => <div>Hello {props.to}</div>