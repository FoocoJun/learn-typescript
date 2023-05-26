// 두개 이상의 인자값을 칼같이 쳐냅니다.
function sum(a: number, b: number):number {
    return a + b;
}

// c는 들어오든 말든 상관하지 않습니다. 옵셔널 파라미터
function add(a: number, b: number, c?: number):number {
    if (c) {
        return c;
    }
    return a + b;
}

// 강의 외 내용
// 가변적으로 몇개든 들어올 수 있는 파라미터 입니다. 스프레드 연산자
function multiply(...num: number[]): number {
    return num[0] * num[num.length -1];
}

const arr = [10,20,30,40,50,60];
multiply(...arr);