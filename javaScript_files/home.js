/*****************************************************/
// File: javaScript_files/homepage.js
/*****************************************************/
console.log("hompage.js");

var language = sessionStorage.getItem("currentLanguage");

var titleTop = document.getElementById("titleTop");
var titleBottom = document.getElementById("titleBottom");
var openingInfo = document.getElementById("openingInfo");
var dinoHead = document.getElementById("dinoHead");
var dinoDescription = document.getElementById("dinoDescription");
var dinoSelectButton = document.getElementById("dinoSelectButton");
var languages = document.getElementById("languages");
var carouselHead = document.getElementById("carouselHead");
var pachy_h2 = document.getElementById("pachy_h2");
var trex_h2 = document.getElementById("trex_h2");
var raptor_h2 = document.getElementById("raptor_h2");
var tricera_h2 = document.getElementById("tricera_h2");
var diplo_h2 = document.getElementById("diplo_h2");
var ankylo_h2 = document.getElementById("ankylo_h2");
var palaeoHead = document.getElementById("palaeoHead");
var palaeoDescription = document.getElementById("palaeoDescription");
var palaeoButton = document.getElementById("palaeoButton");
var aboutUsHead = document.getElementById("aboutUsHead");
var aboutUsDescription = document.getElementById("aboutUsDescription");
var footerDinoHead = document.getElementById("footerDinoHead");
var trexLink = document.getElementById("trexLink");
var raptorLink = document.getElementById("raptorLink");
var triceraLink = document.getElementById("triceraLink");
var footerPalaeoHead = document.getElementById("footerPalaeoHead");
var palaeoLinkOne = document.getElementById("palaeoLinkOne");
var palaeoLinkTwo = document.getElementById("palaeoLinkTwo");

var pachy = document.getElementById("pachy_img");
var trex = document.getElementById("trex_img");
var raptor = document.getElementById("raptor_img");
var tricera = document.getElementById("tricera_img");
var diplo = document.getElementById("diplo_img");
var ankylo = document.getElementById("ankylo_img");

/*****************************************************/
// Translation feature
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

    // Landing section
    titleTop.textContent = "ENTER THE";
    titleBottom.textContent = "PREHISTORIC WORLD";
    openingInfo.textContent = "Travel back to a time long before humans, filled with bizarre creatures and vast landscapes - welcome to the age of dinosaurs!";
    languages.textContent = "English";

    // Dinosaur section
    dinoHead.textContent = "THE TITANS";
    dinoDescription.textContent = "During the Mesozoic Era, over 250 million years ago, Earth was dominated by a group of reptiles known as dinosaurs. From colossal claws to tiny teeth, these creatures ran amok throughout the Triassic, Jurassic, and Cretaceous periods. After the asteroid caused their extinction approximately 66 million years ago, scientific research has let us slowly rediscover their world.";
    dinoSelectButton.textContent = "LEARN MORE";

    // Carousel section
    carouselHead.textContent = "DINOSAURS";
    pachy_h2.textContent = "PACHYCEPHALOSAURUS";
    trex_h2.textContent = "TYRANOSAURUS REX";
    raptor_h2.textContent = "VELOCIRAPTOR";
    tricera_h2.textContent = "TRICERATOPS";
    diplo_h2.textContent = "DIPLIDOCUS";
    ankylo_h2.textContent = "ANKYLOSAURUS";

    // Palaeo Section
    palaeoHead.textContent = "THEIR REMNANTS";
    palaeoDescription.textContent = "Palaeontology is the study of ancient living organisms through fossils. Fossils are the preserved remains or traces of once-living creatures, such as bones, shells, DNA, or even footprints. Although old, these special rocks have allowed us to see what Earth was like during prehistoric times.";
    palaeoButton.textContent = "LEARN MORE";

    // About us section
    aboutUsHead.textContent = "ABOUT US";
    aboutUsDescription.textContent = "Hey there, explorer. We're THESAURUS REX. Want to discover how the dinosaurs lived, what they ate, and how varied they were? Or maybe learn about the fossils they left behind and how scientists use them to help us understand our planet? Join us on an adventure to the past and peek into the prehistoric world of dinosaurs!";

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
    sessionStorage.setItem("currentLanguage", "jap");

    // Landing Section
    titleTop.textContent = "ようこそ,";
    titleBottom.textContent = "先史時代の世界へ";
    openingInfo.textContent = "人類誕生以前の奇妙な生き物や広大な風景に満ちた時代へ旅立ちましょう。恐竜の時代へようこそ!";
    languages.textContent = "日本語";

    // Dinosaur section
    dinoHead.textContent = "タイタンズ";
    dinoDescription.textContent = "中生代の間、約2億5千万年前、地球は恐竜と呼ばれる爬虫類のグループによって支配されていました。巨大な爪から小さな歯まで、これらの生物は三畳紀、ジュラ紀、白亜紀にわたって闊歩しました。約6600万年前の小惑星の衝突によって彼らは絶滅しましたが、科学研究により私たちは彼らの世界を少しずつ再発見してきました。";
    dinoSelectButton.textContent = "ページを見る";

    // Carousel section
    carouselHead.textContent = "恐竜";
    pachy_h2.textContent = "パキケファロサウルス";
    trex_h2.textContent = "ティラノサウルス・レックス";
    raptor_h2.textContent = "ヴェロキラプトル";
    tricera_h2.textContent = "トリケラトプス";
    diplo_h2.textContent = "ディプロドクス";
    ankylo_h2.textContent = "アンキロサウルス";

    // Palaeo Section
    palaeoHead.textContent = "その残骸";
    palaeoDescription.textContent = "古生物学は、化石を通じて古代の生物を研究する学問です。化石とは、骨、貝殻、DNA、あるいは足跡など、かつて生きていた生物の保存された残骸や痕跡のことを指します。これらの古い特別な岩石のおかげで、私たちは先史時代の地球がどのようであったかを知ることができるのです。";
    palaeoButton.textContent = "ページを見る";

    // About us section
    aboutUsHead.textContent = "私たちについて";
    aboutUsDescription.textContent = "こんにちは、探検家の皆さん。私たちはTHESAURUS REXです。恐竜たちがどのように暮らしていたのか、何を食べていたのか、そしてどれだけ多様だったのかを知りたいですか？それとも、彼らが残した化石について学び、科学者たちがそれをどのように使って地球を理解する手助けをしているのか知りたいですか？過去への冒険に参加して、恐竜の先史時代の世界を覗いてみましょう！";

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
