var superObj = {superVal:'super'}
var subObj = {subVal:'sub'}
subObj.__proto__ = superObj;    // prototype, __proto__
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
console.log('subObj =>', subObj);

subObj.superVal = 'sub';
console.log('subObj.superVal =>', subObj.superVal); // sub
console.log('superObj.superVal =>', superObj.superVal); // super(바뀌지 않는다)
