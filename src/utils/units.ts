export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Form basic sentences, greet people",
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
    tiles: [
      { type: "star", description: "Form basic sentences" },
      { type: "book", description: "Good morning" },
      { type: "star", description: "Greet people" },
      { type: "treasure" },
      { type: "book", description: "A date" },
      { type: "trophy", description: "Unit 1 review" },
    ],
  },
  {
    unitNumber: 2,
    description: "Get around in a city",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
    tiles: [
      { type: "fast-forward", description: "Get around in a city" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "One thing" },
      { type: "treasure" },
      { type: "star", description: "Get around in a city" },
      { type: "book", description: "A very big family" },
      { type: "star", description: "Greet people" },
      { type: "book", description: "The red jacket" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    description: "Order food and drink",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      { type: "fast-forward", description: "Order food and drink" },
      { type: "book", description: "The passport" },
      { type: "star", description: "Order food and drinks" },
      { type: "treasure" },
      { type: "book", description: "The honeymoon" },
      { type: "star", description: "Get around in a city" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "Doctor Eddy" },
      { type: "trophy", description: "Unit 3 review" },
    ],
  },
  {
    unitNumber: 4,
    description: "Talk about your family",
    backgroundColor: "bg-[#ffb900]",
    textColor: "text-[#ffb900]",
    borderColor: "border-[#cc9400]",
    tiles: [
      { type: "star", description: "Talk about your family" },
      { type: "book", description: "My parents" },
      { type: "star", description: "Relatives" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "Our children" },
      { type: "trophy", description: "Unit 4 review" },
    ],
  },
  {
    unitNumber: 5,
    description: "Shopping and prices",
    backgroundColor: "bg-[#ff4b4b]",
    textColor: "text-[#ff4b4b]",
    borderColor: "border-[#cc3a3a]",
    tiles: [
      { type: "fast-forward", description: "Shopping and prices" },
      { type: "book", description: "At the market" },
      { type: "star", description: "How much is it?" },
      { type: "treasure" },
      { type: "book", description: "The souvenir" },
      { type: "star", description: "Numbers and prices" },
      { type: "trophy", description: "Unit 5 review" },
    ],
  },
  {
    unitNumber: 6,
    description: "Make plans and appointments",
    backgroundColor: "bg-[#0077ff]",
    textColor: "text-[#0077ff]",
    borderColor: "border-[#005fcc]",
    tiles: [
      { type: "star", description: "Make plans" },
      { type: "book", description: "The calendar" },
      { type: "star", description: "Set appointments" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "A busy day" },
      { type: "trophy", description: "Unit 6 review" },
    ],
  },
  {
    unitNumber: 7,
    description: "Describe people and things",
    backgroundColor: "bg-[#a4cf00]",
    textColor: "text-[#a4cf00]",
    borderColor: "border-[#7fa200]",
    tiles: [
      { type: "star", description: "Describe people" },
      { type: "book", description: "The red shoes" },
      { type: "star", description: "Describe objects" },
      { type: "treasure" },
      { type: "book", description: "Tall or short?" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 7 review" },
    ],
  },
  {
    unitNumber: 8,
    description: "Talk about daily routines",
    backgroundColor: "bg-[#ff7b00]",
    textColor: "text-[#ff7b00]",
    borderColor: "border-[#cc6200]",
    tiles: [
      { type: "fast-forward", description: "Daily routines" },
      { type: "book", description: "In the morning" },
      { type: "star", description: "Your day" },
      { type: "treasure" },
      { type: "book", description: "After work" },
      { type: "star", description: "Everyday activities" },
      { type: "trophy", description: "Unit 8 review" },
    ],
  },
  {
    unitNumber: 9,
    description: "Express likes and dislikes",
    backgroundColor: "bg-[#ff66b2]",
    textColor: "text-[#ff66b2]",
    borderColor: "border-[#cc528f]",
    tiles: [
      { type: "star", description: "Likes and dislikes" },
      { type: "book", description: "Favorite food" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "treasure" },
      { type: "book", description: "Hobbies" },
      { type: "star", description: "Talk about preferences" },
      { type: "trophy", description: "Unit 9 review" },
    ],
  },
  {
    unitNumber: 10,
    description: "Travel and directions",
    backgroundColor: "bg-[#00d2ff]",
    textColor: "text-[#00d2ff]",
    borderColor: "border-[#00a7cc]",
    tiles: [
      { type: "fast-forward", description: "Travel and directions" },
      { type: "book", description: "The map" },
      { type: "star", description: "Ask for directions" },
      { type: "treasure" },
      { type: "book", description: "On the train" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 10 review" },
    ],
  },
];
