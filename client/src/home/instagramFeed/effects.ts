import axios from 'axios'
import { InstagramMediaResult } from "src/home/instagramFeed/interfaces";

export const fetchInstagramMedia = async function (userId: string): Promise<InstagramMediaResult> {
  try {
    return (await axios.get(`https://www.instagram.com/${userId}/media/`)).data
  }
  catch(error) {
    return null
  }
}