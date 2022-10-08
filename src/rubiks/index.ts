import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import createCamera from "./components/camera";
import createScene from "./components/scene";
import createRenderer from "./components/render";
import { Cube } from "./core/cube";
// import Control, { MouseControl, TouchControl } from "./core/control";

const setSize = (container: Element, camera: PerspectiveCamera, render: WebGLRenderer) => {
  // 设置相机的朝向
  camera.aspect = container.clientWidth / container.clientHeight;
  // 重新计算相机对象的投影矩阵值
  camera.updateProjectionMatrix();
  // 设置渲染器宽高比
  render.setSize(container.clientWidth, container.clientHeight);
  // windiow.devicePixelRatio  => 当前显示设备的物理像素分辨率与CSS 像素分辨率之比
  render.setPixelRatio(window.devicePixelRatio);
};

class Rubiks {
  public camera: PerspectiveCamera;
  public scene: Scene;
  public cube: Cube | undefined;
  public renderer: WebGLRenderer;
  public _controls_ = [];

  constructor(container: Element) {
    // 创建相机
    this.camera = createCamera();
    // 创建场景
    this.scene = createScene("#478967");
    // 创建渲染器
    this.renderer = createRenderer();
    // 节点中添加渲染器Dom
    container.appendChild(this.renderer.domElement);
    // 窗口可变
    window.addEventListener("resize", () => {
      setSize(container, this.camera, this.renderer);
      this.render();
    });
    // 初始化
    setSize(container, this.camera, this.renderer);
    // 设置阶数
    this.setOrder(3);
    // 执行动画
    this.startAnimation();
  }
  // 难度设置（魔方阶数）
  setOrder(order: number) {
    // 删除子集
    this.scene.remove(...this.scene.children);
    // 删除控制器中的子集
    // if (this._controls_.length > 0) {
    //   this._controls_.forEach((control) => control.dispose());
    // }

    // 创建立方体
    const cube = new Cube(order);
    // 将立方体添加至场景中
    this.scene.add(cube);
    // 记录立方体
    this.cube = cube;
    // 重新渲染
    this.render();

    const winW = this.renderer.domElement.clientWidth;
    const winH = this.renderer.domElement.clientHeight;
    // const coarseSize = cube.getCoarseCubeSize(this.camera, {
    //   w: winW,
    //   h: winH,
    // });

    // const ratio = Math.max(2.2 / (winW / coarseSize, 2.2 / (winH / coarseSize));
  }
  private render() {
    // 渲染场景及相机
    this.renderer.render(this.scene, this.camera)
  }

  // 动画
  startAnimation() {
    // time: DOMHighResTimeStamp
    // 一个 double 类型，用于存储毫秒级的时间值。这种类型可以用来描述离散的时间点或者一段时间（两个离散时间点之间的时间差）。
    // 默认值是 2 毫秒
    const animation = (time: number) => {
      // 转为秒
      time /= 1000
      // 立方体上下浮动动画
      if (this.cube) {
        if (time < 2) {
          this.cube.position.z = (-1 + time / 2) * 100
        } else {
          this.cube.position.z = 0
        }
        // 上下浮动的同时，确保宽度保持一个均衡效果
        // sin函数返回 -1至1之间的值
        this.cube.position.y = Math.sin(time) * 0.3;
      }
      this.render();
      requestAnimationFrame(animation)
    }
    // 浏览器在下次重绘之前调用指定的回调函数更新动画
    requestAnimationFrame(animation)
  }
}

export default Rubiks;
