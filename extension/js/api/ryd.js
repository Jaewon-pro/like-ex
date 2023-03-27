// Return Youtube Dislike API

Program.apiController["ryd"] = {
    name : "Return Youtube Dislike API",
    description : "More information are in https://returnyoutubedislikeapi.com/",
}

Program.apiController["ryd"].api = (videoId) => {
    return `https://returnyoutubedislikeapi.com/Votes?videoId=${videoId}`;
}

Program.apiController["ryd"].fetchGetRqs = async (videoId) => {
    const url = Program.apiController["ryd"].api(videoId);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        throw error;
    }
}

Program.apiController["ryd"].onLoad = async () => {
    const vid = getVideoId();
    if (vid === null) { return null; }
    try {
        const data = await Program.apiController["ryd"].fetchGetRqs(vid);
        //console.log(`${vid}: The number of dislikes is: ${data.dislikes}`);
        return data;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
        throw error;
    }
};

// Response
// {
//     "id": "kxOuG8jMIgI",
//     "dateCreated": "2021-12-20T12:25:54.418014Z",
//     "likes": 27326,
//     "dislikes": 498153,
//     "rating": 1.212014408444885,
//     "viewCount": 3149885,
//     "deleted": false
// }
