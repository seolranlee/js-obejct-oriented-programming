var superObj = {superVal: 'super'};
// var subObj = {subVal: 'sub'};
// subObj.__proto__ = superObj;

// 표준의 방법
// superObj를 부모로 하는 새로운 객체 subObj
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal: ',subObj.subVal);
console.log('subObj.superVal: ',subObj.superVal);

// 객체를 바꾸는 거지 그 객체의 프로토를 바꾸는 게 아니다.
subObj.superVal = 'sub';

console.log('subObj.superVal: ',subObj.superVal);
console.log('superObj.superVal: ',superObj.superVal);

var kim ={
    name: 'kim',
    first: 10, second: 20,
    sum: function () {
        return this.first+this.second
    }
};

// lee.__proto__ = kim;

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first + this.second) / 2
};
// var lee = {
//     name: 'lee',
//     first: 10, second: 10,
//     avg: function () {
//         return (this.first + this.second)/2
//     }
// };



console.log('lee.sum(): ',lee.sum());
console.log('lee.avg(): ',lee.avg());
// lee.sum():  20