import express, { Request, Response } from 'express';
import cors from 'cors';

import { PlayerDAO } from './player.dao';
import { NotFoundError } from './shared/not-found.error';
import { TeamDAO } from './team.dao';
import { TeamService } from './team.service';

const app = express();
const port = 5000;

function buildDependencies(): { teamService: TeamService } {
  const playerDAO = new PlayerDAO();
  const teamDAO = new TeamDAO();
  const teamService = new TeamService(teamDAO, playerDAO);

  return {
    teamService,
  };
}

const { teamService } = buildDependencies();

app.use(cors());

app.get('/team-points/:teamId', (req: Request, res: Response) => {
  const teamId = Number(req.params.teamId);
  const points = teamService.getPoints(teamId);

  res.send({
    points,
  });
});

app.get('/team-picks/:teamId', (req: Request, res: Response) => {
  const teamId = Number(req.params.teamId);
  const picks = teamService.getPicks(teamId);

  //implement functionality

  //Goolkeeper;
  const goolkepper = picks.filter(
    (element) => element.position === 'GKP' && element.hasPlayed === true,
  );

  //Deffenders
  let newDeffenders = [];
  let deffenders = picks.filter((element) => {
    if (element.position === 'DEF' && element.hasPlayed === true) {
      return element;
    }
  });
  if (deffenders.length < 3) {
    newDeffenders = picks.filter((element) => {
      if (element.position === 'DEF') {
        return element;
      }
    });
    deffenders = newDeffenders.slice(0, 3);
  }

  //Midfilders
  let newMidfielders = [];
  let midfielders = picks.filter(
    (element) => element.position === 'MID' && element.hasPlayed === true,
  );
  if (midfielders.length < 2) {
    newMidfielders = picks.filter((element) => {
      if (element.position === 'MID') {
        return element;
      }
    });
    midfielders = newMidfielders.slice(0, 2);
  }

  //Forward
  let newForward = [];
  let forward = picks.filter(
    (element) => element.position === 'FWD' && element.hasPlayed === true,
  );
  if (forward.length < 1) {
    newForward = picks.filter((element) => {
      if (element.position === 'FWD') {
        return element;
      }
    });
    forward = newForward.slice(0, 1);
  }
  const myTeam = [...goolkepper, ...deffenders, ...midfielders, ...forward];

  res.send({
    myTeam,
  });
});

app.use(
  (
    error: Error | NotFoundError,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: () => void,
  ) => {
    console.error(error);

    if (error instanceof NotFoundError) {
      res.status(404).end();
      return;
    }

    res.status(500).end();
  },
);

app.listen(port, () => {
  console.info(`Example app listening at http://localhost:${port}`);
});
