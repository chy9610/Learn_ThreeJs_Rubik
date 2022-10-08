import { Camera, Color, Group, Matrix4, Vector2, Vector3 } from "three";
import { createSquare, SquareMesh } from "./square";
import CubeState from './cubeState';
import CubeData from './cubeData';

const getTemPos = (square: SquareMesh, squareSize: number) => {

}

export class Cube extends Group {
  public data: CubeData;
  public state!: CubeState;
  // 所有魔方块
  public get squares() {
    return this.children as SquareMesh[];
  }
  // 魔方阶数
  public get order() {
    return this.data.cubeOrder;
  }
  // 魔方块大小
  public get squareSize() {
    return this.data.elementSize
  }
  // 是否处于完成状态
  public get finish() {
    return this.state.validateFinish();
  }
  public constructor(order = 3) {
    super();

    // 创建魔方数据
    this.data = new CubeData(order);

    // TODO
    // this.createChildrenByData();
  }

  /**
   * 创建魔方子集数据
   */
  public createChildrenByData() {
    this.remove(...this.children);

  }
}
