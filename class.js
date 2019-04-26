// 객체를 만드는 공장 class
class Person{
    constructor(name, first, second){  // 약속된 이름. 이 함수가 객체가 생성되는 과정에서 자동적으로 실행된다.
        this.name=name;
        this.first=first;
        this.second=second;
    }
    sum(){
        return this.first+this.second;
    }
    // avg(){
    //     return (this.first+this.second)/2
    // }
    
}

class PersonPlus extends Person{
    avg(){
        return (this.first+this.second)/2
    }
}

var kim = new PersonPlus('kim', 10, 20);
console.log('kim.sum()', kim.sum())
console.log('kim.avg()', kim.avg())