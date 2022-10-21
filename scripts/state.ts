export interface Scale {
  name: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  status: boolean;
}

export interface TypeOfScale {
  name: "Major" | "Minor";
  status: boolean;
}

interface state {
  speed: number;
  scales: Scale[];
  scaleType: TypeOfScale[];
}

const initState = () => {
  const state: state | null = JSON.parse(localStorage.getItem("state")!);
  if (!state) {
    console.log("not");
    localStorage.setItem(
      "state",
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
      })
    );
  }
};
initState();

const useSpeed = (): [number, (newSpeed: number) => void] => {
  const getSpeed = (): number => {
    const speed: state["speed"] = (
      JSON.parse(localStorage.getItem("state")!) as state
    ).speed;
    return speed;
  };

  const setSpeed = (newSpeed: number) => {
    const state: state = JSON.parse(localStorage.getItem("state")!) as state;
    localStorage.setItem(
      "state",
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
      JSON.parse(localStorage.getItem("state")!) as state
    ).scales;
    return scale;
  };

  const setScale = (newState: state["scales"]) => {
    const state: state = JSON.parse(localStorage.getItem("state")!) as state;
    localStorage.setItem(
      "state",
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
      JSON.parse(localStorage.getItem("state")!) as state
    ).scaleType;
    return scale;
  };

  const setScaleType = (newState: state["scaleType"]) => {
    const state: state = JSON.parse(localStorage.getItem("state")!) as state;
    localStorage.setItem(
      "state",
      JSON.stringify(<state>{
        ...state,
        scaleType: newState,
      })
    );
  };
  return [getScaleType, setScaleType];
};

export { useSpeed, useScales, useScaleType };
