import { useSpeed, useScales } from "./state";

// Speed
const speedValueElm = document.getElementById(
  "speed-value"
) as HTMLOutputElement;
const speedInputElm = document.getElementById(
  "setting-speed-range"
) as HTMLInputElement;
const [speed, setSpeed] = useSpeed();

speedInputElm.setAttribute("value", speed.toString());
speedValueElm.innerText = speed.toString();

speedInputElm.addEventListener("input", (e) => {
  const value = (e.target as HTMLInputElement).value;
  speedValueElm.innerText = value;
  setSpeed(parseInt(value));
});

// Scale
const scaleListInputContainerElm = document.getElementById(
  "scale-list-input-container"
) as HTMLDivElement;
var innerHTMLOfScaleInputContainer: string = "";
const [scales, setScales] = useScales();
console.log(scales);

scales.forEach((scale) => {
  innerHTMLOfScaleInputContainer += `
          <div class="single-scale-input-container">
            <input type="checkbox" id="scale-${scale.name.toLowerCase()}-input" ${
    scale.status ? "checked" : ""
  }/>
            <label for="scale-${scale.name.toLowerCase()}-input">${
    scale.name
  }</label>
          </div>
  `;
});

scaleListInputContainerElm.innerHTML = innerHTMLOfScaleInputContainer;

export {};
