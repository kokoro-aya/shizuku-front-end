import request from 'umi-request';

export const submit = (data: any) => {
  return request('http://127.0.0.1:4729/aqua', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const shutdown = () => {
  return request('http://127.0.0.1:4729/aqua/shutdown', {
    method: 'POST',
    body: '',
  });
};
