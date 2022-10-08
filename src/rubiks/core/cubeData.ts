import { ColorRepresentation, Vector3 } from "three";

// 立方体属性类型
export interface CubeElement {
    color: ColorRepresentation; //颜色
    pos: Vector3; // 定位
    normal: Vector3; // 正常点位
    widthLogo?: boolean // 是否携带Logo
}

// 魔方颜色： top、bottom、left、right、front、back
type CubeColor = [ColorRepresentation, ColorRepresentation, ColorRepresentation, ColorRepresentation, ColorRepresentation, ColorRepresentation]

// 立方体数据类
class CubeData {
    // 魔方阶层
    public cubeOrder: number;
    // 魔方颜色
    public colors: CubeColor;
    // 魔方中的每个立方块
    public elements: CubeElement[] = []
    // TODO 改变魔方块大小
    // 魔方块大小
    private _size = 1;
    public get elementSize() {
        return this._size;
    }
    // 默认采用3阶
    public constructor(cubeOrder = 3, colors: CubeColor = ["#fb3636", "#ff9351", "#fade70", "#9de16f", "#51acfa", "#da6dfa"]) {
        this.cubeOrder = cubeOrder;
        this.colors = colors;
        this.initElements();
    }

    /**
     * 初始化数据
     * @param {Boolean} localDataFirst
     */
    public initElements(localDataFirst = true) {
        // 是否采用本地缓存数据
        if (localDataFirst && localStorage) {
            this.elements = this.getLocalData();
        }
        // 魔方六面是否填充完毕
        if (this.elements.length === this.cubeOrder * this.cubeOrder * 6) {
            return
        }
    }

    // TODO 创建复原的数据
    /**
     * 创建复原的数据
     */
    public initFinishData() {

    }

    /**
     * 保存数据至本地
     */
    public saveDataToLocal() {
        const data = JSON.stringify(this.elements)

        // 命名缓存数据规则，🌰 3阶魔方数据  3-Rubik
        localStorage && localStorage.setItem(`${this.cubeOrder}-Rubik`, data)
    }

    /**
     * 获取本地缓存数据
     */
    public getLocalData() {
        if (localStorage) {
            const data = localStorage.getItem(`${this.cubeOrder}-Rubik`)
            if (data) {
                // TODO 从本地缓存中获取数据之后，数据是否需要类型格式化
                const parseData: CubeElement[] = JSON.parse(data)

                return parseData as CubeElement[]
            }
        }
        return []
    }

}

export default CubeData;