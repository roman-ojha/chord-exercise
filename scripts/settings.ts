import { useSpeed, useScales, scaleType } from "./state";

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
const [getScales, setScale] = useScales();

getScales().forEach((scale) => {
  innerHTMLOfScaleInputContainer += `
          <div class="single-scale-input-container">
            <input type="checkbox" name="${
              scale.name
            }" class="test" id="scale-${scale.name.toLowerCase()}-input" ${
    scale.status ? "checked" : ""
  } oninput='changeScale(this)'/>
            <label for="scale-${scale.name.toLowerCase()}-input">${
    scale.name
  }</label>
          </div>
  `;
});

function changeScale(checkbox: HTMLInputElement) {
  const name: scaleType["name"] = checkbox.name as scaleType["name"];
  const checked: boolean = checkbox.checked;
  const newScale = getScales().map((scale) =>
    scale.name === name ? { name: name, status: checked } : scale
  );
  setScale(newScale);
}
(<any>window).changeScale = changeScale;

scaleListInputContainerElm.innerHTML = innerHTMLOfScaleInputContainer;

export { changeScale };
