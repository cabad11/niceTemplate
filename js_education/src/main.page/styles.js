import styled from 'styled-components';

export const HelloWorld = styled.div`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  font-size: 24px;
  animation: rotate 6s linear infinite;
  height: fit-content;
  width: fit-content;
`;
