export const Histories = [
	{
		company: '비상교육',
		date: '2020.09 ~ 재직중',
		position: 'CP',
		explain:
			'KLaSS , ELiF, MathAlive 컨텐츠 개발 및 유지보수, OxfordDiscover 컨텐츠 개발 총괄을 진행 하였으며, 2025년 서비스 예정인 AI 디지털 교과서 개발에 참여 하였습니다.',
	},
	{
		company: '이노뎁',
		date: '2019.11 ~ 2020.08',
		position: '주임연구원',
		explain: 'AngularJS를 이용한 타 플랫폼과의 연동',
	},
	{
		company: '클비시스템',
		date: '2017.08 ~ 2019.09',
		position: '주임',
		explain: 'Typescript 및 React 를 통한 Web application 개발',
	},
	{
		company: '디자인허브',
		date: '2016.05 ~ 2016.12',
		position: '사원',
		explain: '클라이언트의 요구에 맞춘 사이트 디자인 및 HTML 퍼블리싱',
	},
	{
		company: '홈페이지제작 오아시스',
		date: '2014.12 ~ 2016.05',
		position: '주임',
		explain:
			'웹표준 정책에 따른 HTML 코딩, 반응형 웹사이트 제작 (워드프레스, 하드코딩, 부트스트랩을 이용한 하드코딩),쇼핑몰 디자인 및 퍼블리싱 (카페24, 고도몰), 제로보드 XE 커스텀 스킨 제작',
	},
	{
		company: '㈜아이티핑거',
		date: '2013.01 ~ 2013.12',
		position: '사원',
		explain:
			'(주)아이티핑거 홈페이지 제작, 네이티브 어플리케이션을 생성해주는 웹 기반 플랫폼 제작.',
	},
	{
		company: '㈜티컴즈',
		date: '2011.08 ~ 2012.12',
		position: '사원',
		explain:
			'(주)티컴즈 웹디자인, 자회사 쓰임 브랜드 홈페이지 제작 및 상세페이지 제작',
	},
];
export const Projects = [
	{
		title: 'AI 디지털교과서',
		date: '2023.09 ~ 2024.10',
		skills: `<ul>
			<li>LIT: 뷰어를 custom-element 로 만들어 여러 환경에서도 충돌 없이 사용가능하도록 선택</li>
			<li>TypeScript: 프로젝트 안정성을 높이기 위해 사용</li>
			<li>SASS: style 재사용성 및 코드 중복을 줄이기 위해 사용</li>
			<li>VITE: 빠른 코드 컴파일을 위해 사용</li>
		</ul>`,
		link: 'https://www.vivasam.com/aidt/intro',
		explain: `2025년 전국적으로 시행되는 비상교육 AI디지털교과서 중고등 수학,영어교과서 개발에 참여`,
		role: `<ul>
			<li>교과서 컨텐츠를 서비스 내에 보여주는 뷰어 개발</li>
			<li>수업중 문제풀이 및 멀티미디어 활동(녹음,녹화)을 위한 클라이언트 기능개발</li>
			<li>특수 교과서 컨텐츠 개발사와 환경을 맞추기 위한 조정 (API, 테스팅, 기획서 분석 등)</li>
			<li>CBS 컨텐츠 원천데이터 등록 과정 기획 검수</li>
			<li>교과서 컨텐츠 웹 접근성 호환 관련 검수 및 개발내용 수정</li>
		</ul>`,
	},
	{
		title: 'Math Alive',
		date: '2021.03 ~ 2022.08',
		skills: `<ul>
			<li>Webpack: 제작한 컨텐츠를 ES5 환경에서도 실행 할 수 있게 번들링</li>
			<li>TypeScript: 프로젝트 안정성을 높이기 위해 사용</li>
			<li>React: 동적 활동을 하는 컨텐츠 이기에 SPA 개발하는것과 같은 방식으로 제작 (Class, Functional)</li>
			<li>SASS: style 재사용성 및 코드 중복을 줄이기 위해 사용</li>
			<li>Electron: 컨텐츠를 실행하는 실행기로써, 학급 입장 및 로그인 등의 역할 수행</li>
		</ul>`,
		link: 'https://www.allviaedu.com/kr/solutions/math-alive',
		explain: `초등 글로벌 디지털 수학 학습 프로그램인 Math Alive의 학습 컨텐츠 개발`,
		role: `<ul>
			<li>컨텐츠 실행기 내에 선생님이 제공하는 추가기능인 수업도구 개발</li>
			<li>학생이 문제를 푼 등급에 따라 추가문항을 제공하는 로직 설계 참여</li>
			<li>컨텐츠 내 문제 풀이 및 이에 따른 인터렉션이 가능한 페이지 개발 (AL, ML)</li>
			<li>컨텐츠 문항 개발을 위한 메타데이터를 입력하는 chrome extension 개발</li>
		</ul>`,
	},
	{
		title: 'Oxford Discover',
		date: '2023.03 ~ 2023.08',
		skills: `<ul>
			<li>Webpack: 제작한 컨텐츠를 ES5 환경에서도 실행 할 수 있게 번들링</li>
			<li>TypeScript: 프로젝트 안정성을 높이기 위해 사용</li>
			<li>LIT: 뷰어를 custom-element 로 만들어 여러 환경에서도 충돌 없이 사용가능하도록 선택</li>
			<li>React: 동적 활동을 하는 컨텐츠 이기에 SPA 개발하는것과 같은 방식으로 제작 (Class, Functional)</li>
			<li>SASS: style 재사용성 및 코드 중복을 줄이기 위해 사용</li>
			<li>Electron: 컨텐츠를 실행하는 실행기로써, 학급 입장 및 로그인 등의 역할 수행</li>
		</ul>`,
		link: 'https://www.allviaedu.com/kr/solutions/oxford-discover-futures',
		explain: `Oxford University Press에서 출판한 교재를 바탕으로 한 디지털 학습 프로그램의 학습 컨텐츠 및 뷰어 개발`,
		role: `<ul>
			<li>교과서 PDF를 기반으로 추가적인 작업을 통해 XML을 반환하는 에디터 개발 참여</li>
			<li>에디터를 통해 출력된 XML을 통해 교과서 HTML로 변환 후 보여주는 뷰어 개발</li>
			<li>특정 교과의 섹션별로 연동되는 별개 컨텐츠 개발(More Tools)</li>
			<li>디지털 원천데이터를 편집하기 원활하게 만들어주는 CK Editor 기반 보조 에디터 개발</li>
		</ul>`,
	},
	{
		title: 'KLaSS (현 MasterK)',
		date: '2018.10 ~ 2019.09',
		skills: `<ul>
			<li>Webpack: 제작한 컨텐츠를 ES5 환경에서도 실행 할 수 있게 번들링</li>
			<li>TypeScript: 프로젝트 안정성을 높이기 위해 사용</li>
			<li>React: 동적 활동을 하는 컨텐츠 이기에 SPA 개발하는것과 같은 방식으로 제작 (Class)</li>
			<li>Electron: 컨텐츠를 실행하는 실행기로써, 학급 입장 및 로그인 등의 역할 수행</li>
			<li>Storybook: 각 컴포넌트의 사용설명서인 이것을 통해, 컴포넌트 재사용성 확보</li>
			<li>Go: 컨텐츠 실행기 내에 들어간 로컬 서버로써, LMS 및 로컬 DB와의 연동, UDP 기반 소켓서버를 담당</li>
		</ul>`,
		link: 'https://www.youtube.com/watch?v=n9t0DW4NNzo',
		explain: `학생과 선생님을 연결하여 학생과 선생의 실시간 통신을 통해 적극적인 학습이 가능한 실시간 한국어 교육 서비스`,
		role: `<ul>
			<li>컨텐츠 실행기 내에 선생님이 제공하는 추가기능인 수업도구 개발</li>
			<li>컨텐츠 등록부터 S3 배포까지 가능하도록 하는 컨텐츠 업데이터 유지보수</li>
			<li>컨텐츠 실행기 내 추가기능 개발 및 배포용 NSIS를 통한 exe 생성</li>
			<li>디지털 원천데이터를 편집하기 원활하게 만들어주는 CK Editor 기반 보조 에디터 개발</li>
			<li>특정 교과의 섹션별로 연동되는 별개 컨텐츠 개발</li>
		</ul>`,
	},
	{
		title: 'KB손해보험 알림톡',
		date: '2017.10 ~ 2018.01',
		skills: `<ul>
			<li>Bootstrap: 컨텐츠의 레이아웃 및 기본적인 스타일링을 효율적으로 지정하기 위해 사용</li>
		</ul>`,
		link: 'http://insight.kbinsure.co.kr/wp-content/uploads/2017/11/KB%EC%86%90%ED%95%B4%EB%B3%B4%ED%97%98_%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C_KB%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%95%88%EB%82%B4%EB%AC%B8-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%98%A4%ED%94%88_%EC%82%AC%EC%A7%841.jpg',
		explain: `전자안내문 발송 방식보다 업그레이드된 방식의 e-Book 플랫폼을 적용한 대고객 알림 서비스 이며<br/>PC뿐만 아니라 모바일에서도 확인 가능한 안내문 개발 참여`,
		role: `<ul>
			<li>웹 접근성 인증마크 획득을 위한 기존 퍼블리싱 내역 수정</li>
			<li>웹 접근성 준수를 위한 기기 테스트, 및 이를 배포하는 에디터 개발</li>
		</ul>`,
	},
	{
		title: '키토제닉 커뮤니티 사이트 개발',
		date: '2017.05 ~ 2019.01',
		skills: `<ul>
			<li>Express: 사이트의 기본 웹 서버를 제공하기 위해 사용</li>
			<li>MongoDB: 회원 정보등을 저장하기 위해 사용</li>
			<li>Heroku, S3: node.js 서버, 정적 자원들을 호스팅 하기 위해 사용</li>
			<li>Grunt: 웹팩과 같은 빌드 툴로써, 소스 최적화 및 통합 빌드를 하기 위해 사용</li>
		</ul>`,
		link: 'https://github.com/popsapple/kitocommu',
		explain: `키토제닉 다이어트를 통한 다이어트 방식 전파 및 소통 채널을 위한 게시판 사이트 개발`,
		role: `<ul>
			<li>웹 접근성 인증마크 획득을 위한 기존 퍼블리싱 내역 수정</li>
			<li>웹 접근성 준수를 위한 기기 테스트, 및 이를 배포하는 에디터 개발 참여</li>
		</ul>`,
	},
];
