import { getActions } from "./getActions";

describe("Make actions accoring passing arguments in array", () => {
  test("should return empty object if no action", () => {
    const result = getActions([]);
    expect(result).toEqual({});
  });

  test("should return filter action with its value", () => {
    const result = getActions(["--filter=abc"]);
    expect(result).toEqual({ filter: "abc" });
  });

  test("should return cumulate actions", () => {
    const result = getActions(["--filter=abc", "--count"]);
    expect(result).toEqual({ filter: "abc", count: "" });
  });

  test("should return only actions", () => {
    const result = getActions(["--filter=def", "-o"]);
    expect(result).toEqual({ filter: "def" });
  });
});
