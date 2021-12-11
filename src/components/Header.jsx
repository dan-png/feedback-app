import PropTypes from 'prop-types'


function Header({text, bgColor, textColor}) {
  
  // const headerStyles = {
  //   backgroundColor: bgColor,
  //   color: textColor
  // }

  return (
    <header /*style={headerStyles}*/>
      <div className="container" >
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'FeedBack UI',
  bgColor: '#F6F6F6',
  textColor: '#000',
}

Header.prototype = {
  text:PropTypes.string,
  bgColor:PropTypes.string,
  textColor:PropTypes.string,
}

export default Header


