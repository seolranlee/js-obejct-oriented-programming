function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
}

Person.prototype.sum=function(){
    return 'prototype: '+(this.first+this.second);
}


var kim = new Person('kim', 10, 20);
// kim의 sum만 다르게
kim.sum = function(){
    return 'this: ' + (this.first+this.second);
}
var lee = new Person('lee', 10, 10);
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());

// 1. 자기 자신의 객체(여기선 kim이나 lee)한테 sum이란 메소드가 있는지 찾는다.
// 있으면 그것을 바로 실행시켜주고
// 없으면
// 2. 자기 자신의 객체(여기선 kim이나 lee)의 생성자(여기선 Person)의 prototype에 sum이 있는지 찾는다.
// 그걸 실행시킨다.


//생성자에 있는 것은 생성할 때 만들어지는 것이고, 생성한 이후에 변경작업을 하지 않는다면 프로토타입이 갖는 유지보수의 편의성은 존재하지 않습니다. 제 말은 이미 만들어진 객체의 메서드를 변경하려면 수정작업을 다시 해줘야 한다는 의미였습니다.