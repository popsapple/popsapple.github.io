import React, {JSX} from 'react';
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
type IconCategory = 'Skill' | 'Action' | 'Deco' | '';
export type ItemKeys = keyof typeof Items;
const IconButton = (props: {type: ItemKeys, children?: JSX.Element, onClick:(type: ItemKeys) => void}) => {
    const [category, setCategory] = React.useState<IconCategory>('')
    React.useEffect(() => {
        if(props.type.indexOf('DOT') != -1) setCategory('Deco')
        else if(props.type.indexOf('STAR') != -1) setCategory('Deco')
        else if(props.type.indexOf('ABOUT') != -1) setCategory('Action')
        else setCategory('Skill')
    },[])
    return <button 
            className={style[props.type] + ' ' + style.button}
            onClick={()=> props.onClick(props.type)}
        >
        <span className={style.text}>{props.type}</span>
        <span className={style.img} role='presentation'>
        <span className={style.after}></span>
        <span className={style.before}></span></span>
        {props.children}
    </button>
}

export { IconButton, Items }