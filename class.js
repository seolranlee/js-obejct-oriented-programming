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

    // super
    // 부모가 갖고 있는 기능을 실행하면서 나만 하는 기능을 실행할 수 있도록

    constructor(name, first, second, third){  // 약속된 이름. 이 함수가 객체가 생성되는 과정에서 자동적으로 실행된다.
        super(name, first, second); // 부모 class의 constructor(생성자)를 실행+자식 기능 추가
        this.third=third;
    }
    sum(){
        return super.sum()+this.third   // 부모 class의 sum을 실행+자식 기능 추가
    }
    avg(){
        return (this.first+this.second+this.third)/3
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum())
console.log('kim.avg()', kim.avg())