const configs = {
  development: {
    api: '//development.com',
    static: '',
  },
  debug: {
    api: '//development.com',
    static: '//xiaoy.fed.ywwl.com/',
  },
  test: {
    api: '//test.com',
    static: '',
  },
  production: {
    api: '//production.com',
    static: '',
  },
}

const mock = {
  api: 'http://rap.ywwl.com:8080/mockjsdata/65',
  // 本机开发环境是否走mock 手动修改只在开发环境生效
  isRun: true,
}

const BASE_URL = process.env.NODE_ENV === 'development' && mock.isRun ? mock.api : configs[process.env.API_ENV].api

export default {
  BASE_URL,
  static: configs[process.env.API_ENV].static,
  MOCK: mock,
  isMock: mock.isRun,
}
