class ArrayUtils {
  static wrapInArray<T>(value: T): T[] {
    return [value];
  }
}

// hover over the variables
const arr1 = ArrayUtils.wrapInArray(10);
const arr2 = ArrayUtils.wrapInArray("10");
const arr3 = ArrayUtils.wrapInArray(true);

// function wrapInArray<T>(value: T): T[] {
//   return [value];
// }

// hover over the variables
// const arr1 = wrapInArray("1");
// const arr2 = wrapInArray(100);
