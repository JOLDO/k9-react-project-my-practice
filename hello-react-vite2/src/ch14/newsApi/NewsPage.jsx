import { useParams } from 'react-router-dom';
import DummyJson from '../dummyJson/DummyJson';
import Ex1 from '../ex/Ex1';
import Jsonplaceholder from '../jsonplaceholder/Jsonplaceholder';
import Ex2 from '../ex/Ex2';
import Ex4 from '../ex/Ex4';
import NewsList from './NewsList';
import Categories from './Categories';
import Ex5 from '../ex/Ex5';

const categoryNames = {
  all: '전체보기',
  business: '비즈니스',
  entertainment: '엔터테인먼트',
  health: '건강',
  science: '과학',
  sports: '스포츠',
  technology: '기술',
  busanFood: '부산 맛집 서비스',
  busanTour: '부산 관광 서비스',
  busanTheme: '부산 테마 서비스',
  car: '렌터카 서비스',
  img: '부산 테마 서비스 이미지',
  yugioh: '유희왕',
  digimon: '디지몬',
};

const NewsPage = () => {
  // URL: /technology → params.category = 'technology'
  // URL: /           → params.category = undefined
  const { category } = useParams();
  const currentCategory = category || 'all';

  const categoryText = categoryNames[currentCategory] || '전체보기';

  return (
    <>
      {/* <h1>ch14 - API 테스트</h1>
      <h2>dummyJson</h2>
      <DummyJson></DummyJson>
      <h2>실습1</h2>
      <Ex1 />
      <br />
      <br />
      <hr></hr>
      <h2>jsonPlaceHolder</h2>
      <Jsonplaceholder />
      <h2>실습2</h2>
      <Ex2 />
      <br />
      <br />
      <hr></hr>
      <h2>newsApi</h2>
      <NewsList category="all" />
      <h2>실습4</h2>
      <Ex4 category="all" />
      <br />
      <br />
      <hr />
      <h2>카테고리 및 라우팅</h2>
      <Categories />
      <h2>실습5</h2>
      <Ex5 category={currentCategory} /> */}
      <Categories />
      <NewsList category={currentCategory} />
    </>
  );
};

export default NewsPage;
