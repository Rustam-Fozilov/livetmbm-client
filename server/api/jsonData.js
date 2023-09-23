import fs from 'fs'
import { sendStream } from 'h3'

export default defineEventHandler((event) => {

  const r = './www.txt'
  return {
    hello: sendStream(event, fs.createReadStream(r))
  }
})
