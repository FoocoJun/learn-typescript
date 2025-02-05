interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 23,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) : User["age"] {
    console.log(user);
    return user.age;
}

const capt = {
    name: '캡틴',
    age: 100
}

getUser(capt);


// 함수의 스펙에 인터페이스를 활용
interface SumFunction {
    (a: number, b:number): number;
}

var sum: SumFunction;
sum = function(a, b) {
    return a + b;
}

sum(3, 4);

// 인덱싱
interface StringArray {
    [index: number]: string;
}
var arr:StringArray = ['a', 'b', 'c'];
// 스트링을 강제
// arr[0] = 10;

//딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj:StringRegexDictionary = {
    sth: /abc/,
}
obj.asd = /as d/;

// keys 추론 가능
Object.keys(obj).forEach(function(value) {

});
// value 추론 가능
Object.values(obj).forEach(function(value) {

});


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

var song: Developer = {
    language: 'hi',
    name: 'asd',
    age: 10,
}