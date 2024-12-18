USE db_board;  				 -- DB생성
CREATE TABLE article (  	 -- 테이블생성
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(30),
	contents VARCHAR(500),
	writer VARCHAR(20),
	reg_date TIMESTAMP DEFAULT NOW()
);
select * from article; 		-- 조회
DESC article; 
insert into article (title, contents, writer)  		-- 테이블 내 데이터 생성
values ('제목', '내용1', '작성자1'); 
insert into article (title, contents, writer)
values ('제목2', '내용2', '작성자2');
select id,title,contents					-- 컬럼별 조회
from article where id=1;
update article  	-- 테이블 내 데이터 수정
set contents = '내용수정1'
where id = 1;
update article
set title = '제목1'
where id = 1;
update article
set contents = '내용수정2'
where id = 2;
delete from article		-- 테이블 내 데이터 삭제
where id = 1;
INSERT INTO article(title, contents, writer) VALUES('한 번 배워서 어디서나 사용하기','기술 스택의 나머지 부분에는 관여하지 않기 때문에, 기존 코드를 다시 작성하지 않고도 React의 새로운 기능을 이용해 개발할 수 있습니다.','red');
INSERT INTO article(title, contents, writer) VALUES('상태를 가지는 컴포넌트','컴포넌트는 this.props를 이용해 입력 데이터를 다루는 것 외에도 내부적인 상태 데이터를 가질 수 있습니다. 이는 this.state로 접근할 수 있습니다.','orange');
INSERT INTO article(title, contents, writer) VALUES('애플리케이션','props와 state를 사용해서 간단한 Todo 애플리케이션을 만들 수 있습니다.','yellow');
INSERT INTO article(title, contents, writer) VALUES('외부 플러그인을 사용하는 컴포넌트','React는 유연하며 다른 라이브러리나 프레임워크를 함께 활용할 수 있습니다. 이 예제에서는 외부 마크다운 라이브러리인 remarkable을 사용해 <textarea>의 값을 실시간으로 변환합니다.','green');
INSERT INTO article(title, contents, writer) VALUES('자습서를 시작하기 전에','우리는 이 자습서에서 작은 게임을 만들겁니다. 게임을 만들고 싶지 않아서 자습서를 건너뛰고 싶을 수 있습니다. 그래도 한번 해보세요!','blue');
INSERT INTO article(title, contents, writer) VALUES('브라우저에 코드 작성하기','먼저 새 탭에서 초기 코드를 열어주세요. 새 탭은 비어있는 틱택토 게임판과 React 코드를 보여줄 것입니다. 우리는 자습서에서 React 코드를 편집할 것입니다.','navy');
INSERT INTO article(title, contents, writer) VALUES('React란 무엇인가요?','React는 몇 가지 종류의 컴포넌트를 가지지만 우리는 React.Component의 하위 클래스를 사용해보겠습니다.','purple');
COMMIT;