import request from 'umi-request';

export const submit = (data: any) => {
  return request('http://127.0.0.1:8080/paidiki-xara', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
};
