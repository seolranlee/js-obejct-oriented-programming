class Person{

    // 객체가 만들어지기 직전에 실행되도록 약속되어 있는 함수.
    // 약속된 이름이다.
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    // 메소드를 만들 때에는 function 이라는 키워드를 쓰지 않는다.
    // 2. 해당 객체에 sum이 없을때 여기를 바라본다.
    sum(){
        return this.first+this.second;
    }
}

// class는 객체가 만들어지는 공장이다.


class PersonPlus extends Person{    // Person과 중복되는 코드를 지울 수 있다.
    
    // 부모가 갖고 있는 기능을 실행한다.
    // 나만 갖고 있는 기능을 추가한다.

    constructor(name, first, second, third){
        super(name, first, second); // 부모 클래스 생성자 안에서 호출된다.
        this.third = third;   // only 자식이 해줄 일
    }

    sum(){
        return super.sum()+this.third;
        // 부모가 갖고 있는 sum이 호출되고 그 리턴값에 자식의 추가적인 작업을 한다.
    }
    
    
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());
