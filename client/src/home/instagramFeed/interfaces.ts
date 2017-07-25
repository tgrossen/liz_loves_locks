export interface InstagramMediaResult {
  items: InstagramItem[]
}

export interface InstagramItem {
  id: string
  images: InstagramImage
  caption: InstagramCaption
}

interface InstagramCaption {
  text: string
  createdTime: string
}

interface InstagramImage {
  standard_resolution: InstagramImageInfo
}

interface InstagramImageInfo {
  url: string
}