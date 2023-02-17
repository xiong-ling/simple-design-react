import React, { forwardRef } from "react";
import { AlertProps } from "./interface";

function Alert () {
    return <div>Alert</div>
}

const AlertComponent = forwardRef<unknown, AlertProps>(Alert);

AlertComponent.displayName = 'Alert';

export default AlertComponent;

export { AlertProps };