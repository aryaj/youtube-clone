const GOOGLE_API_KEY = 'AIzaSyAdW4qKwrj6ZCpfuOyXpg-0fdkMOLEoIU4';

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;


export const YOUTUBE_SEARCH_API =
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const SEARCH_RESULT_API =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
    GOOGLE_API_KEY +
    "&q=";

export const OFFSET_LIVE_CHAT = 100;