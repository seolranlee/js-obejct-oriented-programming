var kim = {name: 'kim', first: 10, second: 20};
var lee = {name: 'lee', first: 10, second: 10};
function sum(prefix){
    return prefix+(this.first + this.second);
}

// sum.call()
// sum(); 과 같은 거다.
// 모든 함수는 call이라는 메서드를 가지고 잇다. (모든 자바스크립트는 함수도 객체이다.)

// sum.call(그 함수에 내부적으로 this(context)로 할 대상, 함수에 필요한 파라미터);

// sum이라고 하는 객체를 실행시킨다.
console.log('sum.call(kim)', sum.call(kim, '=> ')); // sum.call(kim) 30
console.log('sum.call(lee)', sum.call(lee, ': ')); // sum.call(lee) 20
// 이게 되면 this는 kim이 된다.


// call과 유사품 apply


// 실행할 때가 아니라 아예 함수에 내부적인 this를 고정시키는 방법이 bind.
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());

