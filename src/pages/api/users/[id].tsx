/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query.id;

  console.log(id);

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Emellyn' },
    { id: 3, name: 'Cecília' }
  ];
  return response.json(users);
};
