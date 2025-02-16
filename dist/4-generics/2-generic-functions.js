"use strict";
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
const arr1 = ArrayUtils.wrapInArray(10);
const arr2 = ArrayUtils.wrapInArray("10");
const arr3 = ArrayUtils.wrapInArray(true);
