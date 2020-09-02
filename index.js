(function () {

    let scrList = ["./1.pdf", "./2.pdf", "./3.pdf", "./4.pdf", "./5.pdf", "./6.pdf", "./7.pdf", "./8.pdf", "./9.pdf", "./10.pdf", "./11.jpg", "./12.pdf", "./13.jpg", "https://www.haaretz.co.il/gallery/1.3352934", "./15.pdf", "./16.pdf", "https://www.haaretz.co.il/gallery/music/classicalmusic/teiva/1.2645560", "http://www.habama.co.il/Pages/Description.aspx?Subj=1&Area=1&ArticleID=29303", "https://yomyom.net/article.asp?id=42317", "https://www.haaretz.co.il/gallery/music/classicalmusic/.premium-MAGAZINE-1.8870924", "http://www.verbanovolant.it/note-di-lago-a-stresa-sinfonia-di-mantra-per-la-pace-dirige-omer-meir-wellber-mercoledi-15-giugno/", "https://www.makorrishon.co.il/culture/motsash/203525/", "https://www.ynet.co.il/articles/0,7340,L-5580878,00.html", "./24.pdf", "https://www.onlife.co.il/entertainment/music/177855"];
    let myModal = document.createElement("div");
    let body = document.getElementsByTagName('body')[0];
    body.insertBefore(myModal, body.firstChild);

    let modalContent = document.createElement("div");
    myModal.appendChild(modalContent);


    let iframeDiv = document.createElement("div");
    modalContent.appendChild(iframeDiv);

    var s1 = document.createElement("iframe")
    // s1.src = "https://checklist.lancadorpro.com.br";
    s1.style.width = "100vw";
    s1.style.height = "100vh";
    console.log("reached", s1);
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s1.style.overflow = "hide";
    iframeDiv.appendChild(s1);

    let closeButton = document.createElement("button");
    closeButton.innerHTML = "CLICK HERE TO CLOSE";
    iframeDiv.insertBefore(closeButton, iframeDiv.firstChild);
    closeButton.addEventListener("click", () => {
        myModal.style.display = "none";
    })
    myModal.style.display = "none";
    myModal.style.position = "fixed";
    myModal.style.zIndex = "100";
    myModal.style.height = "100vh";
    myModal.style.width = "100vw";
    myModal.style.overflow = "auto";
    myModal.style.backgroundColor = "rgba(0,0,0,0.4)";
    modalContent.style.margin = "auto";
    modalContent.style.width = "100vw";
    modalContent.style.height = "100vh";
    // modalContent.style.marginTop="10vh";
    // modalContent.style.borderRadius="4vh";
    // modalContent.style.marginLeft="10vw";
    modalContent.style.backgroundColor = "#fefefe";
    modalContent.style.overflow = "hide";

    // closeButton.style.float="right";
    closeButton.style.color = "red";
    closeButton.style.background = "transparent";
    closeButton.style.borderRadius = "5px";
    closeButton.style.borderColor = "red";
    closeButton.style.marginLeft = "85vw";
    closeButton.style.fontSize = "10px";
    closeButton.style.padding = "5px";
    closeButton.style.borderWidth = "1px";
    closeButton.style.position = "absolute";
    closeButton.style.marginTop = "3vh";
    closeButton.addEventListener("mouseover", () => {
        closeButton.style.cursor = "pointer";
    });
    closeButton.addEventListener("mouseleave", () => {
        closeButton.style.cursor = "default";
    });
    let layer = document.getElementById("Layer1");
    layer.addEventListener("click", function (e) {
        console.log(e.srcElement.id);
        let id = e.srcElement.id;
        if (id >= 1 && id <= 25) {
            s1.src = scrList[id - 1];
            console.log(s1.src);
            myModal.style.display="block";
        }
    })

})();
