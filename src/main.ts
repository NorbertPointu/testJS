import { count } from "./actions/count";
import { filter } from "./actions/filter";
import { Countries } from "./types/country-types";
import { displayRed, displayBold } from "./utils/display";
import { getActions } from "./utils/getActions";
import { ERROR_NO_ARGS } from "./utils/global";

export const main = (givenCountries: Countries, actionsInArgs: string[]) => {
  const actions = getActions(actionsInArgs);

  //Check passing actions
  if (!checkPassingActions(actions)) {
    return ERROR_NO_ARGS;
  }

  let result: Countries = [];
  if (actions.hasOwnProperty("filter")) {
    result = filter(givenCountries, actions["filter"]);
  } else {
    result = givenCountries;
  }

  if (actions.hasOwnProperty("count")) {
    result = count(result);
  }

  return result;
};

const checkPassingActions = (actions: object) => {
  const hasActions = Object.keys(actions).some((action) =>
    ["filter", "count"].includes(action)
  );
  
  if (!hasActions) {
    console.log(displayRed("Missing arguments!"));
    console.log(
      `This app has to be called with arguments ${displayBold(
        "--filter=<value>"
      )} or ${displayBold("--count")}`
    );
    console.log(
      `${displayBold(
        "--filter=pa"
      )} will return people with animal names matching the given filter 'pa'. This search is case sensitive`
    );
    console.log(
      `${displayBold(
        "--count"
      )} will display the number of items at the end of the name`
    );
  }
  return hasActions;
};
