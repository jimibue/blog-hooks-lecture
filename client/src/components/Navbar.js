
import React, { useContext, } from 'react';
import { AuthContext, } from "../providers/AuthProvider";
import { Menu, Icon, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import { useWindowWidth, } from "../hooks/useWindowWidth";

const Navbar = (props) => {
  const auth = useContext(AuthContext);
  const width = useWindowWidth();


  const rightNavItems = () => {
    const { location, history, } = props;

    if (auth.user) {
      return (
        <Menu.Menu position='right'>
          { width <= 500 ? 
            <Menu.Item>
              <Icon name="bars" />
            </Menu.Item>
          :
            <>
              <Menu.Item>
                { auth.user.email }
              </Menu.Item>
              <Menu.Item
                name='logout'
                onClick={() => auth.handleLogout(history)}
              />
            </>
          }
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  return (
    <div>
      <Menu pointing secondary>
        <Link to='/'>
          <Menu.Item
            name='home'
            id='home'
            active={props.location.pathname === '/'}
          />
        </Link>
        { rightNavItems() }
      </Menu>
    </div>
  )
}

export default withRouter(Navbar);



// import React from "react";
// import { AuthConsumer } from "../providers/AuthProvider";
// import { Menu } from "semantic-ui-react";
// import { Link, withRouter } from "react-router-dom";

// class Navbar extends React.Component {
//   rightNavItems = () => {
//     const {
//       auth: { user, handleLogout },
//       location
//     } = this.props;

//     if (user) {
//       return (
//         <Menu.Menu position="right">
//           <Menu.Item
//             name="logout"
//             onClick={() => handleLogout(this.props.history)}
//           />
//         </Menu.Menu>
//       );
//     } else {
//       return (
//         <Menu.Menu position="right">
//           <Link to="/login">
//             <Menu.Item
//               id="login"
//               name="login"
//               active={location.pathname === "/login"}
//             />
//           </Link>
//           <Link to="/register">
//             <Menu.Item
//               id="register"
//               name="register"
//               active={location.pathname === "/register"}
//             />
//           </Link>
//         </Menu.Menu>
//       );
//     }
//   };

//   render() {
//     return (
//       <div>
//         <Menu pointing secondary>
//           <Link to="/">
//             <Menu.Item
//               name="home"
//               id="home"
//               active={this.props.location.pathname === "/"}
//             />
//           </Link>
//           {this.props.auth.user && (
//             <Link to="/blogs">
//               <Menu.Item
//                 name="blogs"
//                 id="blogs"
//                 active={this.props.location.pathname === "/blogs"}
//               />
//             </Link>
//           )}
//           {this.rightNavItems()}
//         </Menu>
//       </div>
//     );
//   }
// }

// export class ConnectedNavbar extends React.Component {
//   render() {
//     return (
//       <AuthConsumer>
//         {auth => <Navbar {...this.props} auth={auth} />}
//       </AuthConsumer>
//     );
//   }
// }

// export default withRouter(ConnectedNavbar);
