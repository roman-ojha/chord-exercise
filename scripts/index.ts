import { getSpeed } from "./state";

const scaleElm = document.getElementById("scale") as HTMLHeadingElement;
const scaleType = document.getElementById("scale-type") as HTMLHeadingElement;
const scaleAccidental = document.getElementById(
  "accidentals"
) as HTMLHeadElement;
const startStopButton = document.getElementById(
  "start-stop"
) as HTMLButtonElement;
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

const changeScaleDom = (): void => {
  const getRandomScale = chooseRandomScale();
  scaleElm.innerText = getRandomScale.scale;
  scaleAccidental.innerText = getRandomScale.accidentals;
  scaleType.innerText = getRandomScale.type;
};

let changeScale: number;
let started: boolean = false;

const start = (): void => {
  console.log(getSpeed());
  changeScale = setInterval(changeScaleDom, getSpeed());
  startStopButton.innerText = "Stop";
  started = true;
};

const stop = (): void => {
  clearInterval(changeScale);
  startStopButton.innerText = "Start";
  started = false;
};

startStopButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (started) {
    stop();
  } else {
    start();
  }
});

export {};
