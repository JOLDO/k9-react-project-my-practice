import { useParams } from 'react-router-dom';
import ExFinalList from './ExFinalList';
import ExFinalPage from './ExFinalPage';

const ExFinalContainer = () => {
  // URL: /technology → params.category = 'technology'
  // URL: /           → params.category = undefined
  const { page } = useParams();

  return (
    <>
      <ExFinalPage />
      {page ? <ExFinalList page={page} /> : <p>페이지 버튼을 눌러!!</p>}
    </>
  );
};

export default ExFinalContainer;
