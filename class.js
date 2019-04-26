// 객체를 만드는 공장 class
class Person{
    constructor(name, first, second){  // 약속된 이름. 이 함수가 객체가 생성되는 과정에서 자동적으로 실행된다.
        this.name=name;
        this.first=first;
        this.second=second;
    }
    
}



var kim = new Person('kim', 10, 20);
console.log('kim', kim);
// kim.sum = function(){
//     return 'this: ' + (this.first+this.second);
// }
// var lee = new Person('lee', 10, 10);
// console.log('kim.sum()', kim.sum());
// console.log('lee.sum()', lee.sum());