import React, { Component } from 'react'
import Highlight from 'react-highlight'
import Elem, { Tag, NavWrapper, LinkPrev } from '../components/Elem'
import App from '../components/App'
const css = `.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}
.box2 {
  float: right;
  width: 200px;
  height: 200px;
  margin: 1em;
}
.after-box {
  clear:both;
  /*clear: left;*/
  /*clear:right;*/
}`
export default class clear extends Component {
  constructor() {
    super()
    this.state = {
      css: css,
    }
  }
  cssChange = newValue => {
    this.setState({
      css: newValue,
    })
  }

  render() {
    return (
      <App>
      <React.Fragment>
        <h1 className="content">clear</h1>
        <p className="content">
          The <code>clear</code> property is important for controlling the
          behavior of floats. Compare these two examples:
        </p>
        <figure className="highlight">
          <Highlight>{`<div className="box">...</div>
<section>...</section>`}</Highlight>
        </figure>
        <figure className="highlight">
          <Highlight>{`.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}`}</Highlight>
        </figure>
        <Tag className="content" css={this.state.css}>
          <div className="content">
            <Elem className="box">
              <p>I feel like I&apos;m floating!</p>
            </Elem>
            <Elem tag="section" green>
              <p>
                In this case, the <code>section</code> element is actually after
                the <code>div</code>. However, since the <code>div</code> is
                floated to the left, this is what happens: the text in the{' '}
                <code>section</code> is floated around the <code>div</code> and
                the <code>section</code> surrounds the whole thing. What if we
                wanted the <code>section</code> to actually appear after the
                floated element?
              </p>
            </Elem>
          </div>
          <figure className="highlight">
            <Highlight>{`.after-box {
  clear: left;
}
`}</Highlight>
          </figure>
          <Elem className="box">
            <p>I feel like I&apos;m floating!</p>
          </Elem>
          <Elem tag="section" green className="after-box">
            <p>
              Using <code>clear</code> we have now moved this section down below
              the floated <code>div</code>. You use the value <code>left</code>{' '}
              to clear elements floated to the left. You can also clear{' '}
              <code>right</code> and <code>both</code>.
            </p>
          </Elem>
          <h2 className="content">both</h2>
          <p>
            Try clear <code>right</code> and <code>both</code>.
          </p>

          <Elem className="box">
            <p>I&apos;m floating left!</p>
          </Elem>
          <Elem className="box2">
            <p>I&apos;m floating right!</p>
          </Elem>
          <p>I'm normal paragraph after float.</p>
          <Elem tag="section" green className="after-box">
            <p>I'm box after float.</p>
          </Elem>
        </Tag>
      </React.Fragment>
      <NavWrapper>
          <LinkPrev href="/float/">Previous</LinkPrev>
          <LinkPrev href="/clearfix/">Next</LinkPrev>
        </NavWrapper>
        <footer>6 / 20</footer>
      </App>
    )
  }
}
