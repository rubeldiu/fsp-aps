import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Loading, SubTitle, HighlightText, Error } from '../shared';
import { api } from '../shared/api';

const Container = styled.div``;

export function TeamPoints() {
  let { id } = useParams() as any;

  const { isLoading, error, data: points } = useQuery(
    'teamPoints',
    () => api.getPoints(id),
    { retry: 0 },
  );

  if (error) {
    return (
      <Error
        message={
          'Request failed, if you are sure the team exists please try again in a few minutes'
        }
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <SubTitle>Team points</SubTitle>
      <HighlightText>{points}</HighlightText>
    </Container>
  );
}
