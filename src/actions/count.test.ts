import { count } from "./count";
import { countriesShort } from "../tests/data-test";

describe("Count items", () => {
  test("should return correct counters when no filter on animals", () => {
    const result = count(countriesShort);

    const expectedResult = [
      {
        name: "France [2]",
        people: [
          { name: "Jean [2]", animals: [{ name: "Rex" }, { name: "Misty" }] },
          { name: "Marie [2]", animals: [{ name: "Buddy" }, { name: "Luna" }] },
        ],
      },
      {
        name: "USA [2]",
        people: [
          { name: "John [2]", animals: [{ name: "Max" }, { name: "Bella" }] },
          {
            name: "Emma [2]",
            animals: [{ name: "Charlie" }, { name: "Lucy" }],
          },
        ],
      },
      {
        name: "Japan [2]",
        people: [
          {
            name: "Hiroshi [2]",
            animals: [{ name: "Taro" }, { name: "Hana" }],
          },
          { name: "Yoko [2]", animals: [{ name: "Jiro" }, { name: "Sakura" }] },
        ],
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});
