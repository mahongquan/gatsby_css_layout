import React, { Component } from 'react'
import Elem, { Tag, NavWrapper, LinkPrev } from '../components/Elem'
class No_layout extends Component {
  render() {
    return (
      <div>
        <h1 className="content">no layout</h1>

        <p>
          Having no layout whatsover is almost ok if all you want is one big
          column of content. However, if a user makes the browser window really
          wide, it gets kind of annoying to read: after each line your eyes have
          a long distance to travel right-to-left to the next line. Try resizing
          your browser to see what I mean!
        </p>

        <p>
          Before we fix this problem, let&apos;s make sure we&apos;re clear on
          the very important <code>display</code> property.
        </p>
        <NavWrapper>
          <LinkPrev href="/index">Previous</LinkPrev>
          <LinkPrev href="/display/">Next</LinkPrev>
        </NavWrapper>
        <footer>1 / 19</footer>
      </div>
    )
  }
}
export default () => <No_layout />
