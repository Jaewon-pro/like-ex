
const Program = {
    apiController : {},
    utils: {}
}

Program.apiController = {};
Program.utils = {};


document.addEventListener("yt-navigate-finish", async () => {
    // A Listener for when a Youtube page has fully loaded
    const buttonName = 'like-ex-button';

    await Program.utils.createButton(buttonName);

    const button = document.getElementById(buttonName);

    button.addEventListener('click', () => {
        // A Listener for when a Youtube page has fully loaded
        const usingAPI = "ryd"; // = getAPI();
        Program.apiController[usingAPI]
            .onLoad()
            .then(Program.utils.display);
    });
});


Program.getInstance = () => {
    if (typeof Program.instance == "undefined") { 
        Program.instance = new Program();
    }

    return Program.instance;
}
