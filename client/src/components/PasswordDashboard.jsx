import React from 'react';
import MyCredentials from './MyCredentials';
import SharedWithMe from './SharedWithMe';
import SharedWithOthers from './SharedWithOthers';
import Navbar from './Navbar';

class PasswordDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownCredentials: [],
      sharedWithMe: [],
      sharedWithOthers: [],
      userName: '',
      name: ''
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleShare = this.handleShare.bind(this);
  }

  handleDelete(event) {
    let newCredentials = this.state.ownCredentials;
    newCredentials.splice(event.target.id, 1);
    this.setState({ownCredentials: newCredentials});
  }

  handleShare(event) {
    let credential = this.state.ownCredentials[event.target.id];
    let recipient = prompt('Enter a username to share your credentials with');
    let newShare = {
      website: credential.website,
      username: recipient,
      password_id: credential.password_id,
      lender_user_id: credential.lender_user_id
    }
    let sharedWithOthers = this.state.sharedWithOthers;
    if (newShare.username !== '') {
      sharedWithOthers.push(newShare);
    }
    this.setState({sharedWithOthers});
  }

  componentWillMount() {
    let ownCredentials = [
      { website: 'google.com', username: 'johndoe@gmail.com', password_id: '#jknkjndsjk$SSD'},
      { website: 'facebook.com', username: 'johndoe@gmail.com', password_id: 'nnjnnnc#D'},
      { website: 'reddit.com', username: 'thejohndoe', password_id: '#)_2-==23D'},
      { website: 'wellsfargo.com', username: 'johndoebanks', password_id: 'iuh!@@22'},
      { website: 'netflix.com', username: 'johndoeandchill', password_id: '(*#$2k$SSD'},
      { website: 'play.hbogo.com', username: 'johndoewatchesgameofthrones', password_id: '23789$$SSD'}
    ]
    let sharedWithMe = [
      {website: 'youtube.com',username: 'macklemore299',password_id: '(*#$2k$SSD',lender_user_id: 'macklemore'},
      {website: 'hulu.com',username: 'lorenzo789',password_id: '23789$$SSD',lender_user_id: 'lorenzochello'}
    ]
    let sharedWithOthers = [
      {website: 'youtube.com',username: 'macklemore299',password_id: '(*#$2k$SSD',lender_user_id: 'macklemore'},
      {website: 'hulu.com',username: 'lorenzo789',password_id: '23789$$SSD',lender_user_id: 'lorenzochello'}
    ]
    let userName = "johndoe19"
    let name = "John Doe"

    this.setState({ownCredentials, sharedWithMe, sharedWithOthers, userName, name})
  }
  
  render() {
    return (
      <div>
        <Navbar userName={this.state.userName} name={this.state.name} />
        <div className="container">
          <div className="row justify-content-center">
            <MyCredentials myCredentials={this.state.ownCredentials} sharedWithOthers={this.state.sharedWithOthers} onDelete={this.handleDelete} onShare={this.handleShare} />
          </div>
          <hr />
          <div className="row justify-content-center">
            <SharedWithMe sharedWithMe={this.state.sharedWithMe} />
          </div>
          <hr />
          <div className="row justify-content-center">
            <SharedWithOthers sharedWithOthers={this.state.sharedWithOthers} />
          </div>
        </div>
      </div>
    );
  }
}

export default PasswordDashboard;
