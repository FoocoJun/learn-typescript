// 인터페이스 : 타입 추론 가능, 타입 확장 가능(extends) <- 코드 확장성 챙겨가기
interface Person {
    name: string;
    age: number;
}

// 단순 타입 별칭 : 타입 추론 가능, 타입 미리보기 가능, 타입 확장 불가능.
// type Person = {
//     name: string;
//     age: number;
// }

var seho: Person = {
    name: '세호',
    age: 30,
}