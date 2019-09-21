import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 3000,
  duration: '60s'
  // stages: [
  //   { duration: '30s', target: 100 },
  //   { duration: '30s', target: 1000 },
  //   { duration: '30s', target: 5000 },
  //   { duration: '30s', target: 50 }
  // ]
};

export default function() {
  const zip = () => Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
  const url = 'http://localhost:8081/houses/';
  let getReq = http.get(`${url}${zip()}`);
  check(getReq, {
    'get: status was 200': r => r.status === 200,
    'get: transaction time OK': r => r.timings.duration < 500
  });
  sleep(1);
}