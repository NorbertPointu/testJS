import { getActions } from "./utils/getActions";

const app = () => {
  const actions = getActions(process.argv.splice(2));
  console.log("actions", JSON.stringify(actions));
};

console.log(app());
