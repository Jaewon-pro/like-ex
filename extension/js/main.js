
var Program = {
    data : {},
    apiController : {}

}

const getVideoId = () => {
    const url = new URL(window.location.href);
    const vid = url.searchParams.get("v");
    return vid;
}


const convertFormat = (countDislikes) => {
    if (countDislikes === undefined) return -1;
    
    const unit = ['', 'K', 'M', 'B']
    for (let i = 0; i < unit.length; ++i) {
        if (countDislikes < 1000) { return countDislikes+unit[i]; }
        countDislikes = parseInt(countDislikes / 1000);
    }
    return countDislikes;
}

async function insertDislikes(dislikesString) {
    // <div id = segmented-dislike-button>
    //   <div class="yt-spec-button-shape-next__icon">
    //     <yt-icon>
    // yt-icon sibling 위치에 <span> Dislikes count 삽입

    //const svgElement = document.querySelector("#segmented-dislike-button .yt-spec-button-shape-next__icon svg"); //svg 뒤로 태그 사이에 끼워넣어야지 표현 가능, 이후 수정 필요
    const iconElement = document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > div > yt-icon");

    if (iconElement === null) {
        console.log("Fail to find element1");
        return;
    }
    const spanDislikes = document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > div > yt-icon > span")
    if (spanDislikes === null ) {
        const newElement = document.createElement("span");
        newElement.textContent = dislikesString;
        iconElement.insertAdjacentHTML('afterend', newElement.outerHTML);
    } else {
        spanDislikes.textContent = dislikesString;
    }
}

async function resizeDislikesButton() {
    document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill");
}

document.addEventListener("yt-navigate-finish", () => {
    // Handler when Youtube is fully loaded
    // const API = getAPI();
    // API.name
    const nameAPI = "ryd";

    Program.apiController[nameAPI].onLoad().then(() => {
        insertDislikes(convertFormat(Program.data.dislikes));
    });
});


Program.data = {};
Program.apiController = {};
Program.getInstance = () => {
    if (typeof Program.instance == "undefined") Program.instance = new Program();
    return Program.instance;
}
