import React from 'react';

class Froms extends React.Component {
  constructor(props) {
    super(props);

    this.State = {
      email: '',
      comment: '',
      topic: ''
    };
  }
  ChangeemailHandle = event => {
    this.setState({ email: event.target.value });
  };

  // ChangecommentHandle = event => {
  //   this.setState({ comment: event.target.value });
  // };

  handleSubmit = event => {
    alert(`${this.State.email}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.State.email}
              onChange={this.ChangeemailHandle}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Froms;
