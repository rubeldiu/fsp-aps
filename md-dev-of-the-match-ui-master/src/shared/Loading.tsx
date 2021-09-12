import styled from '@emotion/styled';

const LoadingText = styled.p`
  margin: 0;
  padding: 0;
  color: #8388f4;
  font-family: monospace;
  font-size: 18px;
`;

export function Loading() {
  return <LoadingText>Loading...</LoadingText>;
}
