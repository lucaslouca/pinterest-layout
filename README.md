# pinterest-layout
Examples illustrating a <a href="https://www.pinterest.com" target="_blank">Pinterest</a> like layout.

## Example 1: CSS Only

| Example 1 |
|--------------|
| <img src="https://cloud.githubusercontent.com/assets/10542894/9069691/0ed5271a-3aeb-11e5-8b78-3c4702394f12.gif" width="450"/> |

### How to use
Include the neccesary Stylesheet file:
```html
<link rel="stylesheet" type="text/css" href="styles.css" media="screen">
```

Include a simple div to hold the mosaic:
```html
<div id="mosaic-container">
```

### Demo
<a href="http://lucaslouca.github.io/pinterest-layout/example-1/" target="_blank">Demo Example 1</a>

## Example 2 & 3: JavaScript
Example 2 & 3 implement a similar Pinterest layout as Example 1, but instead of using a pure CSS solution, they make use of pure JavaScript (except for the header and navigation controls). jQuery is **not** required.

Example 3 also includes a different header and provides a responsive navigation. That is, when the view port decreases in size, the top navigation disappears and a *mobile friendly* slide out navigation becomes available (see Example 3 illustration or test it using the available <a href="http://lucaslouca.github.io/pinterest-layout/example-3/" target="_blank">Demo Example 3</a>).

| Example 2 |
|--------------|
| <img src="https://cloud.githubusercontent.com/assets/10542894/9069706/17d02658-3aeb-11e5-95f8-2fa58ac88527.gif" width="450"/> |

| Example 3 |
|--------------|
| <img src="https://cloud.githubusercontent.com/assets/10542894/9070196/63ce26ec-3aee-11e5-86e6-50d13e2d9027.gif" width="450"/> |

### How Mosaic works
The images are positioned dynamically by iterating through them and placing them at the bottom of whichever column has the shortest height at the moment. The column's height is then increased by the image's height (and some margins).


### How to use Mosaic
Since Mosaic is purely JavaScript based, you only need to include the `mosaic.js` file:

```html
<script type="text/javascript" src="mosaic.js"></script>
```

Include a simple div to hold the mosaic:
```html
<div id="mosaic-container"></div>
```

Initialise Mosaic with an array of image paths:
```javascript
<script>
  var mosaic = new JSMosaic('mosaic-container',['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg', 'images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg','images/11.jpg','images/12.jpg']);
</script>
```

### Public methods

> `addImage(path)`

>**path**

>Type: String

>path of image to add. 

### Demo
<a href="http://lucaslouca.github.io/pinterest-layout/example-2/" target="_blank">Demo Example 2</a>

<a href="http://lucaslouca.github.io/pinterest-layout/example-3/" target="_blank">Demo Example 3</a>
