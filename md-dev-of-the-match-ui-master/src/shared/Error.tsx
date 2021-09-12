import styled from '@emotion/styled';

const ErrorText = styled.p`
  margin: 0;
  padding: 0;
  color: #8388f4;
  font-family: monospace;
  font-size: 14px;
`;

interface ErrorProps {
  message: string;
}

export function Error({ message }: ErrorProps) {
  return <ErrorText>{message}</ErrorText>;
}
