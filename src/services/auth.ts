import md5 from 'md5'

const time = new Date().getTime()
const publicKey = '55d38ed11eb30d8266c188e95347d927'
const privateKey = '83d797f0b34d132b9cfc8309213f57672ca1e609'
const hash = md5(time + privateKey + publicKey)
const limit = 18

export default {
  ts: time,
  apikey: publicKey,
  hash,
  limit
}
