import React from 'react';
import { Items, Skills } from './icon-button';
import { Projects } from '../ts/expriences';
import * as style from '@styles/works.module.scss';

type Project<T> = T extends (infer U)[] ? U : never;
const Work = (prop: Project<typeof Projects> & { hidden: boolean }) => {
	const skills = prop.skills.split(',') as unknown as Array<keyof typeof Items>;
	return (
		<li aria-hidden={prop.hidden}>
			<h3 className={style.title}>{prop.title}</h3>
			<p
				className={style.explain}
				dangerouslySetInnerHTML={{ __html: prop.explain }}
			/>
			<ul>{Skills(skills)}</ul>
			<span className={style.date}>{prop.date}</span>
			<span className={style.account}>{prop.account}</span>
		</li>
	);
};
const Works = () => {
	return (
		<section>
			<h2>work</h2>
			<div
				id='project-slider'
				role='region'
				aria-roledescription='carousel'
				aria-label='프로젝트 슬라이드'
			>
				<ul
					id='project'
					aira-live='off'
					className={style.project}
				>
					{Projects.map((p) => (
						<Work
							{...p}
							hidden={true}
						/>
					))}
				</ul>
			</div>
			<ol
				role='tablist'
				aria-label='슬라이드 이동 버튼목록 '
			>
				{Projects.map((p, idx) => (
					<li>
						<button
							type='button'
							aria-label={`슬라이드 ${idx + 1}`}
							aria-selected={false}
							aria-controls='project-slider'
						></button>
					</li>
				))}
			</ol>
		</section>
	);
};
export default Works;
