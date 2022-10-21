import {
  useSpeed,
  useScales,
  useScaleType,
  useScaleAccidentals,
} from "./state.js";

const scaleElm = document.getElementById("scale") as HTMLHeadingElement;
const scaleTypeElm = document.getElementById(
  "scale-type"
) as HTMLHeadingElement;
const scaleAccidental = document.getElementById(
  "accidentals"
) as HTMLHeadElement;
const startStopButton = document.getElementById(
  "start-stop"
) as HTMLButtonElement;
const [getScales] = useScales();
const [getScaleType] = useScaleType();
// const accidentals = ["", "#", "♭"];
const [getAccidentals] = useScaleAccidentals();
const [speed] = useSpeed();
scaleElm.innerText = getScales().filter((scale) => scale.status)[0].name;
scaleTypeElm.innerText = getScaleType().filter(
  (scaleType) => scaleType.status
)[0].name;

const scaleAccidentalInnerText = getAccidentals().filter(
  (accidental) => accidental.status
)[0].name;

scaleAccidental.innerText =
  scaleAccidentalInnerText === "' '" ? "" : scaleAccidentalInnerText;
const chooseRandomScale = (): {
  scale: string;
  type: string;
  accidentals: string;
} => {
  const allowedScale = getScales().filter((scale) => scale.status);
  const allowedScaleType = getScaleType().filter(
    (scaleType) => scaleType.status
  );
  const allowedAccidentals = getAccidentals().filter(
    (accidental) => accidental.status
  );

  const randomAccidental =
    allowedAccidentals[Math.floor(Math.random() * allowedAccidentals.length)]
      .name;
  return {
    scale: allowedScale[Math.floor(Math.random() * allowedScale.length)].name,
    type: allowedScaleType[Math.floor(Math.random() * allowedScaleType.length)]
      .name,
    accidentals: randomAccidental === "' '" ? "" : randomAccidental,
  };
};

const changeScaleDom = (): void => {
  const getRandomScale = chooseRandomScale();
  scaleElm.innerText = getRandomScale.scale;
  scaleAccidental.innerText = getRandomScale.accidentals;
  scaleTypeElm.innerText = getRandomScale.type;
};

let changeScale: number;
let started: boolean = false;

const start = (): void => {
  changeScale = setInterval(changeScaleDom, speed);
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
