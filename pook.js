export const POOK = {
  mode: "narrativ",
  behavior: "erzählt",
  active: false,

  story(respo){
    return `POOK erzählt: ${respo} befindet sich im narrativen Zustand.`;
  }
};

