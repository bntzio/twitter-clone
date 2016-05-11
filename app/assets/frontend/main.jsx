import TweetBox from "./components/TweetBox"
import TweetList from "./components/TweetList"

let mockTweets = [
  { id: 1, name: 'Sebastian Benitez', body: 'My #FirstTweet' },
  { id: 2, name: 'Sebastian Benitez', body: 'My #FirstTweet' },
  { id: 3, name: 'Sebastian Benitez', body: 'My #FirstTweet' }
];

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetList tweets={mockTweets} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
     <Main />,
     document.getElementById('react')
  );
};

$(documentReady);
