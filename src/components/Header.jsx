import "../ui/component style/header.css";
import ICICILombardLogo from "../assets/icons/new logo icici.png";

import { MdOutlineHome } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";

import { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Container,
  NavbarBrand
} from "reactstrap";

import { useLocation, NavLink as RouterLink } from "react-router-dom";
import headerMenu from "./menuConfigue.json";

export default function Header () {

  //  router location
  const location = useLocation();

  // "/workmens-compensation-policy" → "workmens-compensation-policy"
  const pageKey = location.pathname.replace( "/", "" );

  //  get menu from JSON
  const menuData = headerMenu[ pageKey ] || headerMenu.default;
  const { topMenu, mainMenu } = menuData;

  //  state
  const [ activeDropdown, setActiveDropdown ] = useState( null );
  const [ navbarOpen, setNavbarOpen ] = useState( false );

  const toggleNavbar = () => setNavbarOpen( !navbarOpen );

  const handleHover = ( name ) => setActiveDropdown( name );
  const handleLeave = () => setActiveDropdown( null );

  return (
    <>
      {/* ================= TOP BAR ================= */ }
      <div className="bg-light py-2 border-bottom">
        <Container className="d-flex justify-content-between align-items-center">

          {/* LEFT */ }
          <div className="small text-muted d-flex align-items-center gap-2">
            <NavLink
              href="mailto:businessinsurance@icicilombard.com"
              className="top-mail-link d-none d-md-flex"
            >
              <MdOutlineEmail size={ 20 } />
              <span className="mx-1"></span>
              businessinsurance@icicilombard.com
            </NavLink>

            <span className="mx-2 d-none d-md-flex">|</span>

            <span className="top-phone-link d-flex align-items-center">
              <FiPhoneCall size={ 20 } /> 1800 2666
            </span>
          </div>

          {/* RIGHT */ }
          <div className="d-none d-md-flex gap-3 small">
            { topMenu.map( ( menu ) => (
              <div
                key={ menu.name }
                className="top-dropdown"
                onMouseEnter={ () => handleHover( menu.name ) }
                onMouseLeave={ handleLeave }
              >
                <span className="top-link">
                  { menu.name }
                  { menu.icon && (
                    <GoChevronDown
                      size={ 20 }
                      className={ `chev ${ activeDropdown === menu.name ? "rotate" : ""
                        }` }
                    />
                  ) }
                </span>

                { menu.items.length > 0 && (
                  <div
                    className={ `top-dropdown-menu ${ activeDropdown === menu.name ? "show" : ""
                      }` }
                  >
                    { menu.items.map( ( sub ) => (
                      <div key={ sub } className="top-dropdown-item">
                        { sub }
                      </div>
                    ) ) }
                  </div>
                ) }
              </div>
            ) ) }
          </div>

        </Container>
      </div>

      {/* ================= MAIN NAVBAR ================= */ }
      <Navbar expand="lg" className="shadow-sm py-0 main-navbar">
        <Container
          fluid
          className="d-flex align-items-center justify-content-between p-1"
          style={ { backgroundColor: "#e95320" } }
        >

          {/* LOGO + TOGGLER */ }
          <div className="d-flex align-items-center gap-2">
            <NavbarToggler onClick={ toggleNavbar } />

            <NavbarBrand tag={ RouterLink } to="/" className="m-0 p-0">
              <img
                src={ ICICILombardLogo }
                alt="ICICI Lombard Logo"
                height="40"
                style={ { marginLeft: "30px" } }
              />
            </NavbarBrand>
          </div>

          {/* MENU */ }
          <Collapse isOpen={ navbarOpen } navbar className="flex-grow-1">
            <Nav className="d-flex align-items-center gap-3" navbar>

              {/* HOME ICON */ }
              <NavItem>
                <NavLink
                  tag={ RouterLink }
                  to="/"
                  className="nav-link-custom"
                >
                  <MdOutlineHome size={ 28 } />
                </NavLink>
              </NavItem>

              {/* MAIN MENU */ }
              { mainMenu.map( ( menu ) => (
                <NavItem
                  key={ menu.name }
                  className="position-relative"
                  onMouseEnter={ () => handleHover( menu.name ) }
                  onMouseLeave={ handleLeave }
                >
                  <NavLink
                    tag={ RouterLink }
                    to={ menu.link }
                    className="nav-link-custom"
                  >
                    { menu.name }
                    { menu.icon && (
                      <GoChevronDown
                        size={ 20 }
                        className={ `chev ${ activeDropdown === menu.name ? "rotate" : ""
                          }` }
                      />
                    ) }
                  </NavLink>

                  { menu.items.length > 0 && (
                    <div
                      className={ `main-dropdown-menu ${ activeDropdown === menu.name ? "show" : ""
                        }` }
                    >
                      { menu.items.map( ( sub ) => (
                        <div key={ sub } className="main-dropdown-item">
                          { sub }
                        </div>
                      ) ) }
                    </div>
                  ) }
                </NavItem>
              ) ) }

            </Nav>
          </Collapse>

        </Container>
      </Navbar>
    </>
  );
}
