# pinterest-layout
Examples illustrating a Pinterest like layout.

## Example 1: CSS Only
<img src="https://cloud.githubusercontent.com/assets/10542894/9069691/0ed5271a-3aeb-11e5-8b78-3c4702394f12.gif" width="450"/>

### How to use
Include the neccesary stylesheet file:
```
<link rel="stylesheet" type="text/css" href="styles.css" media="screen">
```

Include a simple div to hold your datepicker:
```
<div id="mosaic-container">
```

### Demo
<a href="http://lucaslouca.github.io/pinterest-layout/" target="_blank">Demo Example 1</a>

## Example 2 & 3: JavaScript
<img src="https://cloud.githubusercontent.com/assets/10542894/9069706/17d02658-3aeb-11e5-95f8-2fa58ac88527.gif" width="450"/>

### How to use
Include the neccesary stylesheet  and JavaScript file:
```
<link rel="stylesheet" type="text/css" href="styles.css" media="screen">
<script type="text/javascript" src="mosaic.js"></script>
```

Include a simple div to hold your the mosaic:
```
<div id="mosaic-container"></div>
```

Initialise Mosaic:
```
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
<a href="http://lucaslouca.github.io/pinterest-layout/" target="_blank">Demo Example 2</a>

<a href="http://lucaslouca.github.io/pinterest-layout/" target="_blank">Demo Example 3</a>
