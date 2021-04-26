import React from "react";
import { Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class tasklist extends React.Component {
  render() {
    const list = this.props.tasks.map((task, index) => {
      const toggleShowA = () => this.props.removelement(index);
      return (
        <div key={index} className="mt-1">
          <Toast onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Task - {index + 1}</strong>
              <small>At {task[1]}</small>
            </Toast.Header>
            <Toast.Body> {task[0]}</Toast.Body>
          </Toast>
        </div>
      );
    });

    return <div>{list}</div>;
  }
}

export default tasklist;
