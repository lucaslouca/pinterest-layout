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

Include a simple div to hold your datepicker:
```html
<div id="mosaic-container">
```

### Demo
<a href="http://lucaslouca.github.io/pinterest-layout/example-1/" target="_blank">Demo Example 1</a>

## Example 2 & 3: JavaScript

| Example 2 |
|--------------|
| <img src="https://cloud.githubusercontent.com/assets/10542894/9069706/17d02658-3aeb-11e5-95f8-2fa58ac88527.gif" width="450"/> |

| Example 3 |
|--------------|
| <img src="https://cloud.githubusercontent.com/assets/10542894/9070196/63ce26ec-3aee-11e5-86e6-50d13e2d9027.gif" width="450"/> |

### How it works
The images are positioned dynamically by iterating through them and placing them at the bottom of whichever column has the shortest height at the moment. The column's height is then increased by the image's height (and some margins).


### How to use
Include the neccesary Stylesheet and JavaScript file:
```html
<link rel="stylesheet" type="text/css" href="styles.css" media="screen">
<script type="text/javascript" src="mosaic.js"></script>
```

Include a simple div to hold your the mosaic:
```html
<div id="mosaic-container"></div>
```

Initialise Mosaic:
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
