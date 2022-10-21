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
const [getScales, setScale] = useScales();

const renderScaleList = () => {
  var innerHTMLOfScaleInputContainer: string = "";
  getScales().forEach((scale) => {
    innerHTMLOfScaleInputContainer += `
  <div class="single-scale-input-container">
    <input type="checkbox" name="${
      scale.name
    }" class="test" id="scale-${scale.name.toLowerCase()}-input" ${
      scale.status ? "checked" : ""
    } oninput='updateScale(this)'/>
    <label for="scale-${scale.name.toLowerCase()}-input">${scale.name}</label>
  </div>
  `;
  });
  scaleListInputContainerElm.innerHTML = innerHTMLOfScaleInputContainer;
};
renderScaleList();

function updateScale(checkbox: HTMLInputElement) {
  const name: scaleType["name"] = checkbox.name as scaleType["name"];
  const checked: boolean = checkbox.checked;
  if (
    getScales().filter((scale) => scale.status).length !== 1 ||
    (getScales().filter((scale) => scale.status).length === 1 && checked)
  ) {
    const newScale = getScales().map((scale) =>
      scale.name === name ? { name: name, status: checked } : scale
    );
    setScale(newScale);
  } else if (
    getScales().filter((scale) => scale.status).length === 1 &&
    !checked
  ) {
    renderScaleList();
  }
}
(<any>window).updateScale = updateScale;

// save button
const saveButton = document.getElementById("back-button") as HTMLButtonElement;
saveButton.addEventListener("click", () => {
  history.back();
});

export {};
