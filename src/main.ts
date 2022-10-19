const scaleElm = document.getElementById("scale") as HTMLHeadingElement;
const scaleType = document.getElementById("scale-type") as HTMLHeadingElement;
const scaleAccidental = document.getElementById(
  "accidentals"
) as HTMLHeadElement;

const scales = ["A", "B", "C", "D", "E", "F", "G"];
const types = ["Major", "Minor"];
const accidentals = ["", "#", "♭"];

const chooseRandomScale = (): {
  scale: string;
  type: string;
  accidentals: string;
} => {
  return {
    scale: scales[Math.floor(Math.random() * scales.length)],
    type: types[Math.floor(Math.random() * types.length)],
    accidentals: accidentals[Math.floor(Math.random() * accidentals.length)],
  };
};

const start = () => {
  const changeScale = setInterval(() => {
    const getRandomScale = chooseRandomScale();
  }, 2000);
};

export {};
