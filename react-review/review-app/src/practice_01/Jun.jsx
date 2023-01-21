import React from "react";

function Jun(props) {
  return (
    <div>
      <h1>{`Jun의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`Jun의 나이는 ${props.age}살 입니다.`}</h2>
    </div>
  );
}

export default Jun;