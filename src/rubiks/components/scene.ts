import { Scene, Color, ColorRepresentation } from "three";

/**
 * 创建场景
 * @param {Color | string | number} bgColor
 * @returns
 */
const createScene = (bgColor: ColorRepresentation) => {
  const scene = new Scene();

  scene.background = new Color(bgColor);

  return scene;
};

export default createScene;
