interface state {
  speed: number;
}

localStorage.setItem(
  "state",
  JSON.stringify(<state>{
    speed: 100,
  })
);

const getSpeed = (): number => {
  const speed: state["speed"] = (
    JSON.parse(localStorage.getItem("state")!) as state
  ).speed;
  return speed;
};

const setSpeed = (newSpeed: number) => {};

export { getSpeed, setSpeed };
