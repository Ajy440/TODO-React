import React from "react";
import ReactDom from "react-dom";
import { Button, Jumbotron } from "react-bootstrap";
import Tasklist from "./tasklist";
import axios from "./api/Firebase";
import Noty from "./Noty";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tasks: [],
      msg: false,
    };
  }

  componentDidMount() {
    axios.get("data.json").then((response) => {
      this.setState({ tasks: response.data });
    });
  }

  handlechange = (event) => {
    this.setState({ value: event.target.value });
  };

  removelement = (val) => {
    const temp = this.state.tasks;
    temp.splice(val, 1);
    axios.put("/data.json", temp);
    this.setState({ tasks: temp });
  };

  handlesubmit = (event) => {
    event.preventDefault();
    if (this.state.value.length < 1) {
      //By manish start
      this.setState({ msg: "abe length bada" });
      //bymanish end
      return 0;
    }
    this.setState({ err: false });
    const data = [
      this.state.value,
      new Date().toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      }),
    ];
    const data1 = this.state.tasks.concat([data]);
    axios.put("/data.json", data1).then((Response) => {});
    this.setState({ tasks: data1 });
  };

  render() {
    return (
      <div>
        {this.state.msg ? <Noty msg={this.state.msg} /> : null}
        <Jumbotron>
          <h1>Todolist!</h1>
          <p>To add a task, type the task name and press 'Add' button.</p>
          <form onSubmit={this.handlesubmit}>
            <label>
              Task name:&nbsp;
              <input
                type="text"
                name="taskname"
                value={this.state.value}
                onChange={this.handlechange}
              />
            </label>
            &nbsp;
            <Button variant="primary" type="submit">
              Add
            </Button>
          </form>
        </Jumbotron>
        <div className="ml-3">
          <Tasklist tasks={this.state.tasks} removelement={this.removelement} />
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
