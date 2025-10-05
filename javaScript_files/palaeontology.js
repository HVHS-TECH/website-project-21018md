/*****************************************************/
// File: javaScript_files/palaeontology.js
/*****************************************************/
console.log("palaeontology.js");

var language = sessionStorage.getItem("currentLanguage");

var languages = document.getElementById("languages");
var footerDinoHead = document.getElementById("footerDinoHead");
var trexLink = document.getElementById("trexLink");
var raptorLink = document.getElementById("raptorLink");
var triceraLink = document.getElementById("triceraLink");
var footerPalaeoHead = document.getElementById("footerPalaeoHead");
var palaeoLinkOne = document.getElementById("palaeoLinkOne");
var palaeoLinkTwo = document.getElementById("palaeoLinkTwo");
var whatTitle = document.getElementById("whatTitle");
var whatDescription = document.getElementById("whatDescription");
var whyTitle = document.getElementById("whyTitle");
var whyDescription = document.getElementById("whyDescription");
var pageHead = document.getElementById("pageHead");
var pageDescription = document.getElementById("pageDescription");

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
    pageHead.textContent = "SECRETS IN STONE";
    pageDescription.textContent = "Have you ever wondered how we know so much about dinosaurs? Dig into the holes of palaeontology and learn why it's so important.";

    // Information section
    whatTitle.textContent = "What is it?";
    whatDescription.textContent = "Palaeontology is the study of ancient living organisms through fossils. Fossils are the preserved remains or traces of once-living creatures, such as bones, shells, DNA, or even footprints, preserved in rock. Like tree rings, fossils may contain information about an organism's life and environment. Palaeontologists use these fossil remains to understand different aspects of extinct and living organisms.";

    whyTitle.textContent = "Why is it important?";
    whyDescription.textContent = "Through research and study, palaeontology aims to reveal the history of life on Earth and develop new ideas about evolution and ecology. It helps us learn how climate change has affected past organisms and how organisms have changed the physical world. We can also better understand the principles of extinction, evolutionary change, and biodiversity.";

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

    // Navigation Section
    languages.textContent = "日本語";

    homeMenu.textContent = "ホームページ";
    selectMenu.textContent = "恐竜のページ";
    palaeoMenu.textContent = "古生物学のページ";

    // Landing section
    pageHead.textContent = "化石と古生物学";
    pageDescription.textContent = "恐竜についてなぜそんなに多くのことを知っているのか、不思議に思ったことはありませんか？古生物学とその重要性について学びましょう。";

    // Information section
    whatTitle.textContent = "古生物学とは何ですか？";
    whatDescription.textContent = "古生物学は化石を通じて古代の生物を研究する学問です。化石は、一度生きていた生物の保存された遺骸や痕跡であり、骨、貝殻、DNA、さらには足跡などが岩石の中に保存されています。年輪のように、化石はその生物の生活や環境についての情報を含んでいるかもしれません。古生物学者はこれらの化石の遺骸を利用して、絶滅した生物や現在生きている生物のさまざまな側面を理解しようとします。";
    
    whyTitle.textContent = "古生物学はなぜ重要ですか？";
    whyDescription.textContent = "研究と調査を通じて、古生物学は地球上の生命の歴史を明らかにし、進化と生態系に関する新しいアイデアを発展させることを目的としています。それにより、気候変動が過去の生物に与えた影響や、生物が物理的な世界をどのように変えたかを学ぶことができます。また、絶滅、進化の変化、生物多様性の原則をよりよく理解することができます。";

    // Footer section
    footerDinoHead.textContent = "恐竜";
    trexLink.textContent = "ティラノサウルス";
    raptorLink.textContent = "ヴェロキラプトル";
    triceraLink.textContent = "トリケラトプス";
    footerPalaeoHead.textContent = "古生物学";
    palaeoLinkOne.textContent = "それは何ですか？";
    palaeoLinkTwo.textContent = "なぜそれが重要なのですか？";
}
