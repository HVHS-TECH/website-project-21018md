/*****************************************************/
// File: javaScript_files/homepage.js
/*****************************************************/
console.log("hompage.js");

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

var pachy = document.getElementById("pachyItem");
var trex = document.getElementById("trexItem");
var raptor = document.getElementById("raptorItem");
var tricera = document.getElementById("triceraItem");
var diplo = document.getElementById("diploItem");
var ankylo = document.getElementById("ankyloItem");
/*****************************************************/

function english() {
    console.log("change to english");

    // Navigation section
    languages.textContent = "English";

    // Select section
    pachy.textContent = "PACHYCEPHALOSAURUS";
    trex.textContent = "TYRANOSAURUS REX";
    raptor.textContent = "VELOCIRAPTOR";
    tricera.textContent = "TRICERATOPS";
    diplo.textContent = "DIPLIDOCUS";
    ankylo.textContent = "ANKYLOSAURUS";

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

    // Navigation Section
    languages.textContent = "日本語";

    // Select section
    pachy.textContent = "パキケファロサウルス";
    trex.textContent = "ティラノサウルス・レックス";
    raptor.textContent = "ヴェロキラプトル";
    tricera.textContent = "トリケラトプス";
    diplo.textContent = "ディプロドクス";
    ankylo.textContent = "アンキロサウルス";

    // Footer section
    footerDinoHead.textContent = "恐竜";
    trexLink.textContent = "ティラノサウルス";
    raptorLink.textContent = "ヴェロキラプトル";
    triceraLink.textContent = "トリケラトプス";
    footerPalaeoHead.textContent = "古生物学";
    palaeoLinkOne.textContent = "それは何ですか？";
    palaeoLinkTwo.textContent = "なぜそれが重要なのですか？";
}
