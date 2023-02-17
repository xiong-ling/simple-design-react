import React, { forwardRef, ReactNode, useEffect, useRef, useState } from 'react';
import useMergeProps from '../_utils/hooks/useMergeProps';
import { ButtonProps } from './interface';
import cx from '../_utils/classNames';
import './index.less';
import { LoadingOutlined } from '@ant-design/icons';
import Group from './group';

// 中文匹配
const regexTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;

function processChildren(children?: ReactNode) {
  const childrenList: ReactNode[] = [];
  let isPrevChildPure = false;
  React.Children.forEach(children, (child) => {
    const isCurrentChildPure = typeof child === 'string' || typeof child === 'number';
    if (isCurrentChildPure && isPrevChildPure) {
      const lastIndex = childrenList.length - 1;
      const lastChild = childrenList[lastIndex];
      childrenList[lastIndex] = `${lastChild}${child}`;
    } else {
      childrenList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return React.Children.map(childrenList, (child) =>
    typeof child === 'string' ? <span>{child}</span> : child,
  );
}

const defaultProps: ButtonProps = {
  htmlType: 'button',
  type: 'default',
  size: 'default',
  shape: 'square',
};

function Button(baseProps: ButtonProps, ref: any) {
  const props = useMergeProps<ButtonProps>(baseProps, defaultProps);
  const {
    style,
    className,
    children,
    htmlType,
    type,
    status,
    size,
    disabled,
    loading,
    icon,
    shape,
    long,
    href,
    anchorProps,
    autoInsertSpaceInButton,
    iconOnly,
    onClick,
    ...restProps
  } = props;
  const innerButtonRef = useRef();
  const buttonRef = ref || innerButtonRef;
  const [isTwoCNChar, setIsTwoCNChar] = useState(false);

  useEffect(() => {
    if (autoInsertSpaceInButton && buttonRef && buttonRef.current) {
      const textContent = buttonRef.current.textContent;
      // 匹配到两个中文
      if (regexTwoCNChar.test(textContent)) {
        if (!isTwoCNChar) {
          setIsTwoCNChar(true);
        }
      } else if (isTwoCNChar) {
        setIsTwoCNChar(false);
      }
    }
  }, [buttonRef.current, autoInsertSpaceInButton]);

  const prefixCls = 'simple-btn';
  const _type = type === 'default' ? 'secondary' : type;
  const iconNode = loading ? <LoadingOutlined /> : icon;
  const classNames = cx(
    prefixCls,
    `${prefixCls}-${_type}`,
    `${prefixCls}-size-${size}`,
    `${prefixCls}-shape-${shape}`,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-long`]: long,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-link`]: href,
      [`${prefixCls}-two-chinese-chars`]: isTwoCNChar,
      [`${prefixCls}-icon-only`]: iconOnly || (!children && children !== 0 && iconNode),
    },
    className,
  );

  const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
    if (loading) {
      typeof event?.preventDefault === 'function' && event.preventDefault();
      return;
    }
    onClick && onClick(event);
  };

  const innerContent = (
    <>
      {iconNode}
      {processChildren(children)}
    </>
  );

  if (href) {
    // a 标签
    const _anchorProps = { ...anchorProps };
    if (disabled) {
      delete _anchorProps.href;
    } else {
      _anchorProps.href = href;
    }
    return (
      <a
        ref={buttonRef}
        {...restProps}
        {..._anchorProps}
        style={style}
        className={classNames}
        onClick={handleClick}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      {...restProps}
      ref={buttonRef}
      className={classNames}
      style={style}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
    >
      {innerContent}
    </button>
  );
}

const ForwardRefButton = forwardRef<unknown, ButtonProps>(Button);

const ButtonComponent = ForwardRefButton as typeof ForwardRefButton & {
  __BYTE_BUTTON: boolean;
  Group: typeof Group;
};

ButtonComponent.__BYTE_BUTTON = true;

ButtonComponent.Group = Group;

ButtonComponent.displayName = 'Button';

export default ButtonComponent;

export { ButtonProps };
