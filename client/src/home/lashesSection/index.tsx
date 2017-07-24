import * as React from 'react'
import ServiceSection from '../serviceSection'
import { ServiceBoxProps } from '../serviceSection/serviceBox'

const LashesSection = () => {
  const title = "LASHES"
  const boxes: ServiceBoxProps[] = [
    { type: 'image', info: 'img/lashes1.jpg' },
    { type: 'header', info: 'Any Length' },
    { type: 'image', info: 'img/lashes2.jpg' },
    { type: 'header', info: 'Any Curl' },
    { type: 'info', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { type: 'image', info: 'img/lashes3.jpg' },
    { type: 'info', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { type: 'image', info: 'img/lashes4.jpg' }
  ]

  return (
    <ServiceSection title={title} boxes={boxes} />
  )
}

export default LashesSection