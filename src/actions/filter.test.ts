import { data } from "../data/data";
import { filter } from "./filter";

describe("Filter on people with animals", () => {
  test("should return all people if no filter", () => {
    const result = filter(data, null);
    expect(result).toBe(data);
  });
  test("should return no people if filter on animals not matched", () => {
    const result = filter(data, "aaaaa");
    expect(result.length).toBe(0);
  });
  test("should return people with animals containing 'ry' in their name (order kept)", () => {
    const result = filter(data, "ry");
    // toEqual check the order of items
    expect(result).toEqual([
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lillie Abbott",
            animals: [
              {
                name: "John Dory",
              },
            ],
          },
        ],
      },
      {
        name: "Satanwi",
        people: [
          {
            name: "Anthony Bruno",
            animals: [
              {
                name: "Oryx",
              },
            ],
          },
        ],
      },
    ]);
  });
  test("should return people with animals containing characters with space", () => {
    const result = filter(data, "d D");
    // toEqual check if the order of items are the same
    expect(result).toEqual([
      {
        name: "Dillauti",
        people: [{ name: "Philip Murray", animals: [{ name: "Sand Dollar" }] }],
      },
      {
        name: "Tohabdal",
        people: [
          { name: "Owen Bongini", animals: [{ name: "African Wild Dog" }] },
          { name: "Linnie Lamb", animals: [{ name: "African Wild Dog" }] },
        ],
      },
      {
        name: "Uzuzozne",
        people: [
          { name: "Harold Patton", animals: [{ name: "Bearded Dragon" }] },
          { name: "Millie Lapini", animals: [{ name: "Bearded Dragon" }] },
          { name: "Georgia Hooper", animals: [{ name: "African Wild Dog" }] },
        ],
      },
      {
        name: "Satanwi",
        people: [
          { name: "Cora Howell", animals: [{ name: "African Wild Dog" }] },
          { name: "Dennis Franci", animals: [{ name: "Bearded Dragon" }] },
        ],
      },
    ]);
  });
});
