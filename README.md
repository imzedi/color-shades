# About
Get actual HEX and RGB of shade produced by given Background and Foreground colors.

## How to Integrate?
- Clone/Download script.js file and index.html(sample)
- link this script to index.html (already linked in sample)

## How to use?
MyShade object is available globaly which have get method
- get()

## get(background,foreground,opacity)
- Takes background, foreground and opacity of foreground
  - background (hex string)
  - foreground (hex string)
  - opacity (in percentage) (0-100)
- Return output array consists a shade color in a form of HEX and RGB both.

## Example
```
var output = MyShade.get('#ffffff','#000000',50)
console.log(output)
```
