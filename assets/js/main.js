const nav = document.getElementsByTagName('nav')[0];
const main = document.getElementsByTagName("main")[0];
const sidebar = document.getElementsByClassName('sidebar')[0];
const scrollBtn = document.getElementById('scroll-up');
var imgs = main.getElementsByTagName("img");
var h6s = main.getElementsByTagName("h6");
var h5s = main.getElementsByTagName("h5");
var ps = main.getElementsByTagName("p");

// setTimeout(function () {
//    window.onscroll = function () { scrollFunction() };
// }, 2000);
// window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.remove("fade-out")
        scrollBtn.classList.add("fade-in")
    } else {
        scrollBtn.classList.remove("fade-in")
        scrollBtn.classList.add("fade-out")
    }

    getContent();
}

var defaultHeight = 100; // changes through cliking a link
function getContent() {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    for (var i = 0; i < imgs.length; i++) {
        var distance = 100 / (vh / imgs[i].getBoundingClientRect().top)

        if (distance < defaultHeight) {
            imgs[i].classList.add('display')
        }
    }

    for (var i = 0; i < h6s.length; i++) {
        var distance = 100 / (vh / h6s[i].getBoundingClientRect().top)

        if (distance < defaultHeight) {
            h6s[i].classList.add('display')
        }
    }

    for (var i = 0; i < h5s.length; i++) {
        var distance = 100 / (vh / h5s[i].getBoundingClientRect().top)

        if (distance < defaultHeight) {
            h5s[i].classList.add('display')
        }
    }

    for (var i = 0; i < ps.length; i++) {
        var distance = 100 / (vh / ps[i].getBoundingClientRect().top)

        if (distance < defaultHeight) {
            ps[i].classList.add('display')
        }
    }
}

$(window).on("load", function () {
    if (window.innerWidth >= 811) {
        $(".loader-wrapper").delay(2000).fadeOut(0)
        // $(".img-fit").delay(2000).fadeIn(2000)

        if (saveScreen == "main") {
            $(".img-fit").delay(2000).fadeIn(2000)
        }

        setTimeout(function () {
            $(".single").addClass('darken')
        }, 2000);

    } else {
        $(".single").delay(1800).fadeIn(2000)
        $(".loader-wrapper-menu").delay(2000).fadeOut(0)
    }

    setTimeout(function () {
        window.onscroll = function () { scrollFunction() };
    }, 2000);

    if (saveScreen !== "main") {
        setTimeout(function () {
            getContent();
        }, 4000);
    }

    // setTimeout(function () {
    //     getContent();
    // }, 3000);

    // getContent()
});

function closeProject() {
    window.history.pushState("", "", "/as-onepager/");
    document.getElementById(saveScreen).style.display = 'none';
    scrollBtn.style.display = 'none';
    // document.getElementById('main-img').style.display = 'none';

    if (window.innerWidth >= 811) {
        main.style.display = "block";
        main.style.width = "calc(100% - 416px)";
        // document.getElementById('main-img').style.display = "block";
        $("#main-img").fadeIn(2000)
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.style.display = "flex";
        main.style.display = "none";
        main.style.width = "0";
        document.getElementsByClassName('close')[0].style.display = "none";
    }

    document.getElementsByClassName('active')[0] ? document.getElementsByClassName('active')[0].classList.remove('active') : null
    saveScreen = 'main';
    // sidebar.style.position = "absolute";
    // sidebar.style.height = "100%";
}

