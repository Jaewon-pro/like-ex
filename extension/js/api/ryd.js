// Return Youtube Dislike API
//import { Program } from '..main.js';

Program.apiController["ryd"] = {

    name : "Return Youtube Dislike API",
    discription : "More informations are in https://returnyoutubedislikeapi.com/",
    //kxOuG8jMIgI
}

Program.apiController["ryd"].api = (videoId) => {
    return `https://returnyoutubedislikeapi.com/Votes?videoId=${videoId}`;
}


Program.apiController["ryd"].fetchGetRqs = async (videoId) => {
    console.log(videoId);
    const url = Program.apiController["ryd"].api(videoId);
    const response = await fetch(url);
    const data = await response.json();
    return Promise.resolve(data);
}


// Program.apiController["ryd"].fetchPostRqs = async (videoId) => {
//     const url = Program.apiController["ryd"].api(videoId);
//     return fetch("https://returnyoutubedislikeapi.com/Votes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: `videoId=${videoId}`
//       })
//       .then(response => response.text());
//       //.then(data => Promise.resolve(data));
// };


Program.apiController["ryd"].onLoad = () => {
    console.log("api onload");
    Program.apiController["ryd"].fetchGetRqs(getVideoId()).then(data =>
       console.log(`The number of dislikes is: ${data.dislikes}`)
    )
};



//Program.api["ryd"] = Program.apiController["ryd"];


// Usage :
// Program.apiController["ryd"].fetchRsp("DSFSDFDF").then(data => {
//   console.log(`The number of dislikes is: ${data.dislikes}`);
// });

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
