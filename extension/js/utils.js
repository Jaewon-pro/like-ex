
const getVideoId = () => {
    const url = new URL(window.location.href);
    const vid = url.searchParams.get("v");
    return vid;
}

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
        console.log("Failed to find an iconElement");
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

// async function resizeDislikesButton() {
//     document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill");
// }