var saveScreen;
saveScreen = 'main';
function link(a) {
    //     $("img").toggleClass('display');

    //     $("h6").toggleClass('display');
    //     $("p").toggleClass('display');
    // $("img").removeClass("display")
    // $("h6").removeClass("display")
    // $("p").removeClass("display")


    document.getElementById('loader-wrapper').style.display = 'flex';
    scrollBtn.style.display = 'flex';
    document.body.style.overflow = 'auto';
    // document.getElementById('main-img').style.display = 'none';

    if (window.innerWidth <= 810) {
        sidebar.style.display = "none";
        main.style.display = "block";
        main.style.width = "100%";
        document.getElementsByClassName('close')[0].style.display = "block";
    }

    // for (var i = 0; i < imgs.length; i++) {
    //     imgs[i].classList.remove('display')
    // }
    // for (var i = 0; i < h6s.length; i++) {
    //     h6s[i].classList.remove('display')
    // }
    // for (var i = 0; i < ps.length; i++) {
    //     ps[i].classList.remove('display')
    // }

    saveScreen !== 'main' ? document.getElementById(saveScreen).style.display = 'none' : null;

    var linkId;
    if (!window.document.documentMode && window.location.href.includes("index.html")) {
        linkId = a.href.substring(a.href.lastIndexOf('/') + 12);
    }
    // for IE 
    else if (window.document.documentMode && window.location.href.indexOf('index.html') > 0) {
        linkId = a.href.substring(a.href.lastIndexOf('/') + 12);
    }
    else {
        linkId = a.href.substring(a.href.lastIndexOf('/') + 2);
    }

    saveScreen = linkId;

    document.getElementById('main-img').style.display = "none"


    // $(".loader-wrapper").delay(2000).fadeOut(2000);

    setTimeout(function () {
        $(".loader-wrapper").fadeOut(0);
    }, 2000);



    // setTimeout(function () {
    //     window.onscroll = function () { scrollFunction() };
    // }, 2000);

    // setTimeout(function () {
    //     getContent();
    // }, 3000);

    // give a class of "fade in" to the first img, headings, and p
    //  is there way to give this class to "first of type" in JS?
    // $("main img:nth-of-type(1)").css('opacity') = '1';
    // $("main img:nth-of-type(2)").css('opacity') = '1';

    // document.getElementById(linkId).style.display = 'block';




    // display none for project
    // then fade in here

    // for (var i = 0; i < imgs.length; i++) {
    //     imgs[i].classList.remove('display')
    // }
    // for (var i = 0; i < h6s.length; i++) {
    //     h6s[i].classList.remove('display')
    // }
    // for (var i = 0; i < ps.length; i++) {
    //     ps[i].classList.remove('display')
    // }


    // $("img").removeClass("display")
    // $("h6").removeClass("display")
    // $("p").removeClass("display")


    // $("#" + linkId).delay(2000).fadeIn(2000);



    items = document.querySelectorAll('.single.active');

    if (items.length) {
        items[0].className = 'single darken';
    }

    a.className = 'single darken active';

    $('html, body').animate({
        scrollTop: $("#" + linkId).offset()
    });

    // $("img").removeClass("display")
    // $("h6").removeClass("display")
    // $("p").removeClass("display")

    // defaultHeight = 100;
    setTimeout(function () {
        $("img").removeClass("display")
        $("h6").removeClass("display")
        $("h5").removeClass("display")
        $("p").removeClass("display")
        $("#" + linkId).fadeIn(2000);
        getContent();


        setTimeout(function () {
            defaultHeight = 85;
        }, 2000);

    }, 2000);

    if (saveScreen !== "main") {
        setTimeout(function () {
            getContent();
        }, 3000);

    }
    // getContent() 
    window.history.pushState("", "", "/as-onepager2/" + saveScreen);
}

function updateProjectUrl() {
    for (var i = 0; i < nav.getElementsByTagName('a').length; i++) {
        if (window.location.href.substring(window.location.href.lastIndexOf('/') + 1) == "" || window.location.href.substring(window.location.href.lastIndexOf('/') + 1) == "index.html") {

        }
        else if (!window.document.documentMode && nav.getElementsByTagName('a')[i].href.includes(window.location.href.substring(window.location.href.lastIndexOf('/') + 0))) {
            nav.getElementsByTagName('a')[i].click()
        }

        // IE
        else if (window.document.documentMode && nav.getElementsByTagName('a')[i].href.indexOf(window.location.href.substring(window.location.href.lastIndexOf('/') + 1)) > 0) {
            nav.getElementsByTagName('a')[i].click()
        }
    }

    // window.history.pushState("", "", "/as-onepager2/" + saveScreen);
}

updateProjectUrl()

// make back and forward browser buttons also change projects
window.onhashchange = function () {
    if (window.location.href.substring(window.location.href.lastIndexOf('/') + 0) !== '/') {
        // window.history.pushState("", "", "");
        updateProjectUrl()

    } else {
        closeProject()
    }
}