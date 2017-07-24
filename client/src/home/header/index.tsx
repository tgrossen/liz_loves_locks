import * as React from 'react'
import styleable, { StyleableProps } from 'react-styleable'
import SVGInline from 'react-svg-inline'
import Svgs from '../svgs'
import * as css from "./header.mod.scss"

interface HeaderProps extends StyleableProps {}

const Header = (props: HeaderProps) => {
  return (
    <div className={props.css.header}>
      <div className={props.css.headerBar}>
        <div className={props.css.shears}>
          <SVGInline svg={Svgs["shears"]} />
        </div>
        <h1>HOME SALON</h1>
      </div>
      <div className={props.css.logoArea}>
        <div className={props.css.logo}>
          <SVGInline svg={Svgs["logo"]} />
        </div>
      </div>
      <div className={props.css.headerDetails}>
        <ul>
          <li className={props.css.phone}>
            <SVGInline svg={Svgs["phone"]} />
            <div className={props.css.info}>
              <h3>949.633.7512</h3>
              <h4>phone|sms</h4>
            </div>
          </li>
          <li className={props.css.location}>
            <SVGInline svg={Svgs["location"]} />
            <div className={props.css.info}>
              <h2>Lehi, UT</h2>
            </div>
          </li>
          <li className={props.css.instagram}>
            <a href="https://www.instagram.com/liz_loves_locks/" target="_blank">
              <SVGInline svg={Svgs["instagram"]} />
              <div className={props.css.info}>
                <h3>liz_loves_locks</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default styleable(css)(Header)