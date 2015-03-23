Zen mode for IPython Cells
==========================

Maximize a cell to fullscreen.

Installation
============

1. cp cellmax $HOME/.ipython/nbextensions
2. in your `custom.js` add the following
```javascript
$([IPython.events]).on('app_initialized.NotebookApp', function(){
    IPython.CodeCell.options_default.cm_config.lineWrapping = true;
    IPython.CodeCell.options_default.cm_config.lineNumbers = true;
    require(['nbextensions/cellmax/main'], function(cellmax) {
       cellmax();
    });
});
```

Usage
=====

Use the expand button or press Esc-m to toggle zen mode.


License
=======
The MIT License (MIT)

Copyright (c) 2015 miraculixx at github.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

