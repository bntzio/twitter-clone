import React from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import { Link } from 'react-router';

let getAppState = () => {
	return { users: UserStore.getAll() };
}

export default class Follow extends React.Component {
	constructor(props) {
		super(props);
		this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserActions.getAllUsers();
    UserStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(getAppState());
  }
  followUser(userId) {
    UserActions.followUser(userId);
  }
  followClasses(following) {
    return "secondary-content btn-floating " + (following ? "green" : "grey");
  }
  render() {
  	let users = this.state.users.map( user => {
  		return (
  			<li key={user.id} className="collection-item avatar">
  				<img src={user.gravatar} className="circle" />
  				<span className="title">{user.name}</span>
          <a className={this.followClasses(user.following)} onClick={this.followUser.bind(this, user.id)}>
            <i className="material-icons">person_pin</i>
          </a>
  			</li>
  		);
  	})
    return(
      <div>
        <h3>Who to follow</h3>
        <ul className="collection">
        	{users}
        </ul>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
