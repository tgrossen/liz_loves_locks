import * as React from 'react'
import styleable, { StyleableProps } from 'react-styleable'
import * as css from './bio.mod.scss'

interface BioProps extends StyleableProps {}

const Bio = (props: BioProps) => {
  const line1 = "Elizabeth Grossen graduated from Renaissance Academie in January 2017, as a licensed cosmetologist. One of her favorite things about cosmetology is the variety of services that she learned, and that she now offers in her home salon, including; nails, hair cutting, hair coloring, hair styling, makeup, eyelash extensions, and waxing."
  const line2 = "Elizabeth is the proud mother of two beautiful children, Charlotte and Zeke, and enjoys reading and writing in her free time."

  return (
    <div className={props.css.bio}>
      <img src="img/elizabeth.jpg"/>
      <div className={props.css.bioInfo}>
        <p>
          {line1}<br /><br />
          {line2}
        </p>
        <h1>Elizabeth</h1>
        <h2>-Licensed Cosmetologist</h2>
      </div>
    </div>
  )
}

export default styleable(css)(Bio)