import { Countries } from "../types/country-types";

/**
 * Add to the name of each items the number of sub items (people or animals)
 * @param {Countries} countries - list of countries with people and animals
 * @returns object with counter of their items
 */

type Count = (countries: Countries) => Countries;

export const count: Count = (countries) =>
  countries.map(({ name, people }) => ({
    name: addCountToName(name, people.length),
    people: people.map(({ name, animals }) => ({
      name: addCountToName(name, animals.length),
      animals,
    })),
  }));

const addCountToName = (name: string, counter: number) =>
  `${name} [${counter}]`;
