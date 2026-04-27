const OthComponent = ({ name = '---', children, food }) => {
  //default값을 지정해줄수 있음
  return (
    <div>
      안녕하세요 이름은 {name}이고, 좋아하는 음식은 {food}입니다.
      <br />
      주소 : {children}
    </div>
  );
};

// OthComponent.defaultProps = { name: '---' }; //예전 방식
export default OthComponent;
