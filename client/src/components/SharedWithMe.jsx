import React from 'react';
import Credentials from './Credentials';

class SharedWithMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sharedWithMe: [this.props.sharedWithMe]
    }
  }
  render() {
    return (
      <span className="col">
        <h3>Shared With Me</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Website</th>
              <th>UserName</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sharedWithMe[0].map((credential, idx) =>
              <Credentials key={idx} id={idx} credential={credential} />
            )}  
          </tbody>
        </table>
      </span>
    );
  }
}

export default SharedWithMe;
