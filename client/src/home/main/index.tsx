import * as React from 'react'
import styleable, { StyleableProps } from 'react-styleable'
import Header from '../header'
import HairSection from '../hairSection'
import Bio from '../bio'
import NailsSection from '../nailsSection'
import LashesSection from '../lashesSection'
import * as css from "./main.mod.scss"

interface MainProps extends StyleableProps {}

const Main = (props: MainProps) => {
  return (
    <div className={props.css.main}>
      <Header />
      <HairSection />
       <Bio /> 
      <NailsSection />
      <LashesSection />
    </div>
  )
}

export default styleable(css)(Main)