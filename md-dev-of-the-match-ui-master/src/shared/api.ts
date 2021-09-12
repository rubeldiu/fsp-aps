import axios from 'axios';

const API_BASE_ENDPOINT = 'http://localhost:5000';

async function getPoints(id: number): Promise<number> {
  const result: { status: number; data: any } = await axios.get(
    `${API_BASE_ENDPOINT}/team-points/${id}`,
  );

  return result.data.points;
}

async function getTeam(id: number): Promise<any> {
  const result: { status: number; data: any } = await axios.get(
    `${API_BASE_ENDPOINT}/team-picks/${id}`,
  );

  return result.data.myTeam;
}

export const api = {
  getPoints,
  getTeam,
};
