import React from 'react'

class Page1 extends React.Component {
  render() {
    const { users, onDelete } = this.props;

    return (
      <>
        <h2>This is user details</h2>

        {users.map(({ name }, index) => (
          <p key={index}>
            {name}
            <button onClick={() => onDelete(index)}>Delete</button>
          </p>
        ))}
      </>
    );
  }
}

export default Page1;
