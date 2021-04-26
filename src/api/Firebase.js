import axios from "axios";

export default axios.create({
  baseURL: "https://todolist-react-1e9f6-default-rtdb.firebaseio.com/",
});
