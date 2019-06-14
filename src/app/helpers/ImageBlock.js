import React from 'react'

export default class ImageBlock extends React.PureComponent {
  render() {
    const src = this.props.src.split('/')

    const slug = src[src.length - 1]

    return (
      <figure className="component-image">
        <figure className="component-image__container">
          <img
            src={this.props.src}
            title={this.props.alt}
            alt={this.props.title}
          />
        </figure>
        <figcaption className="img-caption">{this.props.title}</figcaption>
      </figure>
    )
  }
}
