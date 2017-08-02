import * as React from 'react'
import styleable, { StyleableProps } from 'react-styleable'
import * as css from './serviceBox.mod.scss'

export interface ServiceBoxProps extends StyleableProps {
  type: 'image' | 'header' | 'info'
  info: string
}

const ServiceBox = (props: ServiceBoxProps) => {
  if (props.type == 'image') {
    return (
      <li key={`image-${props.info}`}>
        <img src={props.info} />
      </li>
    )
  }

  if (props.type == 'header') {
    return (
      <li key={`header-${props.info}`}>
        <h2>{props.info}</h2>
      </li>
    )
  }

  if (props.type == 'info') {
    return (
      <li key={`info-${props.info}`}>
        <p>{props.info}</p>
      </li>
    )
  }
}

export default styleable(css)(ServiceBox)