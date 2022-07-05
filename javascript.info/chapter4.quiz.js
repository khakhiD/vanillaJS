/*
 * 기초부터 완성까지, 프런트엔드 4장 [자바스크립트 기초 - 타입 변환과 함수] Quiz
 */

null == undefined; // ⭕true
false == 0; // ⭕true
0 == []; // ⭕false
String([1,2,3]); // ⭕'1,2,3'
'a' + {}; // ⭕'a[Object object]'
'1' < ['02']; // ⭕false
NaN == NaN; // ⭕false
[] && 'null' || 'default'; // ❌[Object object] => ⭕'null'
[] || 'default'; // ❌[Object object] => ⭕[]

const obj = {
    valueOf(){
        return 1;
    },
    toString() {
        return 'string';
    }
};

Number(obj); // ⭕1