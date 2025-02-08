# Implicit Type Coercion and NaN Handling in JavaScript

This repository demonstrates a common JavaScript error related to implicit type coercion and the handling of `NaN` (Not a Number). The `bug.js` file contains code that incorrectly handles these situations, while `bugSolution.js` provides a corrected version.

## Bug Description

The original code attempts to add 1 to a variable `x`, but doesn't explicitly handle cases where `x` might be `null`, `undefined`, `NaN`, or a string.  This leads to unexpected results due to JavaScript's implicit type coercion during the addition operation.  Specifically, if x is a string, it will perform string concatenation instead of numerical addition. The `NaN` value also needs explicit handling as it's not equal to itself.

## Solution

The solution involves explicitly checking for `null`, `undefined`, and `NaN` before performing the addition.  If any of these conditions are met, a suitable default value is returned.  Otherwise, the addition is performed safely, ensuring that `x` is a number before the addition.