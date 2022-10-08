import { PerspectiveCamera, Scene, Vector2, WebGLRenderer } from "three";
import { Cube } from "./cube";
import { SquareMesh } from "./square";

// 控制器类
abstract class Control {
    public cube: Cube;
    public scene: Scene;
    public renderer: WebGLRenderer;
    public camera: PerspectiveCamera;

    public _square: SquareMesh | null = null;
    // 动作开关
    private start = false;
    // 未完成最后一次操作
    private lastOperateUnfinish = false
    // 开始动作定位
    private startPos: Vector2 = new Vector2();
    // protected 声明之后的变量或者函数，只能被继承者访问，不能被实现者访问
    protected get domElement() {
        return this.renderer.domElement;
    }

    public constructor(cube: Cube, scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer) {
        this.cube = cube;
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
    }

    public abstract dispose(): void;
    // 处理动作
    protected operateStart(offsetX: number, offsetY: number) {
        // 防止重复执行动作
        if (this.start) {
            return;
        }
        this.start = true

        this.startPos = new Vector2(offsetX, offsetY);

        // const intersect = this.getIntersects(offsetX, offsetY)
    }
}

export class MouseControl extends Control {

    constructor(cube: Cube, scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer) {
        super(cube, scene, camera, renderer)

        this.mousedownHandle = this.mousedownHandle.bind(this);
        this.mouseupHandle = this.mouseupHandle.bind(this);
        this.mousemoveHandle = this.mousemoveHandle.bind(this);
        this.mouseoutHandle = this.mouseoutHandle.bind(this);
    }

    public mousedownHandle(event: MouseEvent) {
        event.preventDefault();

        this.operateStart(event.offsetX, event.offsetY)
    }
    public mouseupHandle(event: MouseEvent) { }
    public mousemoveHandle(event: MouseEvent) { }
    public mouseoutHandle(event: MouseEvent) { }


    public dispose(): void {
        this.domElement.removeEventListener("mousedown", this.mousedownHandle);
        this.domElement.removeEventListener("mouseup", this.mouseupHandle);
        this.domElement.removeEventListener("mousemove", this.mousemoveHandle);
        this.domElement.removeEventListener("mouseout", this.mouseoutHandle);
    }
}

export default Control;