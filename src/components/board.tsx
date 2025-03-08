import React from 'react';
import * as style from '@styles/board.module.scss';
import { Items, ItemKeys } from '@components/icon-button';
import About from '@components/about';
import Works from '@components/works';
import userImg from '../assets/images/user_big.png';
import workImg from '../assets/images/work_big.png';

type BoardType = {
    type: ItemKeys,
    children?: React.ReactNode,
    onClose: () => void
}

const Contents = (props: { type: keyof typeof Items} ) => {
    switch (props.type) {
        case 'ABOUT':
            return <About />
        default:
            return <Works />
    }
}

const Icons = (props: { type: keyof typeof Items} ) => {
    return <div className={style.img + ' ' + props.type}><img src={props.type == 'ABOUT' ? userImg: workImg}/></div>
}
const Board = (props: BoardType) => {
    return <section className={style.section}>
        <Icons type={props.type} />
        <div>
            <h2>{props.type == 'ABOUT' ? 'ABOUT' : 'WORK'}</h2>
            <Contents type={props.type} />
        </div>
        <button className={style.close} onClick={()=>props.onClose()}></button>
    </section>
}
export default Board;