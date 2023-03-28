
Program.utils.getVideoInfo = () => {
    const info = {
        id: '',
        type: '',
    };
    const url = new URL(window.location.href);
    if (url.pathname.includes("watch")) { // watch?v= VID
        info.type = "video";
        info.id = url.searchParams.get("v");
    }
    else if (url.pathname.includes("shorts")) {
        info.type = "shorts";
        info.id = url.pathname.split("/")[2]; 
    }
    else { return null; }
    return info;
}

Program.utils.display = (data) => {
    if (data === null) return;
    const formatted = convertFormat(data.dislikes);
    if (data.type === "video") {
        insertDislikes(formatted);
    } else if (data.type === "shorts") {
        insertDislikesShorts(formatted);
    }
};

const convertFormat = (dislikeCount) => {
    if (dislikeCount === undefined) return "Undefined";

    const THRESHOLD = 1000;
    const UNIT_SUFFIXES = ['', 'K', 'M', 'B'];
    
    let i = 0;
    while (dislikeCount >= THRESHOLD) {
        dislikeCount = Math.floor(dislikeCount / THRESHOLD);
        ++i;
    }
    
    return dislikeCount + UNIT_SUFFIXES[i];
}

async function insertDislikes(dislikesString) {
    const iconElement = document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > div > yt-icon");

    if (iconElement === null) {
        console.error("Failed to find an iconElement");
        return;
    }
    const spanDislikes = document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > div > yt-icon > span")
    if (spanDislikes === null ) { // When <span> element absents for displaying dislikes
        const newElement = document.createElement("span");
        newElement.textContent = dislikesString;
        iconElement.insertAdjacentHTML('afterend', newElement.outerHTML);
    } else {
        spanDislikes.textContent = dislikesString;
    }
}

async function insertDislikesShorts(dislikesString) {
    const spanElement = document.querySelector("#dislike-button > yt-button-shape > label > div > span");
    if (spanElement === null) {
        console.error("Failed to find a spanElement");
        return;
    }
    spanElement.textContent = dislikesString;
}

// async function resizeDislikesButton() {
//     const divLike = document.querySelector("#segmented-like-button > ytd-toggle-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill");
//     const divDislike = document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill");
//     divDislike.offsetWidth = divLike.offsetWidth;
// }

