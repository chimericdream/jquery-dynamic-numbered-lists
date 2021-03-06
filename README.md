[![Version 1.0](https://img.shields.io/badge/version-1.0-brightgreen.svg)](https://github.com/chimericdream/jquery-dynamic-numbered-lists)
[![GitHub issues](https://img.shields.io/github/issues/chimericdream/jquery-dynamic-numbered-lists.svg)](https://github.com/chimericdream/jquery-dynamic-numbered-lists/issues)
[![jQuery 1.6.4](https://img.shields.io/badge/jQuery-1.6.4-red.svg)](https://jquery.com/)

### jQuery Dynamic Numbered Lists

This plugin turns a series of ordered lists into a single contiguous stream. For example, if you have several sets of ordered lists on your page containing a coherent set of data, but they are separated by content (e.g. sections of data with descriptions between), you have two options: 1) you can specify the starting number for each individual ordered list after the first and keep it up to date as you add/remove items; or 2) you can use this plugin to target all the lists at once and never worry about it again!

#### Usage Instructions

Create your lists using standard `<ol>` tags. If you plan to have more than one group of dynamically numbered lists, give them discreet classes.

##### Example:

```html
<ol class="dynum">
    <li>Item #1</li>
    <li>Item #2</li>
    <li>Item #3</li>
    <li>Item #4</li>
    <li>Item #5</li>
</ol>
Some content here...
<ol class="dynum">
    <li>Item #6</li>
    <li>Item #7</li>
    <li>Item #8</li>
    <li>Item #9</li>
    <li>Item #10</li>
</ol>
Some content here...
<ol class="dynum">
    <li>Item #11</li>
    <li>Item #12</li>
    <li>Item #13</li>
    <li>Item #14</li>
    <li>Item #15</li>
</ol>
Some content here...
<ol class="dynum">
    <li>Item #16</li>
    <li>Item #17</li>
    <li>Item #18</li>
    <li>Item #19</li>
    <li>Item #20</li>
</ol>
...
```

Next, simply initialize the dynamic numbered lists by calling the plugin. This will add dynamically renumber all the lists after the first based on how many items have occurred thus far.

```javascript
$('ol.dynum').dynumlist();
```

#### Demo

[The demo](https://jsfiddle.net/5pumrd43/) shows the lists above both with and without the dynamic numbering.

#### Change Log

Version 1.0 (2011/10/22); Initial release
    All plugin functionality included