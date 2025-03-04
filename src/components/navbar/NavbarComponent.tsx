import styled from "styled-components";

export function NavbarComponent() {
  return (
    <Navbar>
      <Row>
        <img src="/logo.svg" alt="logo" />
        <NavLinks>
          <NavLink href="/">Products</NavLink>
          <NavLink href="/developers">Developers</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/support">Customers</NavLink>
          <NavLink href="/support">Company</NavLink>
        </NavLinks>
      </Row>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background-color: white;
  padding: 2vw 0;
  width: 100%;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #01338d;
  text-decoration: none;
  font-size: 1vw;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 4px;
`;

const Row = styled.div`
  max-width: 88vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
