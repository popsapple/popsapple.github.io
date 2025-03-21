import React from 'react';
import _ from 'lodash';
import { Items, Skills } from './icon-button';
import { Projects } from '../ts/expriences';
import * as style from '@styles/works.module.scss';

type Project<T> = T extends (infer U)[] ? U : never;
const Work = (prop: Project<typeof Projects> & { hidden: boolean }) => {
	return (
		<li aria-hidden={prop.hidden}>
			<h3 className={style.title}>{prop.title}</h3>
			<span className={style.date}>{prop.date}</span>
			{prop.link && <a href={prop.link}>LINK</a>}
			<div>
				<p
					className={style.explain}
					dangerouslySetInnerHTML={{ __html: prop.explain }}
				/>
				<div className={style.detail}>
					<h4>사용기술</h4>
					<div dangerouslySetInnerHTML={{ __html: prop.skills }} />
				</div>
				<div className={style.detail}>
					<h4>기여내역</h4>
					<div dangerouslySetInnerHTML={{ __html: prop.role }} />
				</div>
			</div>
		</li>
	);
};
const Works = () => {
	const pointer = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });
	const direction = React.useRef<'L' | 'R' | ''>('');
	const [focusIdx, setFocusIdx] = React.useState<number>(0);
	const sliderEle = React.useRef<HTMLUListElement | null>(null);
	let moving = false;
	const Sliding = React.useCallback(() => {
		if (moving) return;
		moving = true;
		setTimeout(() => {
			const idx = focusIdx;
			const li = sliderEle.current.children[idx];
			if (!li) return;
			const scrollPosition = (li as HTMLLIElement).offsetWidth * idx;
			sliderEle.current.scrollTo({
				left: scrollPosition - 2,
				behavior: 'smooth',
			});
			moving = false;
		}, 500);
	}, [focusIdx]);
	React.useEffect(() => {
		window.addEventListener('resize', Sliding);
		return () => {
			window.removeEventListener('resize', Sliding);
		};
	}, [Sliding]);

	React.useEffect(() => {
		Sliding();
	}, [focusIdx]);
	return (
		<section>
			<h2>work</h2>
			<div
				id='project-slider'
				role='region'
				aria-roledescription='carousel'
				aria-label='프로젝트 슬라이드'
				onPointerDown={(event) => {
					pointer.current.x = event.clientX;
					pointer.current.y = event.clientY;
				}}
				onPointerMove={(event) => {
					event.stopPropagation();
					let distance = 0;
					let distanceY = 0;
					let x = event.clientX;
					let y = event.clientY;
					if (event.pressure == 0) {
						direction.current = '';
						return;
					} else {
						direction.current = pointer.current.x > x ? 'R' : 'L';
						distance = pointer.current.x - x;
						distanceY = pointer.current.y - y;
						let toX = sliderEle.current.scrollLeft + distance;
						let toY = sliderEle.current.scrollTop + distanceY;
						if (Math.abs(distance) < 50) {
							direction.current = '';
							sliderEle.current.children[focusIdx]
								.querySelector('div')
								.scrollTo({
									top: toY,
									behavior: 'smooth',
								});
						} else {
							sliderEle.current.scrollTo({
								left: toX,
								behavior: 'smooth',
							});
						}
					}
				}}
				onPointerUp={(event) => {
					event.stopPropagation();
					if (direction.current == 'L') {
						setFocusIdx(focusIdx > 0 ? focusIdx - 1 : 0);
					} else if (direction.current == 'R') {
						setFocusIdx(
							Projects.length - 1 > focusIdx ? focusIdx + 1 : focusIdx
						);
					}
					direction.current = '';
				}}
			>
				<ul
					id='project'
					aira-live='off'
					className={style.project}
					ref={sliderEle}
				>
					{Projects.map((p, idx) => (
						<Work
							{...p}
							hidden={idx != focusIdx}
						/>
					))}
				</ul>
			</div>
			<ol
				role='tablist'
				aria-label='슬라이드 이동 버튼목록'
				className={style.indicator}
			>
				{Projects.map((p, idx) => (
					<li>
						<button
							type='button'
							aria-label={`슬라이드 ${idx + 1}`}
							aria-selected={idx == focusIdx}
							aria-controls='project-slider'
							onClick={() => setFocusIdx(idx)}
						></button>
					</li>
				))}
			</ol>
		</section>
	);
};
export default Works;
