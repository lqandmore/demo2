let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'develpment') {
  BASE_URL = 'http://152.136.185.210:5000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://152.136.185.210:5000/'
}

export { BASE_URL, TIME_OUT }
