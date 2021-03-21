import React, { Component } from 'react'
import { LinkToc, Tag } from '../components/Elem'
// import styled from 'styled-components';
import AceEditor from '../components/Ace'
import App from '../components/App'
const Toc_style = `
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:center;
    align-content:center;
    justify-content:flex-start;
    @media screen and (min-width: 601px) {
       height: 650px; //two column
    }
`

export default class Toc extends Component {
  constructor() {
    super()
    this.state = {
      style_box: Toc_style,
      mode: 'css',
      displayAce: 'none',
    }
  }
  onChange = newValue => {
    this.setState({
      style_box: newValue,
    })
  }

  render() {
    return (
     <App>
      <div>
        <div className="content" style={{ position: 'relative' }}>
          <h1 className="content">Table of Contents</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              position: 'absolute',
              zIndex: 100,
              top: 0,
              right: 0,
            }}
          >
            <button
              onClick={() => {
                if (this.state.displayAce === 'none') {
                  this.setState({ displayAce: 'block' })
                } else {
                  this.setState({ displayAce: 'none' })
                }
              }}
            >
              edit style
            </button>
            <AceEditor
              ref="editor"
              style={{
                display: this.state.displayAce,
                width: '350px',
                height: '250px',
                border: 'solid gray 5px',
              }}
              mode={this.state.mode}
              theme="github"
              value={this.state.style_box}
              onChange={this.onChange}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
            />
          </div>
          <Tag css={this.state.style_box}>
            <LinkToc href="/no_layout/">no layout</LinkToc>
            <LinkToc href="/display/">the &quot;display&quot; property</LinkToc>

            <LinkToc href="/margin_auto/">margin: auto;</LinkToc>

            <LinkToc href="/max_width/">max-width</LinkToc>

            <LinkToc href="/box_model/">the box model</LinkToc>

            <LinkToc href="/box_sizing/">box-sizing</LinkToc>

            <LinkToc href="/position/">position</LinkToc>

            <LinkToc href="/position_example/">position example</LinkToc>

            <LinkToc href="/float/">float</LinkToc>

            <LinkToc href="/clear/">clear</LinkToc>

            <LinkToc href="/clearfix/">the clearfix hack</LinkToc>

            <LinkToc href="/float_layout/">float layout example</LinkToc>

            <LinkToc href="/percent/">percent width</LinkToc>

            <LinkToc href="/media_queries/">media queries</LinkToc>

            <LinkToc href="/inline_block/">inline-block</LinkToc>

            <LinkToc href="/inline_block_layout/">inline-block layout</LinkToc>

            <LinkToc href="/column/">column</LinkToc>

            <LinkToc href="/flexbox/">flexbox</LinkToc>

            <LinkToc href="/frameworks/">css frameworks</LinkToc>

            <LinkToc href="/about/">about this site</LinkToc>
          </Tag>
        </div>
      </div></App>
    )
  }
}
