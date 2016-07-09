# nth_fibonacci
Given n, return the nth Fibonacci number.

This repository will eventually contain files in multiple programming languages, including their caveats. 

# Javascript
Can run this via the command line, using `node nth_fibonacci.js n`, where n is the ordinal for the Fibonacci number you want to return. Only works up to n=79, because the maximum safe integer in Javascript is +/-9007199254740991 (2<sup>53</sup> - 1). See [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) in the MDN Javascript docs for more info.

# Python
Can run via the command line, using `python nth_fibonacci.py`. Program will prompt you for n. Doesn't handle non-numeric inputs well - will throw a NameError & terminate.
