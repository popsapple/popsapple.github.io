import React from 'react';
import * as style from '@styles/board.module.scss';
import { Items } from '@components/skill-button';

type BoardType = {
    type: keyof typeof Items,
    children?: React.ReactNode,
    onClose: () => void
}
const Board = (props: BoardType) => {
    return <section className={style.section}>
        {props.children}
        <button className={style.close} onClick={()=>props.onClose()}></button>
    </section>
}
export default Board;