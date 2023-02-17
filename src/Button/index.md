---
nav:
  title: 基础组件
  path: /components
  order: 1
group:
  path: /components/base
  title: 通用组件
---

## 按钮 Button

### 基础用法

按钮分为 主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种。

```jsx
import React from 'react';
import { Button } from 'simple-design-react';

export default () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Button type="primary" style={{ marginRight: '24px' }}>
      Primary
    </Button>
    <Button type="secondary" style={{ marginRight: '24px' }}>
      Secondary
    </Button>
    <Button type="dashed" style={{ marginRight: '24px' }}>
      Dashed
    </Button>
    <Button type="outline" style={{ marginRight: '24px' }}>
      Outline
    </Button>
    <Button type="text" style={{ marginRight: '24px' }}>
      Text
    </Button>
  </div>
);
```

### 按钮尺寸

按钮分为：小、中、大，三种尺寸。高度分别为：24px/32px/40px。推荐及默认为尺寸「中」

```jsx
import React from 'react';
import { Button } from 'simple-design-react';

export default () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Button size="small" type="primary" style={{ marginRight: '24px' }}>
      Primary
    </Button>
    <Button type="primary" style={{ marginRight: '24px' }}>
      Secondary
    </Button>
    <Button size="large" type="primary" style={{ marginRight: '24px' }}>
      Dashed
    </Button>
  </div>
);
```

### 按钮形状

Button 有多种形状，square - 长方形 (默认), circle - 圆形, round - 全圆角。

```jsx
import React from 'react';
import { Button } from 'simple-design-react';
import { PlusOutlined } from '@ant-design/icons';

export default () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Button shape="circle" type="primary" style={{ marginRight: '24px' }} icon={<PlusOutlined />} />
    <Button shape="round" type="primary" style={{ marginRight: '24px' }}>
      Primary
    </Button>
    <Button type="primary" style={{ marginRight: '24px' }}>
      Primary
    </Button>
  </div>
);
```

### 按钮状态

按钮状态分为 警告，危险 两种

```jsx
import React from 'react';
import { Button } from 'simple-design-react';

export default () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Button status="warning" type="primary" style={{ marginRight: '24px' }}>
      Primary
    </Button>
    <Button status="danger" type="primary" style={{ marginRight: '24px' }}>
      Primary
    </Button>
  </div>
);
```

### 长按钮

按钮宽度随着容器宽度进行适配。

```jsx
import React from 'react';
import { Button } from 'simple-design-react';

export default () => (
  <div
    style={{
      width: 360,
      border: '1px solid rgb(229,230,235)',
      borderRadius: 4,
      padding: 20,
    }}
  >
    <Button long type="primary" style={{ marginBottom: '24px' }}>
      Primary
    </Button>
    <Button long type="secondary" style={{ marginBottom: '24px' }}>
      Secondary
    </Button>
  </div>
);
```

### 加载中按钮

通过设置 loading 可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件。

```jsx
import React from 'react';
import { Button } from 'simple-design-react';

export default () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Button loading type="primary" style={{ marginRight: '24px' }}>
      Primary
    </Button>
    <Button loading type="secondary" style={{ marginRight: '24px' }}>
      Secondary
    </Button>
  </div>
);
```

### 自动填充空格

```jsx
import React from 'react';
import { Button } from 'simple-design-react';

export default () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Button autoInsertSpaceInButton type="primary" style={{ marginRight: '24px' }}>
      保存
    </Button>
  </div>
);
```

### 组合按钮

可用在同级多项操作，以按钮组合方式出现

```jsx
import React from 'react';
import { Button } from 'simple-design-react';
import { DownOutlined } from '@ant-design/icons';

export default () => {
    const ButtonGroup = Button.Group;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
    <ButtonGroup>
        <Button>Publish</Button>
        <Button icon={<DownOutlined />} />
    </ButtonGroup>
    </div>
  );
};
```

<API></API>
