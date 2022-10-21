import {
  useSpeed,
  useScales,
  Scale,
  useScaleType,
  TypeOfScale,
  useScaleAccidentals,
  Accidentals,
} from "./state";

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
  var innerHtml: string = "";
  getScales().forEach((scale) => {
    innerHtml += `
  <div class="single-scale-input-container">
    <input type="checkbox" name="${
      scale.name
    }" id="scale-${scale.name.toLowerCase()}-input" ${
      scale.status ? "checked" : ""
    } oninput='updateScale(this)'/>
    <label for="scale-${scale.name.toLowerCase()}-input">${scale.name}</label>
  </div>
  `;
  });
  scaleListInputContainerElm.innerHTML = innerHtml;
};
renderScaleList();

function updateScale(checkbox: HTMLInputElement) {
  const name: Scale["name"] = checkbox.name as Scale["name"];
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

// Scale type
const scaleTypeListInputContainer = document.getElementById(
  "scale-type-list-input-container"
) as HTMLDivElement;
const [getScaleType, setScaleType] = useScaleType();

const renderScaleTypeList = () => {
  var innerHtml: string = "";
  getScaleType().forEach((scaleType) => {
    innerHtml += `
  <div class="single-scale-type-input-container">
    <input type="checkbox" name="${
      scaleType.name
    }" id="scale-type-${scaleType.name.toLowerCase()}-input" ${
      scaleType.status ? "checked" : ""
    } oninput='updateScaleType(this)'/>
    <label for="scale-type-${scaleType.name.toLowerCase()}-input">${
      scaleType.name
    }</label>
  </div>
  `;
  });
  scaleTypeListInputContainer.innerHTML = innerHtml;
};
renderScaleTypeList();

function updateScaleType(checkbox: HTMLInputElement) {
  const name: TypeOfScale["name"] = checkbox.name as TypeOfScale["name"];
  const checked: boolean = checkbox.checked;
  if (
    getScaleType().filter((scale) => scale.status).length !== 1 ||
    (getScaleType().filter((scale) => scale.status).length === 1 && checked)
  ) {
    const newScale = getScaleType().map((scale) =>
      scale.name === name ? { name: name, status: checked } : scale
    );
    setScaleType(newScale);
  } else if (
    getScaleType().filter((scale) => scale.status).length === 1 &&
    !checked
  ) {
    renderScaleTypeList();
  }
}
(<any>window).updateScaleType = updateScaleType;

// Scale Accidentals
const scaleAccidentalListInputContainer = document.getElementById(
  "scale-accidentals-list-input-container"
) as HTMLDivElement;
const [getScaleAccidentals, setScaleAccidentals] = useScaleAccidentals();

const renderScaleAccidentalsList = () => {
  var innerHtml: string = "";
  getScaleAccidentals().forEach((scaleAccidental) => {
    innerHtml += `
  <div class="single-scale-accidental-input-container">
    <input type="checkbox" name="${
      scaleAccidental.name
    }" id="scale-accidental-${scaleAccidental.name.toLowerCase()}-input" ${
      scaleAccidental.status ? "checked" : ""
    } oninput='updateScaleAccidentals(this)'/>
    <label for="scale-accidental-${scaleAccidental.name.toLowerCase()}-input">${
      scaleAccidental.name
    }</label>
  </div>
  `;
  });
  scaleAccidentalListInputContainer.innerHTML = innerHtml;
};
renderScaleAccidentalsList();

function updateScaleAccidentals(checkbox: HTMLInputElement) {
  const name: Accidentals["name"] = checkbox.name as Accidentals["name"];
  const checked: boolean = checkbox.checked;
  if (
    getScaleAccidentals().filter((scale) => scale.status).length !== 1 ||
    (getScaleAccidentals().filter((scale) => scale.status).length === 1 &&
      checked)
  ) {
    const newAccidentals = getScaleAccidentals().map((scale) =>
      scale.name === name ? { name: name, status: checked } : scale
    );
    setScaleAccidentals(newAccidentals);
  } else if (
    getScaleAccidentals().filter((scale) => scale.status).length === 1 &&
    !checked
  ) {
    renderScaleAccidentalsList();
  }
}
(<any>window).updateScaleAccidentals = updateScaleAccidentals;

// save button
const saveButton = document.getElementById("back-button") as HTMLButtonElement;
saveButton.addEventListener("click", () => {
  history.back();
});

export {};
