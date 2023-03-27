
const Program = {
    apiController : {}
}

document.addEventListener("yt-navigate-finish", () => {
    // A Listener for when a Youtube page has fully loaded
    const usingAPI = "ryd"; // = getAPI();

    Program.apiController[usingAPI].onLoad().then((data) => {
        insertDislikes(convertFormat(data.dislikes));
    });
});

Program.apiController = {};
Program.getInstance = () => {
    if (typeof Program.instance == "undefined") Program.instance = new Program();
    return Program.instance;
}
