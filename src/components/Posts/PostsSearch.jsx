import { Component } from "react";

import { Button } from "../Button";

export class PostsSearch extends Component {
  state = {
    search: "",
  };

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleSumbit = () => {
    this.props.onSubmitSearch(this.state.search)
    console.log();
  };

  render() {
    const { search } = this.state;
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          value={search}
          onChange={this.handleChangeSearch}
          className="form-control"
          placeholder="Type to search..."
        />
        <Button onClick={this.handleSumbit}>Search</Button>
      </div>
    );
  }
}
