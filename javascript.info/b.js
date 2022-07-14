import { a, b } from '.a.js';
import defaultModuleA from './a.js';

// named exports로 내보낸 모듈은 명확하게 체크하여 가져울 수 있다.
console.log(a, b);

// default export로 내보낼 경우 가져올 때 잘못된 식별자에 접근하는 문제 발생 가능성이 있다.
console.log(defaultModuleA.a, defaultModuleA.c);
