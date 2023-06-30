function logMessage(value: string | number) {
    if (typeof value === "number") {
        // any와 달리 number에 대한 자동완성 기능 제공
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        // any와 달리 string에 대한 자동완성 기능 제공
        value.toUpperCase();
    }
    throw new TypeError('value must be string or number')
}

logMessage('hello');
logMessage(100);

// 유니온 타입 (or) : |

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // someone에 대한 타입 검증 확정 전에는 보장된 공통속성인 name만 접근 가능함
    someone.name
}
askSomeone({name: 'gkwns', skill: 'asd'});
askSomeone({name: 'gkwns', age: 123});


// 인터섹션 타입 (and) : &

function askSomeoneB(someone: Developer & Person) {
    someone.name
    someone.skill
    someone.age
}
askSomeoneB({name: 'gkwns', skill: 'asd', age: 35});