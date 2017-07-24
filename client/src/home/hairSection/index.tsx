import * as React from 'react'
import ServiceSection from '../serviceSection'
import { ServiceBoxProps } from '../serviceSection/serviceBox'

const HairSection = () => {
  const title = "HAIR"
  const boxes: ServiceBoxProps[] = [
    { type: 'image', info: 'img/hair1.jpg' },
    { type: 'header', info: 'Cuts' },
    { type: 'image', info: 'img/hair2.jpg' },
    { type: 'header', info: 'Colors' },
    { type: 'info', info: 'All cuts present an opportunity for artistic enhancement, in Elizabeth\'s opinion. Although the majority of her cut clients are currently males, she hopes to expand her clientele to include more females as well.' },
    { type: 'image', info: 'img/hair3.jpg' },
    { type: 'info', info: 'Elizabeth specializes in the Tigi colour line, and enjoys lightening, gray coverage, and specialty services like balayage and babylights.' },
    { type: 'image', info: 'img/hair4.jpg' }
  ]

  return (
    <ServiceSection title={title} boxes={boxes} />
  )
}

export default HairSection