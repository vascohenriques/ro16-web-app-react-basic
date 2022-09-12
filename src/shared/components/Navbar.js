import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorClosed,
  faBookOpen,
  faHandshake,
  faToolbox,
  faMoon,
  faSun,
  faRightToBracket,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = {
  Wrapper: styled.nav`
    width: ${(props) => (props.state === "collapsed" ? "60px" : "150px")};
    height: 100%;
    flex: 1;
    align-self: flex-start;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.nav.background};
    color: ${({ theme }) => theme.nav.text};
    border-right: 1px solid ${({ theme }) => theme.nav.edge};
    box-shadow: 2px 0px 15px -2px ${({ theme }) => theme.nav.shadow};
  `,
  Logo: styled.h1`
    padding: 1rem 1rem;
    user-select: none;
  `,
  Items: styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
  `,
  Item: styled.li`
    display: flex;
    cursor: pointer;
    padding: 0;
    margin: 1rem auto 1rem 15px;
  `,
  LinkedItem: styled(Link)`
    display: flex;
    cursor: pointer;
    padding: 0;
    margin: 1rem auto 1rem 15px;
    color: ${({ theme }) => theme.nav.text};
    text-decoration: none;
  `,
  ItemLogo: styled(FontAwesomeIcon)`
    min-width: 30px;
    font-size: 1.5rem;
    margin: auto 0 auto 0;
    color: ${({ color, theme }) => (color ? color : theme.nav.text)};
    display: ${(props) => (!props.hide ? "block" : "none")};
  `,

  ItemText: styled.span`
    padding: 0;
    margin: auto 15px auto 15px;
    display: ${(props) => (props.show && !props.hide ? "block" : "none")};
    white-space: nowrap;
    user-select: none;
  `,
};

const NavbarComponent = ({ isAdmin, theme, toggleTheme }) => {
  const [navBarState, setNavBarState] = useState("expanded");
  const toggleNavBarState = () => {
    if (navBarState === "collapsed") setNavBarState("expanded");
    if (navBarState === "expanded") setNavBarState("collapsed");
  };
  return (
    <Navbar.Wrapper state={navBarState}>
      <Navbar.Logo>16</Navbar.Logo>
      <Navbar.Items style={{ marginTop: "5px" }}>
        <Navbar.LinkedItem title="My Flat" to="/flat">
          <Navbar.ItemLogo icon={faDoorClosed} />
          <Navbar.ItemText show={navBarState !== "collapsed"}>
            My Flat
          </Navbar.ItemText>
        </Navbar.LinkedItem>
        <Navbar.LinkedItem title="Meetings" to="/meetings">
          <Navbar.ItemLogo icon={faHandshake} />
          <Navbar.ItemText show={navBarState !== "collapsed"}>
            Meetings
          </Navbar.ItemText>
        </Navbar.LinkedItem>
        <Navbar.LinkedItem title="Statute" to="/statute">
          <Navbar.ItemLogo icon={faBookOpen} />
          <Navbar.ItemText show={navBarState !== "collapsed"}>
            Statute
          </Navbar.ItemText>
        </Navbar.LinkedItem>
      </Navbar.Items>
      <Navbar.Items style={{ marginTop: "auto" }}>
        {isAdmin ? (
          <Navbar.LinkedItem to="/admin">
            <Navbar.ItemLogo icon={faToolbox} />
            <Navbar.ItemText show={navBarState !== "collapsed"}>
              Admin
            </Navbar.ItemText>
          </Navbar.LinkedItem>
        ) : null}
        <Navbar.Item onClick={toggleTheme}>
          <Navbar.ItemLogo icon={theme === "light" ? faSun : faMoon} />
          <Navbar.ItemText show={navBarState !== "collapsed"}>
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </Navbar.ItemText>
        </Navbar.Item>
        <Navbar.Item onClick={toggleNavBarState}>
          <Navbar.ItemLogo
            icon={
              navBarState !== "collapsed" ? faChevronLeft : faRightToBracket
            }
          />
          <Navbar.ItemText show={navBarState !== "collapsed"}>
            {navBarState === "collapsed" ? "Expand" : "Collapse"}
          </Navbar.ItemText>
        </Navbar.Item>
      </Navbar.Items>
    </Navbar.Wrapper>
  );
};

export default NavbarComponent;
