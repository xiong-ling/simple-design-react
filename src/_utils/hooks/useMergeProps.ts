import { useMemo } from 'react';

export default function useMergeProps<T>(componentsProps: T, defaultProps: Partial<T>): T {
  const props = useMemo(
    () => ({ ...defaultProps, ...componentsProps }),
    [componentsProps, defaultProps],
  );
  return props;
}
