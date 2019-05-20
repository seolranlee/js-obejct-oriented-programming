function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function () {
    return this.first + this.second;
};

function PersonPlus(name, first, second, third) {
    Person.call(this, name, first, second); // this(context, 문맥)을 지정해준다.
    this.third = third;
}

// PersonPlus.prototype.__proto__ = Person.prototype;
PersonPlus.prototype = Object.create(Person.prototype); // 이게 표준

PersonPlus.prototype.constructor = PersonPlus;
// PersonPlus.prototype = Object.create(Person.prototype)를 쓰고 이걸 해주지 않으면 kim의 생성자 함수가 Person을 가리키게 된다. 왜냐면 PersonPlus.prototype이걸 아예 replace 하기 때문이다.

// PersonPlus.prototype.sum = function () {
//     return PersonPlus.prototype.__proto__.sum()+this.third;
// };

PersonPlus.prototype.avg = function () {
    return (this.first + this.second + this.third) / 3;
};


var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());
console.log('kim.constructor', kim.constructor);


var lee = new Person('lee', 10, 20);
console.log('lee.sum()', lee.sum());
