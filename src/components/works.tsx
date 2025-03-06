import React from 'react';
import { Items, IconButton, ItemKeys } from './icon-button';
import { Projects } from '../ts/expriences';
import * as style from '@styles/about.module.scss'

type Project<T> = T extends (infer U)[]?  U : never
const Work = (prop: Project<typeof Projects>) => {
    return <li>
        <h2 className={style.title}>{prop.title}</h2>
        <p className={style.explain}>{prop.explain}</p>
        <span className={style.date}>{prop.date}</span>
        <span className={style.account}>{prop.account}</span>
    </li>
}
const Works = () => {
    return <ul id="project" className={style.project}>
            {Projects.map((p) => <Work {...p} />)}
        </ul>
}
export default Works