import React, {use} from 'react';
import * as style from '@styles/background.module.scss';
import { Items, SkillButton } from '@components/skill-button';

type Loading = Promise<unknown> & {state: 'pending' | 'fulfilled' | 'rejected'};
// promise를 전역으로 선언하여 fakeFetch 함수가 호출될 때마다 promise가 생성되는 것을 방지
let promise  = null;
const fakeFetch: () => Loading = () => {
    if(promise == null) {
        promise = new Promise<string>(resolve => setTimeout(() => resolve('loaded'), 2000));
        promise.then(() => promise.state = 'fulfilled').catch(() => promise.state = 'rejected');
    }
    if(!promise.state) promise.state = 'pending';
    return promise
}
const Background = (props) => {
    const loading = fakeFetch();
    // Promise를 상위 Suspense 컴포넌트에 던져줌
    if(loading.state == 'pending') throw loading;
    return <section id="background" className={style.background}>
        <ul>
            {Object.keys(Items).map((item, index) => <li key={item} ><SkillButton type={item} /></li>)}
        </ul>
    </section>
}

export default Background