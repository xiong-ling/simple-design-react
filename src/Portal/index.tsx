import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useIsFirstRender from '../_utils/hooks/useIsFirstRender';

export interface PortalProps {
  /** 
   * @default document.body
   * @description Portal 挂载的容器
   */
  getContainer?: () => HTMLElement;
  /**
   * @default null
   * @description 挂载的节点
   */
  children?: React.ReactNode;
}

export const Portal: React.FC<PortalProps> = (props) => {
  const { getContainer = () => document.body, children } = props;
  const containerRef = useRef<HTMLElement | null>();
  const isFirstRender = useIsFirstRender();

  // 首次渲染，或者 containerRef.current 不存在时进行赋值
  if (isFirstRender || containerRef.current == null) {
    containerRef.current = getContainer?.();
  }

  return containerRef.current ? ReactDOM.createPortal(children, containerRef.current) : null;
};
