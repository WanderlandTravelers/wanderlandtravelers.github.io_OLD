import React from 'react'


export default class ResponsiveImage extends React.Component {
  render () {
    const blurredStyle = {
      position: 'fixed',
      left: 0,
      right: 0,
      zIndex: -1,

      display: 'block',
      backgroundImage: `url('${this.props.image.src}')`,
      width: '1200px',
      height: '800px',

      WebkitFilter: 'blur(5px)',
      MozFilter: 'blur(5px)',
      OFilter: 'blur(5px)',
      msFilter: 'blur(5px)',
      filter: 'blur(5px)'
    };
    return (
      <div key={this.props.dataIndex} className="responsive-background-image">
        <img srcSet={this.props.image.srcset} src={this.props.image.src} />
        <div className="blurred-image" style={blurredStyle}></div>
      </div>
    );
  }
}
