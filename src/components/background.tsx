import React from 'react';
import * as style from '@styles/background.module.scss';
import { Items, SkillButton } from '@components/skill-button';

const Background = (props) => {
    return <section id="background" className={style.background}>
        <ul>
            {Object.keys(Items).map((item, index) => <li key={item} ><SkillButton type={item} /></li>)}
        </ul>
    </section>
}

export default Background