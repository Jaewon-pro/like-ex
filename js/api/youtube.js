//  .apiController["youtubeMetric"] = {
//     name : 'Youtube Metaric',
//     api : "https://www.youtube.com/watch?v=__VIDEOID__&app=desktop",
//     helperMode : true,
//     cfgDefault : {enabled : false, enabledAsHelper : true},
// };

//  .apiController["youtubeMetric"].parsePage = (RawHtmlString) => {
//     const domParser = new DOMParser();
//     const doc = domParser.parseFromString(RawHtmlString, "text/html");

//     let datas = {likes : false, dislikes : false, count : false, source : "Rating", likesDisabled : false};
//     const scripts = doc.getElementById("SCRIPTS"), counter = 





    

// };

// // const API_KEY = "YOUR_API_KEY";
// // const videoId = "VIDEO_ID";

// // fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`)
// //   .then(response => response.json())
// //   .then(data => {
// //     const dislikes = data.items[0].statistics.dislikeCount;
// //     console.log(`The number of dislikes for this video is ${dislikes}.`);
// //   })
// //   .catch(error => console.error(error));