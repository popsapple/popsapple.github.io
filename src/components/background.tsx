import React, { use, useCallback, useEffect } from 'react';
import * as style from '@styles/background.module.scss';
import { Items, IconButton, ItemKeys } from '@components/icon-button';
import Board from '@components/board';

const Background = (props) => {
	const [loadingStatus, setLoadingStatus] = React.useState<{
		state: string;
		promise?: Promise<string>;
	}>({ state: '' });
	const [selectedSkill, setSelectedSkill] = React.useState<ItemKeys | null>(
		null
	);
	const generatePromise = React.useCallback(() => {
		if (loadingStatus.promise !== undefined) return;
		let promise_state = 'pending';
		const promise = new Promise<string>((resolve) =>
			setTimeout(() => resolve('loaded'), 2000)
		);
		promise
			.then(() => {
				promise_state = 'fulfilled';
				setLoadingStatus({ state: promise_state, promise: promise });
			})
			.catch(() => {
				promise_state = 'reject';
				setLoadingStatus({ state: promise_state, promise: promise });
			});
		setLoadingStatus({ state: promise_state, promise: promise });
	}, [loadingStatus.promise]);
	useEffect(() => {
		generatePromise();
	}, [loadingStatus.promise]);
	// Promise를 상위 Suspense 컴포넌트에 던져줌
	if (loadingStatus && loadingStatus.state == 'pending')
		throw loadingStatus.promise;
	return (
		<section
			id='background'
			className={style.background}
		>
			<ul>
				{Object.keys(Items).map((item, index) => (
					<li key={item}>
						<IconButton
							type={item as ItemKeys}
							onClick={(item) => setSelectedSkill(item)}
						>
							{item == 'ABOUT' && (
								<span className={style.highlight}>profile</span>
							)}
						</IconButton>
						{selectedSkill == item && (
							<Board
								type={selectedSkill}
								onClose={() => setSelectedSkill(null)}
							/>
						)}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Background;
