interface state {
  speed: number;
  scales: [
    {
      name: "A";
      status: boolean;
    },
    {
      name: "B";
      status: boolean;
    },
    {
      name: "C";
      status: boolean;
    },
    {
      name: "D";
      status: boolean;
    },
    {
      name: "E";
      status: boolean;
    },
    {
      name: "F";
      status: boolean;
    },
    {
      name: "G";
      status: boolean;
    }
  ];
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

const useScales = (): [state["scales"], (newScale: any) => void] => {
  const getScale = (): state["scales"] => {
    const scale: state["scales"] = (
      JSON.parse(localStorage.getItem("state")!) as state
    ).scales;
    return scale;
  };

  const setScale = (newScale: state["scales"]) => {
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

export { useSpeed, useScales };
