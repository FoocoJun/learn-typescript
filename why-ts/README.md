[참고] 섹션1-3 [자바스크립트에 타입이 있을 때의 첫 번째 장점] - why-ts undefined


섹션1-3 강의명 [자바스크립트에 타입이 있을 때의 첫 번째 장점] 중
why-ts의 app.js에서 axios.get(url)의 response 를 User type으로 정의하였습니다. Promise<User>

이때, response가 아닌 response.data가 User type이므로 자동완성을 따라가면 undefined 문제가 발생합니다.

이미 많은 질문이 나왔고 답변으로도 말씀하셨듯 필요성을 인지하기엔 충분하므로 수강하시는 분들은 단순 참고 바랍니다.🙏

---
기존 강의자료

```js
// user data
var user={};

...

/**
 * @typedef {object} User
 * @property {string} name 
 * @property {string} email
 * @property {Address} address
 */

/**
 * 
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}
```

---
참고로 아래와 같이 추가 정의하더라도 상단에서 user을 정의하고 있었기 때문에 추론이 되지 않습니다.

```js
// user data
var user={};

...

/**
 * @typedef {object} UserData
 * @property {User} data 
 */

/**
 * 
 * @returns {Promise<UserData>}
 */
function fetchUser() {
  return axios.get(url);
}
```

---
아래와 같이 선언시 타입을 제공하여 해소 가능합니다. 그냥 ts 씁시다.
```js
function startApp() {
  fetchUser()
    .then(function (response) {
      var user = response.data;
```


