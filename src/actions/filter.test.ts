import { filter } from "./filter";
import { countriesLong } from "../tests/data-test";

describe("Filter on people with animals", () => {
  test("should return all people if no filter", () => {
    const result = filter(countriesLong, null);
    expect(result).toBe(countriesLong);
  });
  test("should return no people if filter on animals not matched", () => {
    const result = filter(countriesLong, "aaaaa");
    expect(result.length).toBe(0);
  });
  test("should return people with animals containing 'na' in their name (order kept)", () => {
    const result = filter(countriesLong, "na");
    const expectedResult = [
      {
        name: "France",
        people: [{ name: "Marie", animals: [{ name: "Luna" }] }],
      },
      {
        name: "Japan",
        people: [{ name: "Hiroshi", animals: [{ name: "Hana" }] }],
      },
      {
        name: "Italy",
        people: [
          { name: "Giovanni", animals: [{ name: "Luna" }, { name: "Nina" }] },
          { name: "Maria", animals: [{ name: "Luna" }] },
        ],
      },
      {
        name: "Spain",
        people: [{ name: "Carlos", animals: [{ name: "Luna" }] }],
      },
    ];

    // toEqual check the order of items
    expect(result).toEqual(expectedResult);
  });

  test("should return people with animals containing characters with space", () => {
    const result = filter(countriesLong, " Di");
    const expectedResult = [
      {
        name: "France",
        people: [{ name: "Pierre", animals: [{ name: "Sam Dit" }] }],
      },
      {
        name: "USA",
        people: [{ name: "Emma", animals: [{ name: "Daisy Dit" }] }],
      },
    ];

    // toEqual check if the order of items are the same
    expect(result).toEqual(expectedResult);
  });
});
