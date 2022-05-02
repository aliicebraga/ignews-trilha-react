/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const param = request.query;
  console.log(param);

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Emellyn' },
    { id: 3, name: 'Cecília' }
  ];
  return response.json(users);
};
