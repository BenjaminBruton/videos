import axios from "axios";

const KEY = "AIzaSyCWcs6GTrfsEPm71eh2VBJKQSsIHLEFb5o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
