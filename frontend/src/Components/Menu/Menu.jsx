import React, { Component } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import ReactSVG from 'react-svg'
import homeIcon from '../../Assets/Icons/home.svg'
import chartIcon from '../../Assets/Icons/chart.svg'
import plusIcon from '../../Assets/Icons/plus3.svg'
import userIcon from '../../Assets/Icons/user1.svg'

const Menu = () => {
  return (
    <div className={'menuContainer'}>
        <Link to='/' className='menuElement'><ReactSVG className="homeIcon" src={homeIcon} /></Link>
        <Link to='/rating' className='menuElement'><ReactSVG className="ratingIcon" src={chartIcon} /></Link>
        <Link to='/404' className='menuElement'><ReactSVG className="ratingIcon" src={plusIcon} /></Link>
        <Link to='/signin' className='menuElement userIcon'><ReactSVG src={userIcon} /></Link>
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
