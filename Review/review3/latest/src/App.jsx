import React from 'react'
import Page1 from './page1'

class App extends React.Component {
  state = {
    users: [
      { name: "harsh" },
      { name: "shreyash" },
      { name: "sarthak" },
    ]
  };

  handleDelete = (index) => {
    this.setState(({ users }) => ({
      users: users.filter((_, i) => i !== index)
    }));
  };

  render() {
    const { users } = this.state;

    return (
      <>
        <h1>Hello</h1>
        {/* <button>click me</button> */}
        <Page1 users={users} onDelete={this.handleDelete} />
        
      </>
    );
  }
}

export default App;
