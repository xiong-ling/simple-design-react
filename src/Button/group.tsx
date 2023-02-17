import React, { useContext } from 'react';
import cx from '../_utils/classNames';

import { ButtonGroupProps } from './interface';

function Group(props: ButtonGroupProps, ref: any) {
  const { className, style, children, ...rest } = props;
  const prefixCls = 'simple-btn-group';
  const classNames = cx(prefixCls, className);

  return (
    <div ref={ref} className={classNames} style={style} {...rest}>
      {children}
    </div>
  );
}

const GroupComponent = React.forwardRef<unknown, ButtonGroupProps>(Group);

GroupComponent.displayName = 'ButtonGroup';

export default GroupComponent;

export { ButtonGroupProps };
