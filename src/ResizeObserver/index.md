---
nav:
  title: 基础组件
  path: /components
  order: 1
group:
  path: /components/other
  title: 其他
---

## ResizeObserver 组件

### 基础用法

```jsx
import React, { useState } from 'react';
import { ResizeObserver, Button } from 'simple-design-react';

export default () => {
  const [width, setWidth] = useState(200);

  return (
    <div>
      ResizeObserver
      <ResizeObserver
        onResize={() => {
          console.log('ResizeObserver');
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            setWidth((val) => (Math.random() > 0.5 ? val + 10 : val - 10));
          }}
          style={{ width }}
        >
          点击显示/隐藏
        </Button>
      </ResizeObserver>
    </div>
  );
};
```

<API></API>