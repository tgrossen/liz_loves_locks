import * as React from 'react'
import styleable, { StyleableProps } from 'react-styleable'
import { InstagramItem } from 'src/home/instagramFeed/interfaces'
import * as css from './instagramImage.mod.scss'

interface InstagramImageProps extends StyleableProps {
  item: InstagramItem
  userId: string
  selectedImageId: string
  selectInstagramImage: (imageId: string) => void
}

const InstagramImage = (props: InstagramImageProps) => {
  return (
    <li className={props.css.instagramImage} onClick={() => props.selectInstagramImage(props.item.id)}>
      <img src={props.item.images.standard_resolution.url} />
      {props.selectedImageId == props.item.id &&
        <div className={props.css.overlay}>
          <p>
            {props.item.caption.text.split('\n').map(item => <span>{item}<br/></span>)}
          </p>
        </div>}
    </li>
  )
}

export default styleable(css)(InstagramImage)