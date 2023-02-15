
var Program = {
    apiController : {}
}

const IsYtb = (url) => {
    if ((url.hostname === "www.youtube.com" || url.hostname === "m.youtube.com") && url.pathname.startsWith("/watch")) {
        console.log("This is a YouTube video URL.");
        return true;
      } else {
        console.log("This is not a YouTube video URL.");
        return false;
      }
}

const getVideoId = () => {
    const url = new URL(window.location.href);
    const vid = url.searchParams.get("v");
    // const params = new URLSearchParams(new URL(currentUrl).search);
    // const vid = params.get("v");
    return vid;
}


const convertFormat = (countDislikes) => {
    if (countDislikes < 1000) return countDislikes;
    return countDislikes;
}

async function insertDislikes(dislikesString) {
    // <div id = segmented-dislike-button>
    // <div class="yt-spec-button-shape-next__icon">
    // <svg class = "style-scope yt-icon"></svg>
    // svg 다음에 Dislikes count 삽입
    const svgElement = document.querySelector("#segmented-dislike-button .yt-spec-button-shape-next__icon svg");
//document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > div")

    console.log(svgElement);
    if (svgElement === null) {
        console.log("Fail to find SVG");
        return;
    }
    const spanDislikes = document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > div > yt-icon > span")
    if (spanDislikes === null ) {
        const newElement = document.createElement("span");
        newElement.innerHTML = dislikesString;
        svgElement.parentNode.insertBefore(newElement, svgElement.nextSibling);
    } else {
        spanDislikes.innerHTML = dislikesString;
    }

}

async function resizeDislikesButton() {
    document.querySelector("#segmented-dislike-button > ytd-toggle-button-renderer > yt-button-shape > button > yt-touch-feedback-shape > div > div.yt-spec-touch-feedback-shape__fill");
}


self.addEventListener('fetch', event => {
    event.respondWith(async function() {
        const preloadResponse = event.preloadResponse;
        if (preloadResponse) {
            // Wait for the preload response to settle before responding
            await preloadResponse;
            return preloadResponse;
        }
        console.log("fetch11");
        // Fetch the resource from the network
        const response = await fetch(event.request);
        return response;
    }());
});

//DOMContentLoaded
document.addEventListener("yt-navigate-finish", () => {
    // Handler when Youtube is fully loaded
    console.log("aaa");
    // const API = getAPI();
    // API.name
    const nameAPI = "ryd";
    
    console.log(getVideoId());

    //Program.apiController[nameAPI].onLoad();
    insertDislikes("123Wo");
});
document.addEventListener("yt-guide-close", () => {
    // Handler when the DOM is fully loaded
    console.log("bb1b");
});document.addEventListener("yt-guide-show", () => {
    // Handler when the DOM is fully loaded
    console.log("bb3b");
});document.addEventListener("yt-guide-toggle", () => {
    // Handler when the DOM is fully loaded
    console.log("b4bb");
});document.addEventListener("yt-navigate-cache", () => {
    // Handler when the DOM is fully loaded
    console.log("b5bb");
});document.addEventListener("yt-navigate-start", () => {
    // Handler when the DOM is fully loaded
    console.log("b6bb");
});document.addEventListener("yt-page-type-changed", () => {
    // Handler when the DOM is fully loaded
    console.log("bb7b");
});document.addEventListener("yt-toggle-button", () => {
    // Handler when the DOM is fully loaded
    console.log("bb8b");
});

document.addEventListener("DOMContentLoaded", () => {
    // Handler when the DOM is fully loaded
    console.log("bbb");
});

Program.apiController = {};
Program.getInstance = () => {
    if (typeof Program.instance == "undefined") Program.instance = new Program();
    return Program.instance;
}
