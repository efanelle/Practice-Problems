function List(){
  this.length = arguments.length;
  for(var i = 0; i < arguments.length; i++) {
    this[i] = arguments[i]
  }
}

List.prototype.push = function(){
  for (var i = 0; i < arguments.length; i++) {
    this[this.length++] = arguments[i]
  }
  return this.length;
}

List.prototype.pop = function(){
  let last = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return last;

}

List.prototype.shift = function(){
  let first = this[0]
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i+1]
  }
  this.length--
  return first;
}

List.prototype.unshift = function(){


}

List.prototype.filter = function(){

}