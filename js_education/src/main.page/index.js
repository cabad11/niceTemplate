import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles';

const Page = () => {
  const [text, setText] = useState();
  useEffect(() => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
    const timer = setInterval(
      () => setText(`Hello world time:${new Date().toLocaleString('en-GB', options)}`),
      1,
    );
    return () => {
      clearInterval(timer);
    };
  });
  console.log(text);
  return <S.HelloWorld>{text}</S.HelloWorld>;
};

export default Page;
