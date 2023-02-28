import React from 'react';
import { findDOMNode } from 'react-dom';

export interface ResizeProps {
  /**
   * @param entry 一个 ResizeObserverEntry 对象数组，可以用于获取每个元素改变后的新尺寸。
   * @returns
   */
  onResize?: (entry: ResizeObserverEntry[]) => void;
  /**
   * @description 监听的节点
   * @default null
   */
  children?: React.ReactNode;
}

class ResizeObserverComponent extends React.Component<ResizeProps> {
  constructor(props: any) {
    super(props);
  }

  resizeObserver?: ResizeObserver | null;

  componentDidMount() {
    // 挂载后进行监听
    if (!React.isValidElement(this.props.children)) {
      console.warn('The children of ResizeObserver is invalid.');
    } else {
      this.createResizeObserver();
    }
  }

  componentDidUpdate() {
    if (!this.resizeObserver && findDOMNode(this)) {
      this.createResizeObserver();
    }
  }

  componentWillUnmount() {
    // 卸载后取消监听
    if (this.resizeObserver) {
      this.destroyResizeObserver();
    }
  }

  createResizeObserver = () => {
    this.resizeObserver = new ResizeObserver((entry: ResizeObserverEntry[]) => {
      const { onResize } = this.props;
      onResize && onResize(entry);
    });

    this.resizeObserver.observe(findDOMNode(this) as Element);
  };

  destroyResizeObserver = () => {
    this.resizeObserver && this.resizeObserver.disconnect();
    this.resizeObserver = null;
  };

  render() {
    return this.props.children;
  }
}

export default ResizeObserverComponent;
