import { WebGLRenderer } from "three";

const createRenderer = () => {
  // antialias 抗锯齿
  const render = new WebGLRenderer({ antialias: true });

  return render;
};

export default createRenderer;
