export interface Scale {
  name: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  status: boolean;
}

export interface TypeOfScale {
  name: "Major" | "Minor";
  status: boolean;
}

export interface Accidentals {
  name: "' '" | "#" | "♭";
  status: boolean;
}

interface state {
  speed: number;
  scales: Scale[];
  scaleType: TypeOfScale[];
  accidentals: Accidentals[];
}

const nameOfState = "appState";

const initState = () => {
  const state: state | null = JSON.parse(localStorage.getItem(nameOfState)!);
  if (!state) {
    localStorage.setItem(
      nameOfState,
      JSON.stringify(<state>{
        speed: 500,
        scales: [
          {
            name: "A",
            status: true,
          },
          {
            name: "B",
            status: true,
          },
          {
            name: "C",
            status: true,
          },
          {
            name: "D",
            status: true,
          },
          {
            name: "E",
            status: true,
          },
          {
            name: "F",
            status: true,
          },
          {
            name: "G",
            status: true,
          },
        ],
        scaleType: [
          {
            name: "Major",
            status: true,
          },
          {
            name: "Minor",
            status: true,
          },
        ],
        accidentals: [
          {
            name: "' '",
            status: true,
          },
          {
            name: "#",
            status: true,
          },
          {
            name: "♭",
            status: true,
          },
        ],
      })
    );
  }
};
initState();

const useSpeed = (): [number, (newSpeed: number) => void] => {
  const getSpeed = (): number => {
    const speed: state["speed"] = (
      JSON.parse(localStorage.getItem(nameOfState)!) as state
    ).speed;
    return speed;
  };

  const setSpeed = (newSpeed: number) => {
    const state: state = JSON.parse(
      localStorage.getItem(nameOfState)!
    ) as state;
    localStorage.setItem(
      nameOfState,
      JSON.stringify(<state>{
        ...state,
        speed: newSpeed,
      })
    );
  };
  return [getSpeed(), setSpeed];
};

const useScales = (): [
  () => state["scales"],
  (newState: state["scales"]) => void
] => {
  const getScale = (): state["scales"] => {
    const scale: state["scales"] = (
      JSON.parse(localStorage.getItem(nameOfState)!) as state
    ).scales;
    return scale;
  };

  const setScale = (newState: state["scales"]) => {
    const state: state = JSON.parse(
      localStorage.getItem(nameOfState)!
    ) as state;
    localStorage.setItem(
      nameOfState,
      JSON.stringify(<state>{
        ...state,
        scales: newState,
      })
    );
  };
  return [getScale, setScale];
};

const useScaleType = (): [
  () => state["scaleType"],
  (newState: state["scaleType"]) => void
] => {
  const getScaleType = (): state["scaleType"] => {
    const scale: state["scaleType"] = (
      JSON.parse(localStorage.getItem(nameOfState)!) as state
    ).scaleType;
    return scale;
  };

  const setScaleType = (newState: state["scaleType"]) => {
    const state: state = JSON.parse(
      localStorage.getItem(nameOfState)!
    ) as state;
    localStorage.setItem(
      nameOfState,
      JSON.stringify(<state>{
        ...state,
        scaleType: newState,
      })
    );
  };
  return [getScaleType, setScaleType];
};

const useScaleAccidentals = (): [
  () => state["accidentals"],
  (newState: state["accidentals"]) => void
] => {
  const getScaleAccidentals = (): state["accidentals"] => {
    const accidentals: state["accidentals"] = (
      JSON.parse(localStorage.getItem(nameOfState)!) as state
    ).accidentals;
    return accidentals;
  };

  const setScaleAccidentals = (newState: state["accidentals"]) => {
    const state: state = JSON.parse(
      localStorage.getItem(nameOfState)!
    ) as state;
    localStorage.setItem(
      nameOfState,
      JSON.stringify(<state>{
        ...state,
        accidentals: newState,
      })
    );
  };
  return [getScaleAccidentals, setScaleAccidentals];
};

export { useSpeed, useScales, useScaleType, useScaleAccidentals };
