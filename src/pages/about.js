import React, { Component } from 'react'
import { NavWrapper, LinkPrev } from '../components/Elem'
import App from '../components/App'

export default class about extends Component {
  render() {
    return (
      <App>
      <React.Fragment>
        <h1 className="content">about this site</h1>
        <style jsx="true">{`
          #credits {
            text-align: center;
          }
          #credits img {
            vertical-align: middle;
            margin: 0 20px;
            width: 25%;
            max-width: 300px;
          }
          #credits a:hover {
            background-color: transparent;
          }
          .content {
            text-align: center;
          }
        `}</style>
        <div id="credits">
          <a href="http://incompl.com">
            <img alt="Greg Smith" src="/images/author1.jpeg" />
          </a>
          <a href="http://www.isaacdurazo.com/">
            <img alt="Isaac Durazo" src="/images/author2.jpeg" />
          </a>
          <a href="http://bocoup.com">
            <img alt="Bocoup" src="/images/bob.png" />
          </a>
        </div>
        <div className="content">
          Written and built by <a href="http://incompl.com">Greg Smith</a>.
          Design by <a href="http://www.isaacdurazo.com/">Isaac Durazo</a>. We
          work at <a href="http://bocoup.com">Bocoup</a>.
        </div>

        <div className="content">
          <a href="https://github.com/incompl/csslayoutsite/issues">
            Issues / Feedback
          </a>
        </div>
      </React.Fragment>
<NavWrapper>
          <LinkPrev href="/frameworks/">Previous</LinkPrev>
        </NavWrapper>
      </App>
    )
  }
}
