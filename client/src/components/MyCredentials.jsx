import React from 'react';
import Credentials from './Credentials';

class MyCredentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCredentials: [this.props.myCredentials],
      sharedWithOthers: [this.props.sharedWithOthers]
    }
  
  }

  render() {
    return (
      <span className="col">
        <h3>My Credentials</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Website</th>
              <th>UserName</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.myCredentials[0].map((credential, idx) =>
              <Credentials key={idx} id={idx} credential={credential} onDelete={this.props.onDelete} onShare={this.props.onShare}/>
            )}  
          </tbody>
        </table>
      </span>
    );
  }
}

export default MyCredentials;
