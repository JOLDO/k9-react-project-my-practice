import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import Ex4 from '../ex/Ex4';
import Ex3 from '../ex/Ex3';
import usePromise from './usePromise';
import PdItemFood from './PdItemFood';
import YugiohItem from './YugiohItem';
import CarItem from './CarItem';
import ImageItem from './ImageItem';
import ThemeItem from './ThemeItem';
import DigimonItem from './DigimonItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// YOUR_API_KEY 자리에 newsapi.org에서 발급받은 키를 입력하세요
//.env 파일에서 읽어올때 react가 vite 환경이라면 VITE_라는 이름을 앞에 붙여 줘야 함
const apiKey = import.meta.env.VITE_News_API_KEY;
const publicDataApiKey = import.meta.env.VITE_Public_Data_API_KEY;
const publicThemeApiKey = import.meta.env.VITE_Public_Theme_API_KEY;
const publicCultureApiKey = import.meta.env.VITE_Public_Culture_API_KEY;

const NewsList = ({ category = 'all' }) => {
  const sendData = () => {
    const query = category === 'all' ? '' : `&category=${category}`;

    if (category === 'busanFood') {
      return axios.get(
        `http://apis.data.go.kr/6260000/FoodService/getFoodKr?ServiceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      );
    } else if (category === 'busanTour') {
      return axios.get(
        `https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=100&resultType=json`,
      );
    } else if (category === 'busanTheme') {
      return axios.get(
        `https://busan-food.openapi.redtable.global/api/rstr?serviceKey=${publicThemeApiKey}&pageNo=1`,
      );
    } else if (category === 'car') {
      return axios.get(
        `https://api.data.go.kr/openapi/tn_pubr_public_car_rental_api?serviceKey=${publicDataApiKey}&pageNo=1&numOfRows=10&type=json&=`,
      );
    } else if (category === 'img') {
      return axios.get(
        `https://busan-food.openapi.redtable.global/api/rstr/img?serviceKey=${publicThemeApiKey}&rstr_id=1089`,
      );
    } else if (category === 'yugioh') {
      return axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0`,
      );
    } else if (category === 'digimon') {
      return axios.get(`https://digimon-api.vercel.app/api/digimon`);
    } else {
      return axios.get(
        `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`,
      );
    }
  };
  //커스텀 훅스 사용 전 코드
  //   const [articles, setArticles] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       setError(null);
  //       try {
  //         // category가 'all'이면 카테고리 파라미터 생략
  //         const query = category === 'all' ? '' : `&category=${category}`;
  //         const response = await axios.get(
  //           `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`,
  //         );
  //         setArticles(response.data.articles);
  //       } catch (e) {
  //         setError('뉴스를 불러오는 데 실패했습니다.');
  //         console.log(e);
  //       }
  //       setLoading(false);
  //     };
  //     fetchData();
  //   }, [category]); // category 바뀔 때마다 재호출

  //커스텀 훅스 사용 후 코드
  const [loading, resolved, error] = usePromise(sendData, [category]);
  if (loading)
    return (
      <NewsListBlock>
        <p>⏳ 뉴스를 불러오는 중...</p>
      </NewsListBlock>
    );
  if (error)
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>{error}</p>
      </NewsListBlock>
    );
  if (!resolved) return null;

  const data =
    category === 'busanFood'
      ? resolved.data.getFoodKr?.item || []
      : category === 'busanTour'
        ? resolved.data.getAttractionKr?.item || []
        : category === 'busanTheme'
          ? resolved.data.body || []
          : category === 'car'
            ? resolved.data.response?.body?.items || []
            : category === 'img'
              ? resolved.data.body || []
              : category === 'yugioh'
                ? resolved.data.data || []
                : category === 'digimon'
                  ? resolved.data || []
                  : resolved.data.articles || [];

  if (data.length === 0) {
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>표시할 데이터가 없습니다.</p>
      </NewsListBlock>
    );
  }

  return (
    <NewsListBlock>
      {category === 'busanFood'
        ? data.map((data, index) => <PdItemFood key={index} article={data} />)
        : category === 'busanTour'
          ? data.map((data, index) => <PdItemFood key={index} article={data} />)
          : category === 'busanTheme'
            ? data.map((data, index) => (
                <ThemeItem key={index} article={data} />
              ))
            : category === 'car'
              ? data.map((data, index) => (
                  <CarItem key={index} article={data} />
                ))
              : category === 'img'
                ? data.map((data, index) => (
                    <ImageItem key={index} article={data} />
                  ))
                : category === 'yugioh'
                  ? data.map((data, index) => (
                      <YugiohItem key={index} article={data} />
                    ))
                  : category === 'digimon'
                    ? data.map((data, index) => (
                        <DigimonItem key={index} article={data} />
                      ))
                    : data.map((data) => (
                        <NewsItem key={data.url} article={data} />
                      ))}
    </NewsListBlock>
  );
};

export default NewsList;
