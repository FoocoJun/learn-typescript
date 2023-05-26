기존 ts 함수는 정해진 인자값 이상의 값은 모두 칼같이 반려합니다.

이에 강의 외 내용으로 참고할만한 것 중 하나로
스프레드 연산자를 활용한 가변적으로 몇개든 들어올 수 있는 파라미터 입니다.

```ts
function multiply(...num: number[]): number {
    return num[0] * num[num.length -1];
}

const arr = [10,20,30,40,50,60];
multiply(...arr);
```

오버로드는 추후에!