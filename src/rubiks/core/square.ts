import { Object3D, Shape } from "three"
import { CubeElement } from "./cubeData";



export const createSquare = () => {
    // 通过点位获取二维面图形
    const squareShape = new Shape();

    const x = 0, y = 0;
    //top
    squareShape.moveTo(x - 0.4, y + 0.5)
    squareShape.lineTo(x + 0.4, y + 0.5)
    // right
    // bottom
    // left
}

// 正方块
export class SquareMesh extends Object3D {
    public element: CubeElement;
    public constructor(element: CubeElement) {
        super();
        this.element = element
    }
}