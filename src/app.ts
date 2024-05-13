import { count } from "./actions/count";
import { filter } from "./actions/filter";
import { data } from "./data/data";
import { Countries } from "./types/country-types";
import { getActions } from "./utils/getActions";
import { inspect } from "node:util";

const app = () => {
  const actionsInArgs = process.argv.splice(2);
  const actions = getActions(actionsInArgs);

  //Check passing actions
  if (!checkPassingActions(actions)) {
    return -1;
  }

  let result: Countries = [];
  if (actions.hasOwnProperty("filter")) {
    result = filter(data, actions["filter"]);
  }

  if (actions.hasOwnProperty("count")) {
    result = count(result);
  }

  console.log(
    inspect(result, {
      depth: Infinity,
      breakLength: 60,
      colors: true,
    })
  );
};

const checkPassingActions = (actions: object) => {
  const hasActions = Object.keys(actions).some((action) =>
    ["filter", "count"].includes(action)
  );
  if (!hasActions) {
    console.log("\x1B[31mMissing arguments!\x1B[39m");
    console.log(
      "This app has to be called with arguments \x1B[1m--filter=<value> \x1B[0mor\x1B[1m --count\x1B[0m"
    );
    console.log(
      "\x1B[1m--filter=pa \x1B[0mwill return people with animal names matching the given filter 'pa'. This search is case sensitive"
    );
    console.log(
      "\x1B[1m--count\x1B[0m will display the number of items at the end of the name",
      "\x1B[39m"
    );
    return false;
  }
  return true;
};

app();
