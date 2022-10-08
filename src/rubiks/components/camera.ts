import { PerspectiveCamera } from "three";

const createCamera = () => {
  /**
   * PerspectiveCamera
   * @param [fov=50] Camera frustum vertical field of view. Default value is 50.
   * @param [aspect=1] Camera frustum aspect ratio. Default value is 1.
   * @param [near=0.1] Camera frustum near plane. Default value is 0.1.
   * @param [far=2000] Camera frustum far plane. Default value is 2000.
   */
  const camera = new PerspectiveCamera(45, 1, 0.1, 100);

  camera.position.set(0, 0, 15);

  return camera;
};

export default createCamera;
