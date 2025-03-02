import React, {use} from 'react';
import * as style from '@styles/background.module.scss';
import { Items, SkillButton } from '@components/skill-button';
import Board from '@components/board';

// promise를 전역으로 선언하여 fakeFetch 함수가 호출될 때마다 promise가 생성되는 것을 방지
let promise: null | Promise<any> = null;
let promise_state: 'pending' | 'fulfilled' | 'rejected' = 'pending';
const fakeFetch: () => {state: typeof promise_state, promise: Promise<unknown>} = () => {
    if(promise == null) {
        promise = new Promise<string>(resolve => setTimeout(() => resolve('loaded'), 2000));
        promise.then(() => promise_state = 'fulfilled').catch(() => promise_state = 'rejected');
    }
    if(!promise) promise_state = 'pending';
    return {state: promise_state, promise: promise}
}
type SKILLS = keyof typeof Items
const Background = (props) => {
    const [selectedSkill, setSelectedSkill] = React.useState<SKILLS | null>(null);
    const loading = fakeFetch();
    // Promise를 상위 Suspense 컴포넌트에 던져줌
    if(loading.state == 'pending') throw loading.promise;
    return <section id="background" className={style.background}>
        <ul>
            {Object.keys(Items).map((item, index) => <li key={item} >
                <SkillButton type={item} onClick={(item)=> setSelectedSkill(item)}/>
                {selectedSkill == item && <Board type={selectedSkill} onClose={()=> setSelectedSkill(null)}/>}
            </li>)}
        </ul>
    </section>
}

export default Background