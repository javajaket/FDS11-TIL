### 문제 1

두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

예:
```
insensitiveEqual('hello', 'hello'); -> true
insensitiveEqual('hello', 'Hello'); -> true
insensitiveEqual('hello', 'world'); -> false
```
```js
function insensitiveEqual(x,y) {
  return (x.toUpperCase() === y.toUpperCase()) ? 'true' : 'false';
}

```
### 문제 2

문자열 `s`와 자연수 `n`을 입력받아, 만약 `s`의 길이가 `n`보다 작으면 `s`의 왼쪽에 공백으로 추가해서 길이가 `n`이 되게 만든 후 반환하고, 아니면 `s`를 그대로 반환하는 함수를 작성해보세요.

예:
```
leftPad('hello', 8); -> '   hello'
leftPad('hello', 3); -> 'hello'
```
```js 
function test(s, n) {
  if (typeof s === 'string' && typeof n === 'number')
    if (s.length < n) {
      return s.padStart(n);
    } else {
      return s;
    }
}

function leftPad(s,n) {
  if(s.length < n) {
    const spaceNum = n - s.length
    return ' '.repeat(spaceNum) + s
  } else {
    return s;
  }
}
```
### 문제 3

문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.

```js
function count(str) {
  let num = 0
  for(let i = 0; i<str.length; i++){ 
   if (str[i]  === 'a' || str[i]  === 'e' || str[i]  === 'i' || str[i]  === 'o' || str[i]  === 'u'){
     num += 1
    }
  } 
  return num;
}

count('hello')
```
### 문제 4

문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.

예:
```
countChar('tomato'); -> {t: 2, o: 2, m: 1, a: 1}
```
```js
function countChar(input) {
  const obj = {}
  for(let i=0; i<input.length;i++){
    const char = input[i]
    //글자를 본적이 없다면 "글자":1을 적어준다.
    if(!(char in obj)){
      obj[char] = 1
    }else{
    //글자를 본적이 있다면 횟수를 1 증가시겨준다.
    obj[char]++
    }
  }
  return obj
}
```
### 문제 5

문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)
```js
const isPalindrome = (input) => {
  for (let i = 0; i < input; i++){
    const left = i;
    const right = input.length -1 - i;
    if(input[left] !== input[right]){
      return false
    }
  }
  return true;
}
```
### 문제 6

문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

예:
```
subString('햄버거');
// 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
```

### 문제 7

문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

예:
```
removeDuplicates('tomato'); -> 'toma'
removeDuplicates('bartender'); -> 'bartend'
```

### 문제 8

이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

- 루프로 먼저 풀어보세요.
- `split` 메소드를 이용해서 풀어보세요.
```js
const removeId = (input) => {
  let seen = false
  let memory = ''
  // 새로 글씨를 쓸 빈칸을 만들어 둔다.
  // 아직 @을 본적 없다는 사실을 기억해 둔다.
  // 입력받은 문자열을 한 글자씩 본다.
  // 아직 @ 을 본적이 없다면 *을 쓴다.
  // @을 본적이 있다면 위에서 본 그씨를 그대로 쓴다.
  for (let i = 0; i < input.length; i++) {
    // 내가 지금 보고 있는 글자가 '@' 이면
    if (input[i] === '@') {
      // seen의 값을 true로 바꾼다.
      seen = true
    }

    // seen이 true이면
    if (seen) {
      // 내가 지금 보고 있는 글자를 그대로 memory에 덧붙인다.
      memory += input[i]  
    } else {
      // 아니면, 별표를 대신 덧붙인다.
      memory += '*'
    }
  }
  // 변환한 결과를 반환한다.
  return memory
}

const removeId2 = (input) => {
  // '@'을 기준으로 쪼갠 후
  const splitted = input.split('@')
  // id 부분과 같은 길이를 갖는 별표 문자열을 만든다.
  const stars = '*'.repeat(splitted[0].length)
  // 별표를 @, 도메인 부분과 이어붙인 후 반환한다.
  return stars + '@' + splitted[1]
}
```
### 문제 9

문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.
```js
const upper = (input) => {
  if(input.toUpperCase()){
    return input.toLowerCase()
  }else {
    return input.toUpperCase()
  }
}
```
### 문제 10

문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)
```js
const capitalize = (input) => {
  return input[0].toUpperCase() + input.slice(1);
}
```
```js
function capitalize(str) {
  let arr = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i-1] === ' ') {
      arr += str[i].toUpperCase();
    } else {
      arr += str[i];
    }
  }
  return arr;
}
}
```
### 문제 11

문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)
```js
function maxWord(str) {
  const Words = str.split(' ');
  if(Words.sort((x,y) => x.length -y.length)) return Words.pop();
}
```
### 문제 12

문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.
```js
const print = (s,n) => {
  const word = s.split('');
  const newA = []
  for(let i=0;i<n;i++) {
    newA.push(word[i])
  }
  return newA.join('')
}
```

### 문제 13

Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

```js
function splitt(str) {
  let snake = '';
  for(let i =0;i<str.length;i++){
    if(str[i] === str[i].toUpperCase()){
      snake +='_' + str[i].toLowerCase();
    }else{
      snake += str[i];
    }
  }
  return snake;
}
```
### 문제 14

Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

```js 
function camelcase(str){
  let camle = '';
  for(let i = 0;i<str.length;i++){
    if(str[i] === '_'){
      camle += ''
    }else if(str[i-1] === '_'){
      camle += str[i].toUppercase();
    }else{
      camle += str[i]
    }
  }
}
```

### 문제 15

`String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```

### 문제 16

2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

예:
```
convertBinary('1101'); -> 13
```

### 문제 17

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

예:
```
insertHyphen('437027423'); -> '4370-274-23'
```
