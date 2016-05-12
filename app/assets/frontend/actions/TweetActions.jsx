import API from "../API"

export default {
  getAllTweets() {
    API.getAllTweets();
  },
  sendTweet(body) {
    API.createTweet(body);
  }
}
