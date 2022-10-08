// 立方体缓存
import { Vector2, Vector3 } from "three";
import { SquareMesh } from './square';

// 旋转描述
export interface RotateDirection {
    screenDir: Vector2; // 屏幕方向的向量
    starteSquare: SquareMesh; // 代表方向的起始square,用于记录旋转的local方向
    endSquare: SquareMesh; // 代表方向的终止square,用于记录旋转的local方向
}

class CubeState {
    // 所有方块
    public _squares: SquareMesh[];
    // 是否处于旋转状态
    public inRotation: Boolean = false;

    public constructor(squares: SquareMesh[]) {
        this._squares = squares
    }
    public validateFinish() {
        let finish = true;

        // 六面3D点位
        const sixPlane: {
            nor: Vector3,
            squares: SquareMesh[]
        }[] = [
                {
                    nor: new Vector3(0, 1, 0),
                    squares: []
                },
                {
                    nor: new Vector3(0, -1, 0),
                    squares: []
                },
                {
                    nor: new Vector3(-1, 0, 0),
                    squares: []
                },
                {
                    nor: new Vector3(1, 0, 0),
                    squares: []
                },
                {
                    nor: new Vector3(0, 0, 1),
                    squares: []
                },
                {
                    nor: new Vector3(0, 0, -1),
                    squares: []
                },
            ]

        // 点位是否正确
        for (let i = 0; i < this._squares.length; i++) {
            // 针对数据中保存的正常数据进行遍历查找
            const plane = sixPlane.find(item => this._squares[i].element.normal.equals(item.nor))
            // 如果找到相关数据，将其添加至数据集中
            plane!.squares.push(this._squares[i])
        }

        // 每面的颜色值是否统一
        for (let i = 0; i < sixPlane.length; i++) {
            const plane = sixPlane[i]
            if (!plane.squares.every(square => square.element.color === plane.squares[0].element.color)) {
                finish = false;
                break;
            }
        }

        return finish
    };


}

export default CubeState