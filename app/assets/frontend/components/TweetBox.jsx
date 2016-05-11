export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="row">
        <form>
          <div className="input-field">
            <textarea className="materialize-textarea" />
            <label>What's happening?</label>
            <button className="btn right">Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}
