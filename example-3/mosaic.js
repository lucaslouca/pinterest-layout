/**
 * Mosaic
 *
 * Pinterest like responsive mosaic.
 *
 * @author Lucas Louca
 * @copyright 2015 Lucas Louca
 * @license MIT
 */
 
var JSMosaic = function(containerId, imagePaths) {
    'use strict';
    var exports = {};
    var _imageNumberToLoad = imagePaths.length;
    var _loadedImageNumber = 0;
    var _images = [];
    var _columnHeights = [];
    var _containerWidth;
    var _imageWidth = 120;
    var _margin = 10;
    var _containerWidthRatio = 0.3;
    var _container = document.getElementById(containerId);
    
    ////////////////////////////////////////////////
    // INITIALIZATION
    ////////////////////////////////////////////////
    
    init();
    
    /**
     * Init method
     */
    function init() {
        loadImages(imagePaths, mosaicify);

        // Mosaicify on window resize
        window.onresize = function(event) {
           mosaicify();
        };
    }

    
    ////////////////////////////////////////////////
    // CREATE MOSAIC
    ////////////////////////////////////////////////
    
    /**
     * Magic
     */
    function mosaicify() {
        positionContainer();

        var numberOfColumns = Math.max(1, Math.floor(_containerWidth/_imageWidth));
        _columnHeights = [];
        for (var i = 0; i < numberOfColumns; i++) {
            _columnHeights[i] = 0;
        }

        for (var i = 0; i < _images.length; i++) {
            var currentColumn = getIndexOfShortestColumn();
            var currentRow = Math.floor(i / numberOfColumns); 
            
            var image = _images[i];
            var scaleRatio = image.width / _imageWidth;
            image.width = _imageWidth
            image.height = image.height / scaleRatio;
            image.style.position = "absolute";
            image.style.left = currentColumn*_imageWidth+(_margin*currentColumn)+"px";
            image.style.top = _columnHeights[currentColumn]+_margin+"px";
			image.style['boxShadow'] = "0 1px 1px rgba(34, 25, 25, 0.4)";
			 
            _container.appendChild(image);
            _columnHeights[currentColumn] += image.height + _margin; 
        }
    }


    ////////////////////////////////////////////////
    // HELPERS
    ////////////////////////////////////////////////
    
    /**
     * Load images from array with completion handler.
     *
     * @param imagePaths Array containing the path of the images to load
     * @param completion Completion handler (function()) to be called when loading is done.r
     */
    function loadImages(imagePaths, completion) {
        imagePaths.map( function(path) {
            var image = new Image();
            image.onload = function() {
                _loadedImageNumber++;
				console.log(image.height);
                // Loaded all images
                if (_imageNumberToLoad == _loadedImageNumber) {
                    completion();
                }
                
            }
            image.src = path;
            _images.push(image);
        });
    }
    
    /**
     * Position container element in the center of the window.
     */
    function positionContainer() {
        _containerWidth = window.innerWidth * _containerWidthRatio;
        _container.style.width = _containerWidth+"px";
        _container.style.height = getHeightOfLargestColumn()+30+"px";
        _container.style.position =  "relative";
        _container.style.top = "80px";
        _container.style.left = Math.max(0, (window.innerWidth / 2) - _containerWidth/2) + "px";
    }
    
    /**
     * Returns the column index with the smallest height.
     *
     * @return index of column with the smallest height
     */
    function getIndexOfShortestColumn() {
        var result = 0;
        var min = _columnHeights[result];
        for (var col = 0; col < _columnHeights.length; col++) {
            var height = _columnHeights[col];
            if (height < min) {
                min = height;
                result = col;
            }
        }

        return result;
    }
    
        /**
     * Returns the column index with the smallest height.
     *
     * @return index of column with the smallest height
     */
    function getHeightOfLargestColumn() {
        var result = _columnHeights[0];
        for (var col = 0; col < _columnHeights.length; col++) {
            var height = _columnHeights[col];
            if (height > result) {
                result = height;
            }
        }

        return result;
    }
    
    
    ////////////////////////////////////////////////
    // PUBLIC METHODS
    ////////////////////////////////////////////////
    
    /**
     * Add a new image.
     *
     * @param path of image to add
     */
    function addImage(path) {
        _imageNumberToLoad++;
        var image = new Image();
        image.onload = function() {
            _loadedImageNumber++;
            if (_imageNumberToLoad == _loadedImageNumber) {
                mosaicify();
            }
        }
        image.src = path;
        _images.push(image);
    }   
    
    
    ////////////////////////////////////////////////
    // EXPORT PUBLIC METHODS
    ////////////////////////////////////////////////
    
    exports.addImage = addImage;
    return exports;
}