var getMenuLi1 = document.getElementById("menu-li-id1");
var getMenuLi2 = document.getElementById("menu-li-id2");
var getLiForExitNav = document.getElementById("li-for-exit-nav");
var getDiv3 = document.getElementById("div3");
var getDiv7 = document.getElementById("div7");
var getDiv8 = document.getElementById("div8");


getMenuLi1.addEventListener("click", () => {

    document.body.style.overflow = 'hidden';
    // document.getElementById('new-div').style.zIndex = '-1';

    getDiv8.style.display = "block";
    getDiv8.style.right = "-99vw";

    setTimeout(() => {

        getDiv8.style.right = "0";

    }, 1);

    // setTimeout(() => {
    //     getDiv1.style.display = "hidden";
    // }, 600);

    setTimeout(() => {
        getMenuLi1.style.display = "none" //After 0.6s nav icon disappears
        getLiForExitNav.style.display = "block";
    }, 600);

    // getBtn.style.display = "none";
    // getBtn2.style.display = "block";

});

getLiForExitNav.addEventListener("click", () => {

    document.body.style.overflow = 'visible';
    // document.getElementById('new-div').style.zIndex = '0';

    getDiv8.style.right = "-99vw";

    setTimeout(() => {

        getDiv8.style.display = "none";
        getMenuLi1.style.display = "block";

    }, 400);

});


getMenuLi2.addEventListener("click", () => {

    document.getElementById('new-div').style.zIndex = '-1';

    document.body.style.overflow = 'hidden';

    getDiv8.style.display = "block";
    getDiv8.style.right = "-99vw";

    setTimeout(() => {

        getDiv8.style.right = "0";

    }, 1);

    // setTimeout(() => {
    //     getDiv1.style.display = "hidden";
    // }, 600);

    setTimeout(() => {
        getMenuLi2.style.display = "none" //After 0.6s nav icon disappears
        getLiForExitNav.style.display = "block";
    }, 600);

    // getBtn.style.display = "none";
    // getBtn2.style.display = "block";

});

getLiForExitNav.addEventListener("click", () => {

    document.body.style.overflow = 'visible';
    document.getElementById('new-div').style.zIndex = '0';

    getDiv8.style.right = "-99vw";

    setTimeout(() => {

        getDiv8.style.display = "none";
        getMenuLi2.style.display = "flex";

    }, 400);

});
