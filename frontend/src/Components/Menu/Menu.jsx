import React, { Component } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import ReactSVG from 'react-svg'

const Menu = () => {
  return (
    <div className={'menuContainer'}>
      <Link to='/' className='menuElement homeIcon'><ReactSVG src="./../../Assets/Icons/home.svg" /></Link>
      <Link to='/rating' className='menuElement ratingIcon'><ReactSVG src="./../../Assets/Icons/chart.svg" /></Link>
    </div>
  )
}


export default Menu

// class Menu extends Component {
//   render() {
//       return(
//           <div className="menuContainer">
//               {this.props.children}
//           </div>
//       );
//   }
// }

// export default Menu
