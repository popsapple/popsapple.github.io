import React from 'react';
import * as style from '@styles/skills.module.scss';

const Items = {
    'DOT1' : '',
    'REACT' : '',
    'JS' : '',
    'VUE' : '',
    'ROLLUP' : '',
    'STAR' : '',
    'ABOUT' : '',
    'LIT' : '',
    'SASS' : '',
    'ELECTRON' : '',
    'SVELTE' : '',
    'DOT2' : ''
}
const SkillButton = (props) => {
    return <button 
            className={style[props.type] + ' ' + style.button}
            onClick={()=> props.onClick(props.type)}
        >
        <span className={style.text}>{props.type}</span>
        <span className={style.img} role='presentation'>
        <span className={style.after}></span>
        <span className={style.before}></span></span>
    </button>
}

export { SkillButton, Items }