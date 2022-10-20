interface state {
  speed: number;
  scale: {
    a: boolean;
    b: boolean;
    c: boolean;
    d: boolean;
    e: boolean;
    f: boolean;
    g: boolean;
  };
}

const initState = () => {
  const state: state | null = JSON.parse(localStorage.getItem("state")!);
  if (!state) {
    console.log("not");
    localStorage.setItem(
      "state",
      JSON.stringify(<state>{
        speed: 500,
        scale: {
          a: true,
          b: true,
          c: true,
          d: true,
          e: true,
          f: true,
          g: true,
        },
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

const useScale = (): [state["scale"], (newScale: any) => void] => {
  const getScale = (): state["scale"] => {
    const scale: state["scale"] = (
      JSON.parse(localStorage.getItem("scale")!) as state
    ).scale;
    return scale;
  };

  const setScale = (newScale: state["scale"]) => {
    const state: state = JSON.parse(localStorage.getItem("state")!) as state;
    localStorage.setItem(
      "state",
      JSON.stringify(<state>{
        ...state,
        scale: newScale,
      })
    );
  };
  return [getScale(), setScale];
};

export { useSpeed, useScale };
