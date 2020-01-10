import Entity from "./entity";
import Vector2D from "../utils/vector2d";

const BULLET_TTL = 30;

export default class Bullet extends Entity {
    public isActive: boolean = false;

    private ttl: number;

    constructor(source: Entity) {
        super(new Vector2D(0,0), 2, new Vector2D(15 ,15 ), 0);
    }

    public fire(direction: number, x: number, y: number): void {
        this.isActive = true;
        this.direction = direction;
        this.position.x = x;
        this.position.y = y;
        this.ttl = BULLET_TTL;
    }

    public render(ctx: CanvasRenderingContext2D): void {
        if (!this.isActive) return;
        ctx.fillStyle = '#f9f9f9'

        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    public update(): void {
        if(!this.isActive) return;
        this.ttl -= 1;
        if(this.ttl <= 0) this.isActive = false;

        this.position.x += (Math.cos(this.direction) * this.velocity.x);
        this.position.y += (Math.sin(this.direction) * this.velocity.y);

        // appear on the other side of the screen
        this.handleAreaBoundsCheck();
    }
}