import { CSSProperties, HTMLProps, ReactNode } from 'react';

export interface ButtonProps {
  /**
   * @description 当按钮中是两个汉字时，自动在两个汉字中添加一个空格。
   * @default false
   */
  autoInsertSpaceInButton?: boolean;
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  /**
   * @description 按钮主要分为六种按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮，`default` 为次级按钮。
   * @default "default"
   */
  type: 'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline';
  /**
   * @description 按钮状态
   * @default "default"
   */
  status?: 'warning' | 'danger' | 'success' | 'default';
  /**
   * @description 按钮的尺寸
   * @default "default"
   */
  size?: 'small' | 'default' | 'large';
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 按钮是否是加载状态
   */
  loading?: boolean;
  //   /**
  //    * @description 当 loading 的时候，不改变按钮的宽度。
  //    */
  //   loadingFixedWidth?: boolean;
  /**
   * @description 设置按钮的图标
   */
  icon?: ReactNode;
  /**
   * @description 只有图标，按钮宽高相等。如果指定 `icon` 且没有 children，`iconOnly` 默认为 true
   */
  iconOnly?: boolean;
  /**
   * @description 按钮宽度随容器自适应。
   */
  long?: boolean;
  /**
   * @description 点击按钮的回调
   */
  onClick?: (e: Event) => void;
  /**
   * @description 按钮形状，`circle` - 圆形， `round` - 全圆角， `square` - 长方形
   * @default "square"
   */
  shape?: 'circle' | 'round' | 'square';
  href?: string;
  target?: string;
  anchorProps?: HTMLProps<HTMLAnchorElement>;
  /**
   * @description 按钮原生的 html type 类型
   * @default "button"
   */
  htmlType?: 'button' | 'submit' | 'reset';
}

export interface ButtonGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
}
