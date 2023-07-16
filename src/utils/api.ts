import { URL } from '../utils/constants';

export const sendCall =  async (name:string, phone:string, message:string) => {
  const response = await fetch(`${URL.MAIN_API}/send-call`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, phone, message, }),
  });
  const json = await response.json();
  return response.ok ? json : Promise.reject(response);
}