import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 4000,
  duration: '30s'
  // stages: [
  //   { duration: '30s', target: 100 },
  //   { duration: '60s', target: 2000},
  //   { duration: '30s', target: 50 }
  // ]
};

export default function () {
  const url = 'http://localhost:8081/houses/';
  const payload = JSON.stringify({
    imgurl: 'sdcimg-404',
    location: 'San Francisco',
    type: 'apartment',
    title: 'Cozy',
    cost: 100,
    zip: 94016
  });
  const params = { headers: { 'Content-Type': 'application/json' } };
  let postReq = http.post(url, payload, params);
  check(postReq, {
    'post: status was 201': r => r.status === 201,
    'post: transaction time OK': r => r.timings.duration < 1000
  });
  sleep(1);
}