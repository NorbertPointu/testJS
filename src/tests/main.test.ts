import { main } from "../main";
import { Countries } from "../types/country-types";
import { countriesLong } from "./data-test";

describe("main", () => {
  test("should return -1 if no action", () => {
    const result = main(countriesLong, []);
    expect(result).toEqual(-1);
  });

  test("should return 2 people when filtered on Lucy", () => {
    const result = main(countriesLong, ["--filter=Lucy"]);
    expect(result).toEqual([
      { name: "USA", people: [{ name: "John", animals: [{ name: "Lucy" }] }] },
      {
        name: "Spain",
        people: [{ name: "Maria", animals: [{ name: "Lucy" }] }],
      },
    ]);
  });

  test("should return 2 people with counter when filtered on Lucy", () => {
    const result = main(countriesLong, ["--count", "--filter=Luna"]);
    const expectedResult = [
      {
        name: "France [1]",
        people: [{ name: "Marie [1]", animals: [{ name: "Luna" }] }],
      },
      {
        name: "Italy [2]",
        people: [
          { name: "Giovanni [1]", animals: [{ name: "Luna" }] },
          { name: "Maria [1]", animals: [{ name: "Luna" }] },
        ],
      },
      {
        name: "Spain [1]",
        people: [{ name: "Carlos [1]", animals: [{ name: "Luna" }] }],
      },
    ];
    expect(result).toEqual(expectedResult);
  });
  test("should return all with counter", () => {
    const result = main(countriesLong, ["--count"]) as Countries;
    const italy = result.find(({ name }) => name.startsWith("Italy"));

    expect(italy?.name).toBe("Italy [3]");

    const giovanni = italy?.people.find(({ name }) =>
      name.startsWith("Giovanni")
    );
    expect(giovanni?.name).toBe("Giovanni [8]");
  });
});
