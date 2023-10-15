function back_confirm() {
    if (confirm("회원가입을 중단하고 메인 화면으로 돌아가시겠습니까?")) {
        window.location.href = "login2.html";
    } else {
        return false;
    }
}

function signUpCheck() {
    if (confirm("회원가입 하시겠습니까?")) {
        alert("test");
    } else {
        return false;
    }
}

function checkOnlyOne(element) {
    const checkboxes = document.getElementsByName("gender");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    });
    element.checked = true;
}