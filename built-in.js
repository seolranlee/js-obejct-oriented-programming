console.log('Math.PI',Math.PI);
console.log('Math.random()',Math.random()); //method(객체에 소속된 함수는 메소드라고 한다)
console.log('Math.floor(3.9)',Math.floor(3.9));

var MyMath = {
    PI: Math.PI,
    random(){
        return Math.random();
    },
    floor(val){
        return Math.floor(val);  
    }
}

console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.random()', MyMath.random());
console.log('MyMath.floor(3.9)', MyMath.floor(3.9));