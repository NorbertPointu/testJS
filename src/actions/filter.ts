import { Countries, People } from "../types/country-types";

type Filter = (countries: Countries, searchChars: string | null) => Countries;

/**
 * Filter the list of countries with people who has any animal names contains chars passing in param
 * @param {Countries} countries - list of countries with people and animals
 * @param {string | null } searchChars - string to search or null to get all
 * @returns matched objects
 */
export const filter: Filter = (countries, searchChars) => {
  if (searchChars === null) {
    return countries;
  }

  const foundCountries: Countries = [];
  countries.forEach((country) => {
    const foundPeople: People = [];
    country.people.forEach((person) => {
      const foundAnimals = person.animals.filter(({ name }) =>
        name.includes(searchChars)
      );
      if (foundAnimals.length > 0) {
        foundPeople.push({
          name: person.name,
          animals: foundAnimals,
        });
      }
    });
    if (foundPeople.length > 0) {
      foundCountries.push({ name: country.name, people: foundPeople });
    }
  });

  return foundCountries;
};
