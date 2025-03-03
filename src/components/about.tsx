import React from 'react';
import { Items, SkillButton } from './skill-button';
import WorksList from '../ts/works';
import style from '@styles/about.module.scss'

const History = () => {
    return <ul id="history" className={style.history}>
        {WorksList.map(w => {
            return <li key={w.company}><HistoryItem {...w}/></li>
        })}
    </ul>
}
// infer은 성공적으로 추론 가능할 경우엔 그 추론한 결과를 반환한다.
// 여기선 배열의 내부타입이 추론 가능했으니 그 결과를 T에 적용하는것.
type WorkType<T> = T extends (infer U)[] ? U : never;
const HistoryItem = (props: WorkType<typeof WorksList>) => {
    return <>
        <h4>{props.company}</h4>
        <em>{props.date}</em>
        <p>{props.explain}</p>
    </>
}
const About = () => {
    return <ul id="about" className={style.about}>
            <li>
                <h3>About Me</h3>
                <div className={style.profile}>
                    <p>디자인과 퍼블리싱을 기반으로 프론트엔드 개발로 전향한 개발자로, 현업과의 정확한 소통을 통해 정확한 결과물을 만들어내는 것을 지향합니다. 다양한 프로젝트에서 HTML, CSS, JavaScript, 그리고 React 등을 여러 프로젝트에서 활용 하였으며, 디자인-개발-기획간의 균형을 맞춰가며 작업하는 것을 지향합니다.</p>
                    <div itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">Garam Hyeon</span>
                        <a href="mailto:saysun34@gmail.com" itemProp="email">saysun34@gmail.com</a>
                        <a href="tel:+82-10-2503-9269" itemProp="telephone">+82-10-2503-9269</a>
                    </div>
                </div>
            </li>
            <li>
                <h3>Skill</h3>
                <ul id="skill" className={style.skill}>
                    {Object.keys(Items).map((item, index) => <li key={item}>
                        <SkillButton type={item} onClick={(item)=> {}}/>
                    </li>)}
                </ul>
            </li>
            <li>
                <h3>History</h3>
                <History />
            </li>
        </ul>
}
export default About