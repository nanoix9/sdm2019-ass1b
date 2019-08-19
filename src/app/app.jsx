import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    fetch('/users')
      .then((res) => {
        console.debug(res);
        res.json().then(users => {
          users.sort((a, b) => (a._id - b._id));
          this.setState({
            users
          });
        })
      });
  }

  render() {
    console.debug(this.state)
    return (
      <div>
        <h1>Docs from MongoDB</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
          {this.state.users.map(u => (
            <tr>
              <td>{u._id}</td>
              <td>{u.name}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;