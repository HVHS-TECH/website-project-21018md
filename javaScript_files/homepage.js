/*****************************************************/
// File: javaScript_files/homepage.js
/*****************************************************/
console.log("hompage.js");

var titleTop = document.getElementById("titleTop");
var titleBottom = document.getElementById("titleBottom");
var openingInfo = document.getElementById("openingInfo");
var dinoHead = document.getElementById("dinoHead");
var dinoDescription = document.getElementById("dinoDescription");
var dinoSelectButton = document.getElementById("dinoSelectButton");
var languages = document.getElementById("languages");
var carouselHead = document.getElementById("carouselHead");
var pachy = document.getElementById("pachy");
var trex = document.getElementById("trex");
var raptor = document.getElementById("raptor");
var tricera = document.getElementById("tricera");
var diplo = document.getElementById("diplo");
var ankylo = document.getElementById("ankylo");
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
/*****************************************************/

function english() {
    console.log("change to english");

    // Landing section
    titleTop.textContent = "ENTER THE";
    titleBottom.textContent = "PREHISTORIC WORLD";
    openingInfo.textContent = "Travel back to a time long before humans, filled with bizarre creatures and vast landscapes - welcome to the age of dinosaurs!";
    languages.textContent = "ENG";

    // Dinosaur section
    dinoHead.textContent = "THE TITANS";
    dinoDescription.textContent = "During the Mesozoic Era, over 250 million years ago, Earth was dominated by a group of reptiles known as dinosaurs. From colossal claws to tiny teeth, these creatures ran amok throughout the Triassic, Jurassic, and Cretaceous periods. After the asteroid caused their extinction approximately 66 million years ago, scientific research has let us slowly rediscover their world.";
    dinoSelectButton.textContent = "LEARN MORE";

    // Carousel section
    carouselHead.textContent = "DINOSAURS";
    pachy.textContent = "PACHYCEPHALOSAURUS";
    trex.textContent = "TYRANOSAURUS REX";
    raptor.textContent = "VELOCIRAPTOR";
    tricera.textContent = "TRICERATOPS";
    diplo.textContent = "DIPLIDOCUS";
    ankylo.textContent = "ANKYLOSAURUS";

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

    // Landing Section
    titleTop.textContent = "ようこそ,";
    titleBottom.textContent = "先史時代の世界へ";
    openingInfo.textContent = "人類誕生以前の奇妙な生き物や広大な風景に満ちた時代へ旅立ちましょう。恐竜の時代へようこそ!";
    languages.textContent = "JPN";

    // Dinosaur section
    dinoHead.textContent = "タイタンズ";
    dinoDescription.textContent = "中生代の間、約2億5千万年前、地球は恐竜と呼ばれる爬虫類のグループによって支配されていました。巨大な爪から小さな歯まで、これらの生物は三畳紀、ジュラ紀、白亜紀にわたって闊歩しました。約6600万年前の小惑星の衝突によって彼らは絶滅しましたが、科学研究により私たちは彼らの世界を少しずつ再発見してきました。";
    dinoSelectButton.textContent = "ページを見る";

    // Carousel section
    carouselHead.textContent = "恐竜";
    pachy.textContent = "パキケファロサウルス";
    trex.textContent = "ティラノサウルス・レックス";
    raptor.textContent = "ヴェロキラプトル";
    tricera.textContent = "トリケラトプス";
    diplo.textContent = "ディプロドクス";
    ankylo.textContent = "アンキロサウルス";

    // Palaeo Section
    palaeoHead.textContent = "その残骸ざんがい";
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

function vietnamese() {
    console.log("change to vietnamese");

    titleTop.textContent = "NHẬP VÀO";
    titleBottom.textContent = "THẾ GIỚI TIỀN SỬ";
    openingInfo.textContent = "Quay ngược thời gian trở về thời kỳ rất lâu trước khi con người xuất hiện, nơi có nhiều sinh vật kỳ lạ và cảnh quan rộng lớn - chào mừng đến với thời đại khủng long!";

    dinoHead.textContent = "KHỦNG LONG";

    dinoDescription.textContent = "Trong Kỷ Trung Sinh, hơn 250 triệu năm trước, Trái Đất bị thống trị bởi một nhóm bò sát được gọi là khủng long. Từ những móng vuốt khổng lồ đến những chiếc răng nhỏ xíu, những sinh vật này đã hoành hành khắp các kỷ Trias, Jura và Phấn Trắng. Sau khi một tiểu hành tinh gây ra sự tuyệt chủng của chúng khoảng 66 triệu năm trước, nghiên cứu khoa học đã cho phép chúng ta dần khám phá lại thế giới của chúng.";

    dinoSelectButton.textContent = "XEM TRANG";

    languages.textContent = "VN";
}

