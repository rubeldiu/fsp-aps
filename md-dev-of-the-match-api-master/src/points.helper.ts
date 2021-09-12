import { TeamPicksPlayers } from './team';
import { SUB_GOALKEEPER_POSITION_ON_PICKS } from './team';

export function calculatePoints(players: TeamPicksPlayers): number {
  return players
    .slice(0, SUB_GOALKEEPER_POSITION_ON_PICKS)
    .reduce((acc, player) => acc + player.points, 0);
}
