import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`,fontSize: `18px`,color: `rgba(0,0,0,0.6)` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)


export default function Layout({ children }) {
    return (
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem`,textAlign:`center` }}>
        <header style={{ marginBottom: `1.5rem`,display:`flex`,alignItems:`center` }}>
        <img src="/static/logoPro.png" style={{ width: `80px` ,height: `80px`}} />
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h1 style={{ display: `inline`,marginLeft:`12px`,fontSize:`24px`,fontWeight:`bold` }}>文档扫描仪Pro</h1>
          </Link>
          <div style={{ flex:1 }}></div>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">隐私政策</ListLink>
            <ListLink to="/contact/">支持</ListLink>
          </ul>
        </header>
        {children}
      </div>
    )
  }
