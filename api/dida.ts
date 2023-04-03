import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'
const username = import.meta.env.USERNAME
const password = import.meta.env.PASSWORD
let token = ''

login(username, password)
const actionMap = {
  'list': 'batch/check/0',
  'completed': 'project/all/completed',
  'trash': 'project/all/trash/pagination'
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { action = 'list' } = req.query
  const fetchRes: any = await fetchData(action).catch(fetchErr => {
    return res.json({ err: JSON.stringify(fetchErr) })
  })
  return res.json(fetchRes.data)
}

function fetchData(action) {
  let appendUrl = actionMap[action]
  return axios({
    url: `https://api.dida365.com/api/v2/${appendUrl}`,
    headers: {
      cookie: `t=${token}`
    }
  })
}

function login(username, password) {
  axios({
    url: 'https://api.dida365.com/api/v2/user/signon?wc=true&remember=true',
    method: 'POST',
    data: {
      username,
      password
    },
    headers: {
      'X-Device': '{"platform":"web","os":"Windows 10","device":"Chrome 102.0.0.0","name":"","version":4226,"id":"628774331068e7035ea5950b","channel":"website","campaign":"","websocket":""}'
    }
  }).then(res => {
    token = res.data.token
  })
}
