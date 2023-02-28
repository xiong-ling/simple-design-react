---
nav:
  title: 基础组件
  path: /components
  order: 1
group:
  path: /components/other
  title: 其他
---

## Portal 组件

### 基础用法

挂载到 body 上

```jsx
import React, { useState } from 'react';
import { Portal, Button } from 'simple-design-react';

export default () => {
  const [visibled, setVisibled] = useState(false);

  return (
    <div>
      Portal body demo
      <Button
        type="primary"
        onClick={() => {
          setVisibled((val) => !val);
        }}
      >
        点击显示/隐藏
      </Button>
      {visibled && (
        <Portal>
          <div>Portal 挂载到 body</div>
        </Portal>
      )}
    </div>
  );
};
```

### 指定节点挂载

```jsx
import React, { useState, useRef } from 'react';
import { Portal, Button } from 'simple-design-react';

export default () => {
  const [visibled, setVisibled] = useState(false);
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      Portal parentNode demo
      <Button
        type="primary"
        onClick={() => {
          setVisibled(val => !val);
        }}
      >
        点击显示/隐藏
      </Button>
      {visibled && <Portal getContainer={() => containerRef.current}><div>Portal 挂载到指定节点</div></Portal>}
    </div>
  );
};
```

<API></API>
