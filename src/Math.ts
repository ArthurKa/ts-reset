declare global {
  interface Math {
    min<T extends [number, ...number[]]>(...values: T): T[number];
    max<T extends [number, ...number[]]>(...values: T): T[number];
  }
}
