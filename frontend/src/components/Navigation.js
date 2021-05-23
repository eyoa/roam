import { Nav, Navbar } from 'react-bootstrap';

export const Navigation = () => {
  return (
    <Navbar fixed='top' bg='light' expand='lg' classNmae='flex-column'>
      <Navbar.Brand href='#'>ProjectName</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic=navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#home'>Map</Nav.Link>
          <Nav.Link href='#home'>Trip</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
