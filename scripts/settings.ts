import { getSpeed, setSpeed } from "./state";

const speedValueElm = document.getElementById(
  "speed-value"
) as HTMLOutputElement;
const speedInputElm = document.getElementById(
  "setting-speed-range"
) as HTMLInputElement;

speedValueElm.innerText = speedInputElm.value;
speedInputElm.setAttribute("value", getSpeed().toString());

speedInputElm.addEventListener("input", (e) => {
  const value = (e.target as HTMLInputElement).value;
  speedValueElm.innerText = value;
  setSpeed(parseInt(value));
});

export {};
