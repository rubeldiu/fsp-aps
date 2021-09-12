import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Logo, Title } from './shared';
import { TeamPoints } from './team-points';
import { TeamPicks } from './team-picks';

const queryClient = new QueryClient();

export const Body = styled.div`
  background-color: #2e3239;
  height: 100%;
  width: 100%;
`;

const AppMain = styled.main`
  padding: 20px;
`;

export const AppHeaderUI = styled.header`
  padding: 20px;
`;

const TitleContainer = styled.div`
  margin-left: 120px;
  display: inline-block;
`;

export function AppHeader() {
  return (
    <AppHeaderUI>
      <Logo />
      <TitleContainer>
        <Title>Dev of the match</Title>
      </TitleContainer>
    </AppHeaderUI>
  );
}

export function App() {
  return (
    <Body>
      <QueryClientProvider client={queryClient}>
        <AppHeader />
        <AppMain>
          <Router>
            <Switch>
              <Route path="/points/:id">
                <TeamPoints />
              </Route>
              <Route path="/team/:id">
                <TeamPicks />
              </Route>
            </Switch>
          </Router>
        </AppMain>
      </QueryClientProvider>
    </Body>
  );
}
