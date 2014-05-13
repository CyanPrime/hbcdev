HitBoxCreator Dev API
======================

this is a small API to easily use [HitBoxCreator](https://github.com/CyanPrime/hitboxcreator) in your Javascript Programs.

Data Structures
===============

The HitboxCreator Dev API has a few useful Data Structure Objects for you to use. Designed to make managing the data of the [HitBoxCreator](https://github.com/CyanPrime/hitboxcreator) simple and easy.

Hitbox
------
`Hitbox` has four variables in it. Two of which are Arrays used basically as a `Vector2`.<br/>
The first of which is `number` which is simply the number of the hitbox in the list.<br/>
The `boxPos` is a Array. `boxPos[0]` is the `x` value of the hitbox, and `boxPos[1]` is the `y` value.<br/>
`boxSize` is also a Array. `boxSize[0]` is the width of the hitbox, and `boxSize[1]` is the hight.<br/>
`boxType` is simply the type of hitbox the `Hitbox` object is. You use your own code to figure out what to do with this value.<br/>

Frame
-----
`number` is the number of the frame.<br/>
`imgName` is the name of the image to be used in the frame.<br/>
The `charPos` is a Array. `charPos[0]` is the `x` value of the frame, and `charPos[1]` is the `y` value.<br/>
`hitBoxes` is a array of hitboxes.<br/>

Functions
=========
The `drawFrame(ctx, charImgLoaded, characterImg, frame, x, y, zoom, drawHitboxes)` is used to draw a `Frame` onto the canvas. The Function has 8 variables that need to be passed, but they're pretty simple.<br/>
`ctx` is the context of the canvas.<br/>
`charImageLoaded` is a boolean value used to see if the image you're sending drawFrame is loaded. If this is false the function won't do anything.<br/>
`characterImg` is the image you want to be drawn onto the canvas.<br/>
`x` is the `x` value of the object to be drawn. the algorithem to draw is `(x + frame.charPos[0]);`.<br/>
`y` is the `y` value of the object to be drawn. the algorithem to draw is `(y + frame.charPos[1]);`.<br/>
`zoom` is the amount your canvas is being upscaled. Put the value at 1 if you`'re not upscaling, or to 2 if you`re scale is x2.<br/>
`drawHitboxes` is a boolean value that if true will allow the function to draw the hitbox data as well as the image.<br/>

the `getFrameFromXML(xml)` function takes a string argument of XML data, and creates a Frame object that is returned by the function.
