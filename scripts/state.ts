interface state {
  speed: number;
}

const initState = () => {
  const state: state | null = JSON.parse(localStorage.getItem("state")!);
  if (!state) {
    console.log("not");
    localStorage.setItem(
      "state",
      JSON.stringify(<state>{
        speed: 500,
      })
    );
  }
};
initState();

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

const useSpeed = (): [number, (newSpeed: number) => void] => {
  return [getSpeed(), setSpeed];
};

export { useSpeed };
