export type Countries = Country[];

interface Country {
  name: string;
  people: People;
}

export type People = Person[];

interface Person {
  name: string;
  animals: Animals;
}

type Animals = Animal[];

interface Animal {
  name: string;
}
