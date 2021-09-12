import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Loading, SubTitle, HighlightText, Error } from '../shared';
import { api } from '../shared/api';
import { Team } from './Team';

const Container = styled.div`
  .body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ,
  .pitch {
    background: linear-gradient(
      to bottom,
      #5d9634,
      #5d9634 50%,
      #538c2b 50%,
      #538c2b
    );
    background-size: 80% 10vmin;
    border: solid 1px #fff;
    height: 100vmin;
    position: relative;
    width: 75vmin;
  }
`;

export function TeamPicks() {
  let { id } = useParams() as any;
  const {
    isLoading,
    error,
    data: myTeam,
  } = useQuery('team', () => api.getTeam(id), { retry: 0 });

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
      <SubTitle>Team picks</SubTitle>
      <div className="body">
        <div className="pitch">
          {myTeam?.map((item: any) => (
            <Team key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
