import { data } from "./data/data";
import { main } from "./main";
import { inspect } from "node:util";

const actionsInArgs = process.argv.splice(2);

const result = main(data, actionsInArgs);

if (result !== -1) {
  console.log(
    inspect(result, {
      depth: Infinity,
      breakLength: 60,
      colors: true,
    })
  );
}
