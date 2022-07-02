/* ✅
 *  document에서 찾을 필요 없이 더 정밀 조사가 가능하다.
 *  더 짧은 코드 작성을 위해 #login-form 안에서 태그를 얻어오자. */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onLoginSubmit(event) {
    // 이벤트 기본값 인자로 event를 쓰는게 컨벤션(관행)
    event.preventDefault(); // 새로고침 막아줌
    console.log(loginInput.value);
}

function handleLink(event){
    event.preventDefault();
    console.dir(event);
}

// ❗ 이벤트 리스너 함수의 첫 번째 인자는 방금 일어난 이벤트에 대한 정보이다.
// 어떤 이벤트 함수를 주든 간에 JS에는 첫 번재 인자로 이벤트에 대한 디폴트 값을 준다.
// 그 디폴트 값 정보를 받고 싶다면 함수에 인자를 줘서 받아주자.
// event는 디폴트 실행이 있다. -> submit 이벤트는 새로고침돼버린다.
// 이 때 정보가 날아가는 것을 막기 위해 preventDefault()로 그걸 막아준다.
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink);
// ✅ eventListenr 안의 함수는 네가 직접 실행하는 것이 아니라, 브라우저에서 해주는 것이다.
