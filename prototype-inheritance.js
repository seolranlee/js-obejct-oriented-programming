var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj;    // __proto__링크
var subObj = Object.create(superObj);
// console.log('subObj.subVal =>', subObj.subVal);
// console.log('subObj.superVal =>', subObj.superVal);
// console.log('subObj =>', subObj);

subObj.superVal = 'sub';
debugger;
console.log('subObj.superVal =>', subObj.superVal); // sub
console.log('superObj.superVal =>', superObj.superVal); // super(바뀌지 않는다)
