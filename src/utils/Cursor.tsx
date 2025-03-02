class Cursor {
    x: number;
    y: number;
    r: number;
    element: HTMLElement;
    constructor(x: number, y: number, r: number) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.element = document.createElement('div');
        this.element.style.position = 'fixed';
        this.element.style.width = `${r * 2}px`;
        this.element.style.height = `${r * 2}px`;
        document.body.appendChild(this.element);
        this.element.classList.add('cursor');
        this.element.classList.add('leave');
        document.addEventListener('mousemove', (e) => this.move(e.clientX, e.clientY));
        document.addEventListener('click', () => this.click());
        document.addEventListener('mouseleave', () => this.element.classList.add('leave'));
        document.addEventListener('mouseenter', () => this.element.classList.remove('leave'));
    }
    move(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }
    click() {
        if(this.element.classList.contains('click')) return;
        this.element.classList.add('click');
        setTimeout(() => this.element.classList.remove('click'), 1000);
    }
}
export default Cursor