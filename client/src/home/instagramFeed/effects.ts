import axios from 'axios'
import { InstagramMediaResult } from "src/home/instagramFeed/interfaces";

const url = 'http://lotti.travisgrossen.com:3000/instagram/liz_loves_locks'

export const fetchInstagramMedia = async function (): Promise<InstagramMediaResult> {
  try {
    return (await axios.get(url)).data.data
  }
  catch(error) {
    return null
  }
}