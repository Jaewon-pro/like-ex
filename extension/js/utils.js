
Program.utils.createButton = async (buttonId) => {
    const waitTime = 100;
    await delay(waitTime); // 바로 하면 못 찾음

    const menu = document.querySelector("#top-level-buttons-computed");
    const button = document.getElementById(buttonId);

    if (menu !== null && button === null) {
        const button1 = createButton(buttonId);
        menu.appendChild(button1);
        return button1;
    }

    return null;
}

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
    const formatted = compactNumber(data.dislikes);
    if (data.type === "video") {
        insertDislikes(formatted);
    } else if (data.type === "shorts") {
        insertDislikesShorts(formatted);
    }
};


function createButton(buttonId) {
    const ytbButtonStyle = "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading";

    const button1 = document.createElement("button");
    button1.id = buttonId;
    button1.className = ytbButtonStyle;
    button1.innerText = "🔍";
    return button1;
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function compactNumber(number) {
    console.log(number)
    if (number < 1000) {
        return number;
    }

    const compactNumberFormatter = new Intl.NumberFormat('local', {
        notation: 'compact',
    });

    return compactNumberFormatter.format(number);
}


async function insertDislikes(dislikesString) {
    const parent = "#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > dislike-button-view-model > toggle-button-view-model > button";
    const divClass = "yt-spec-button-shape-next__button-text-content";

    const parentElement = document.querySelector(parent);

    if (parentElement === null) {
        console.error("Failed to find a button");
        return;
    }

    let divElement = parentElement.querySelector(`.${divClass}`);
    if (divElement === null) {
        divElement = document.createElement("div");
        divElement.className = divClass;
        parentElement.appendChild(divElement);
    }

    const spanElement = await getOrCreateSpan(divElement, dislikesString);
    spanElement.textContent = dislikesString;
    parentElement.className = "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading yt-spec-button-shape-next--segmented-end";

}

async function getOrCreateSpan(divElement) {
    const selected = divElement.querySelector("span");
    if (selected) {
        console.log(divElement)
        return selected;
    }
    const spanElement = document.createElement("span");
    spanElement.className = "yt-core-attributed-string yt-core-attributed-string--white-space-no-wrap";
    spanElement.role = "text";
    divElement.appendChild(spanElement);
    return spanElement;
}


async function insertDislikesShorts(dislikesString) {
    const spanElement = document.querySelector("#dislike-button > yt-button-shape > label > div > span");
    if (spanElement === null) {
        console.error("Failed to find a spanElement");
        return;
    }
    spanElement.textContent = dislikesString;
}
