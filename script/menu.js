function menuf(){

    var mainLayout = document.getElementById("main");
    mainLayout.innerHTML = 1;

    if(this.innerHTML == "메인")
        mainLayout.innerHTML = '<object type="text/html" data="index.html"></object>';

    else if(this.innerHTML == "자기소개서 보기")
        mainLayout.innerHTML = '<object type="text/html" data="second.html"></object>';

    else if(this.innerHTML == "프로그램 보기")
        mainLayout.innerHTML = '<object type="text/html" data="third.html"></object>';

    //else if(this.innerHTML == "깃 허브 사이트로 가기")

        //mainLayout.innerHTML = '<object type="text/html" data="fourth.html"></object>';
}

window.onload = function(){

    var menu = document.getElementsByClassName("menu");

    for(var i = 0; i < menu.length; i++)
        menu[i].addEventListener("click", menuf);
}