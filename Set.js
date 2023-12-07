let removeDuplicatesFromArray = function( arr ) {
  return [...new Set(arr)]
}

let Square = ( function() {
  let _width = new WeakMap();
  class Square {
    constructor( width ) {
    _width.set( this, width );
  }
  get area() {
    let width = _width.get( this );
    return width * width;
  }
}
return Square;
} )();