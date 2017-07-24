import * as React from 'react'
import ServiceSection from '../serviceSection'
import { ServiceBoxProps } from '../serviceSection/serviceBox'

const NailsSection = () => {
  const title = "NAILS"
  const boxes: ServiceBoxProps[] = [
    { type: 'header', info: 'Gel' },
    { type: 'image', info: 'img/nails1.jpg' },
    { type: 'header', info: 'Acrylic' },
    { type: 'image', info: 'img/nails2.jpg' },
    { type: 'image', info: 'img/nails3.jpg' },
    { type: 'info', info: 'Gel nails opened up a whole new world of creativity for Elizabeth, as she developed a passion for nail art. Elizabeth employs lines such as OPI, Gelish, and Artistic Colour.' },
    { type: 'image', info: 'img/nails4.jpg' },
    { type: 'info', info: 'Acrylic nails are a newer interest, but Elizabeth is working on perfecting her techniques to create beautifully shaped extensions.' }
  ]

  return (
    <ServiceSection title={title} boxes={boxes} />
  )
}

export default NailsSection