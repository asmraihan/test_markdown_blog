---
title: "JS Array Reduce method"
subtitle: "Using reduce method to add numbers in an array of object"
socialImage: images/array-reduce-method1.png
date: "2023-03-23"
---



## Using reduce method to add numbers in an array
``` javascript
const numbers = [34, 56, 34, 12]
const sumReducer = (prev,curr) => prev + curr;
const total = numbers.reduce(sumReducer, 0)
console.log(total)
```
## Using reduce method to add numbers in an array of object
``` js
const items = [
     {id: 1, price :200},
     {id: 2, price :300}
 ]
 const sumReducer = (prev,curr) => prev + curr.price;
const total = items.reduce(sumReducer, 0)
console.log(total)
```
