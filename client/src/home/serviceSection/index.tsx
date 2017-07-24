import * as React from 'react'
import styleable, { StyleableProps } from 'react-styleable'
import ServiceBox, { ServiceBoxProps } from './serviceBox'
import * as css from './serviceSection.mod.scss'

interface ServiceSectionProps extends StyleableProps {
  title: string
  boxes: ServiceBoxProps[]
}

const ServiceSection = (props: ServiceSectionProps) => {
  return (
    <div className={props.css.serviceSection}>
      <div className={props.css.title}>
        <h1>{props.title}</h1>
      </div>
      <ul>
        {props.boxes.map(box => <ServiceBox {...box} />)}
      </ul>
    </div>
  )
}

export default styleable(css)(ServiceSection)