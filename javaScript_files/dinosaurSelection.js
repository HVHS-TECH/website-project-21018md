/*****************************************************/
// File: javaScript_files/dinosaurSelection.js
/*****************************************************/
console.log("dinosaurSelection.js");

var language = sessionStorage.getItem("currentLanguage");

var languages = document.getElementById("languages");
var pachy_h2 = document.getElementById("pachy_h2");
var trex_h2 = document.getElementById("trex_h2");
var raptor_h2 = document.getElementById("raptor_h2");
var tricera_h2 = document.getElementById("tricera_h2");
var diplo_h2 = document.getElementById("diplo_h2");
var ankylo_h2 = document.getElementById("ankylo_h2");
var footerDinoHead = document.getElementById("footerDinoHead");
var trexLink = document.getElementById("trexLink");
var raptorLink = document.getElementById("raptorLink");
var triceraLink = document.getElementById("triceraLink");
var footerPalaeoHead = document.getElementById("footerPalaeoHead");
var palaeoLinkOne = document.getElementById("palaeoLinkOne");
var palaeoLinkTwo = document.getElementById("palaeoLinkTwo");
var pageHead = document.getElementById("pageHead");
var pageDescription = document.getElementById("pageDescription");

var pachy = document.getElementById("pachy_img");
var trex = document.getElementById("trex_img");
var raptor = document.getElementById("raptor_img");
var tricera = document.getElementById("tricera_img");
var diplo = document.getElementById("diplo_img");
var ankylo = document.getElementById("ankylo_img");

var homeMenu = document.getElementById("goHome");
var selectMenu = document.getElementById("goSelect");
var palaeoMenu = document.getElementById("goPalaeo");

/*****************************************************/

function saveLanguage() {
    console.log("Current language is " + language);

    if (language == 'eng') {
        english();
    } else if (language == 'jap') {
        japanese();
    }
}

function english() {
    console.log("change to english");
    sessionStorage.setItem("currentLanguage", "eng");

    // Navigation section
    languages.textContent = "English";

    homeMenu.textContent = "Home";
    selectMenu.textContent = "Dinosaurs";
    palaeoMenu.textContent = "Palaeontology";

    // Landing section
    pageHead.textContent = "GIANTS OF THE PAST";
    pageDescription.textContent = "Sizes, weights, and diets. Discover all sorts of different dinosaurs and how each of them lived.";

    // Select section
    pachy_h2.textContent = "PACHYCEPHALOSAURUS";
    trex_h2.textContent = "TYRANOSAURUS REX";
    raptor_h2.textContent = "VELOCIRAPTOR";
    tricera_h2.textContent = "TRICERATOPS";
    diplo_h2.textContent = "DIPLIDOCUS";
    ankylo_h2.textContent = "ANKYLOSAURUS";

    // Footer section
    footerDinoHead.textContent = "Dinosaurs";
    trexLink.textContent = "Tyranosaurus";
    raptorLink.textContent = "Velociraptor";
    triceraLink.textContent = "Triceratops";
    footerPalaeoHead.textContent = "Palaeontology";
    palaeoLinkOne.textContent = "What is it?";
    palaeoLinkTwo.textContent = "Why is it important";
}

function japanese() {
    console.log("change to japanese");
    sessionStorage.setItem("currentLanguage", "jap")

    // Navigation Section
    languages.textContent = "日本語";

    homeMenu.textContent = "ホームページ";
    selectMenu.textContent = "恐竜のページ";
    palaeoMenu.textContent = "古生物学のページ";

    // Landing section
    pageHead.textContent = "過去の大トカゲ";
    pageDescription.textContent = "大きさ、重さ、食性。さまざまな種類の恐竜とそれぞれがどのように生きていたかを発見しよう。";

    // Select section
    pachy_h2.textContent = "パキケファロサウルス";
    trex_h2.textContent = "ティラノサウルス・レックス";
    raptor_h2.textContent = "ヴェロキラプトル";
    tricera_h2.textContent = "トリケラトプス";
    diplo_h2.textContent = "ディプロドクス";
    ankylo_h2.textContent = "アンキロサウルス";

    // Footer section
    footerDinoHead.textContent = "恐竜";
    trexLink.textContent = "ティラノサウルス";
    raptorLink.textContent = "ヴェロキラプトル";
    triceraLink.textContent = "トリケラトプス";
    footerPalaeoHead.textContent = "古生物学";
    palaeoLinkOne.textContent = "それは何ですか？";
    palaeoLinkTwo.textContent = "なぜそれが重要なのですか？";
}

/*****************************************************/
// Hover trigger changes
/*****************************************************/

//Pachycephalosaurus
function pachyHoverChange() {
    console.log("hoverChange");
    pachy.src = "./images_files/dinosaursVG/pachyB.svg";
}

function pachyHoverRevert() {
    console.log("hoverRevert");
    pachy.src = "./images_files/dinosaursVG/pachy.svg";
}

//Tyranosaurus Rex
function trexHoverChange() {
    console.log("hoverChange");
    trex.src = "./images_files/dinosaursVG/trexB.svg";
}

function trexHoverRevert() {
    console.log("hoverRevert");
    trex.src = "./images_files/dinosaursVG/trex.svg";
}

//Triceratops
function triceraHoverChange() {
    console.log("hoverChange");
    tricera.src = "./images_files/dinosaursVG/triceratopsB.svg";
}

function triceraHoverRevert() {
    console.log("hoverRevert");
    tricera.src = "./images_files/dinosaursVG/triceratops.svg";
}

//Velociraptor
function raptorHoverChange() {
    console.log("hoverChange");
    raptor.src = "./images_files/dinosaursVG/raptorB.svg";
}

function raptorHoverRevert() {
    console.log("hoverRevert");
    raptor.src = "./images_files/dinosaursVG/raptor.svg";
}

//Diplodocus
function diploHoverChange() {
    console.log("hoverChange");
    diplo.src = "./images_files/dinosaursVG/diploB.svg";
}

function diploHoverRevert() {
    console.log("hoverRevert");
    diplo.src = "./images_files/dinosaursVG/diplo.svg";
}

//Ankylosaurus
function ankyloHoverChange() {
    console.log("hoverChange");
    ankylo.src = "./images_files/dinosaursVG/ankyloB.svg";
}

function ankyloHoverRevert() {
    console.log("hoverRevert");
    ankylo.src = "./images_files/dinosaursVG/ankylo.svg";
}
