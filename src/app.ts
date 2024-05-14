import { data } from "./data/data";
import { main } from "./main";
import { inspect } from "node:util";
import { ERROR_NO_ARGS } from "./utils/global";

const actionsInArgs = process.argv.splice(2);

const result = main(data, actionsInArgs);

if (result !== ERROR_NO_ARGS) {
  console.log(
    inspect(result, {
      depth: Infinity,
      breakLength: 60,
      colors: true,
    })
  );
}
