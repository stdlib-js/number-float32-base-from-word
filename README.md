<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# fromWordf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a [single-precision floating-point number][ieee754] from an unsigned integer corresponding to an [IEEE 754][ieee754] binary representation.



<section class="usage">

## Usage

```javascript
import fromWordf from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-word@esm/index.mjs';
```

#### fromWordf( word )

Creates a [single-precision floating-point number][ieee754] from an unsigned `integer` corresponding to an [IEEE 754][ieee754] binary representation.

```javascript
var word = 1068180177; // => 0 01111111 01010110010001011010001

var f32 = fromWordf( word ); // when printed, implicitly promoted to float64
// returns 1.3370000123977661
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The equivalent of this function in C/C++,

    ```c
    float fromWordf(unsigned int x) {
      return *(float*)&x;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import MAX_UINT32 from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@esm/index.mjs';
import fromWordf from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-word@esm/index.mjs';

var word;
var f32;
var i;

// Create single-precision floating-point numbers from unsigned integers...
for ( i = 0; i < 1000; i++ ) {
    word = round( randu()*MAX_UINT32 );
    f32 = fromWordf( word );
    console.log( 'word: %d => float32: %d', word, f32 );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float32-base-from-word.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float32-base-from-word

[test-image]: https://github.com/stdlib-js/number-float32-base-from-word/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float32-base-from-word/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float32-base-from-word/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float32-base-from-word?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float32-base-from-word.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float32-base-from-word/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float32-base-from-word/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float32-base-from-word/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float32-base-from-word/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float32-base-from-word/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
