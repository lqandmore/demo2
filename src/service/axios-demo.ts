import axios from 'axios'
// http://ketang.api.test.duia.com/appSkuConfig/getAppMainPageForSku
axios.defaults.baseURL = 'http://ketang.api.test.duia.com/'
axios.post('appSkuConfig/getAppMainPageForSku', {
  data: {
    AppID: 787053744,
    AppVersion: '5.2.8',
    appType: 2,
    platform: 2,
    signature: '0f1d017e0e41da85471d80023b9b174b',
    signtoken: '64ddd315b822622bed6db2067238299e5f7582a4'
  }
})
