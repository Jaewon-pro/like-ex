
const Program = {
    apiController : {},
    utils: {}
}

document.addEventListener("yt-navigate-finish", () => {
    // A Listener for when a Youtube page has fully loaded
    const usingAPI = "ryd"; // = getAPI();
    Program.apiController[usingAPI].onLoad().then(Program.utils.display);
});

Program.apiController = {};
Program.utils = {};
Program.getInstance = () => {
    if (typeof Program.instance == "undefined") Program.instance = new Program();
    return Program.instance;
}
