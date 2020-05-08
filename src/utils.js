import axios from 'axios'
import { Toast } from 'antd-mobile';

function uuid(len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [], i;
  radix = radix || chars.length;
  if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
  } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
              r = 0 | Math.random()*16;
              uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
          }
      }
  }
  return uuid.join('');
}

const req = axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? 'http://192.168.1.108:3001' : 'http://zhikume.cn/api/v0'
  baseURL: 'http://zhikume.cn/api/v0'
});

req.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

req.interceptors.response.use(function (response) {
  if(response.data.state === 200) {
    return response.data
  }else {
    Toast.fail(response.data.msg || '网络错误', 3)
  }
}, function (error) {
  return Promise.reject(error);
});

const previewURL = ''

const pid = '516c80c3-ae19-4eaf-923b-a1e902493183'

export {
  uuid,
  req,
  previewURL,
  pid
}