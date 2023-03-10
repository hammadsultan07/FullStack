import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://seeklogo.com/images/P/pizza-logo-42816D88BE-seeklogo.com.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            PizzaTown
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;