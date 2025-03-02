import React from 'react';
import updateTransform from './transform';

class Point {
    x: number;
    y: number;
    r: number;
    constructor(x: number, y: number, r: number) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

class Ring {
    vertex_len: number;
    vertexs: Point[];
    width: number;
    renderd_width: number | null;
    scatter: number;
    max: number;
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    constructor(canvas:HTMLCanvasElement, width: number, max: number, vertex_len: number) {    
        this.width = width; // 다각형의 너비이면서 최소 지름
        this.vertex_len = vertex_len;
        this.vertexs = [];
        this.scatter = 0;
        this.renderd_width = width + max;
        this.max = max; // 더 커질만한? 최대 지름
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw(this.ctx);
        this.animate(this.ctx);
    }
    getPolygonVertices(W: number, N: number): {x: number, y: number}[] {
        const r = W / 2
        const dgree = 360 / N;
        const radianConversion = Math.PI / 180;
        const points = [];
        // 초기 원 기준으로 퍼져나가야해서 고정값
        const CX = this.renderd_width  / 2 + 5;
        const CY = this.renderd_width  / 2 + 5;
        for (let i = 0; i < N; i++) {
            const radian = dgree * radianConversion;
            const x = CX + Math.cos(radian * i) * r;
            const y = CY + Math.sin(radian * i) * r;
            points.push({x, y});
        }
        return points;
    }
    draw(ctx: CanvasRenderingContext2D) {  
        // sin 함수 값이 -1 ~ 1 사이의 값을 가지므로 width 값에 sin 함수 값을 곱해주어 너비를 조절
        const zitter = (Math.sin(this.scatter) + 1) / 2
        const W = this.width + zitter * this.max;
        ctx.clearRect(0, 0, this.width + this.max *2, this.width + this.max*2);
        const points = this.getPolygonVertices(W, this.vertex_len);
        this.vertexs = []
        points.forEach(p => {
            let size = 3 * zitter
            if(size < 1.5) size = 1.5;
            this.vertexs.push(new Point(p.x, p.y, size));
        });
        this.vertexs.forEach((v, i) => {
            ctx.beginPath();
            ctx.arc(v.x, v.y, v.r, 0, Math.PI * 2, false);
            ctx.fillStyle = '#808080';
            ctx.fill();
            ctx.closePath();
        });
        const angle = zitter * 36 * Math.PI / 180;
        updateTransform(this.canvas, 'rotate', `${angle}rad`);
        this.scatter += 0.03;
    }
    animate(ctx: CanvasRenderingContext2D) {
        this.draw(ctx);
        requestAnimationFrame(this.animate.bind(this, ctx));
    }
}

const Loading = () => {
    const canvas = React.useRef<HTMLCanvasElement>(null);
    const bgStyle: React.CSSproperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#e5e7ed',
    }
    const itemStyle: React.CSSproperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
    }
    React.useEffect(() => {
        if (canvas.current) {
            new Ring(canvas.current, 50, 100, 10);
        }
    }, []);
    return (
        <div style={bgStyle}>
            <canvas style={itemStyle} ref={canvas} id="waveCanvas" width="160" height="160"></canvas>
        </div>
    );
}

export default Loading;