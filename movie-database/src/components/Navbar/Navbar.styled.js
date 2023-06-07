import styled from "styled-components";

const StyledNavbar = styled.div`
   /* Small Screen */
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;

.navbar {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
}

ul {
  display: flex;
  flex-direction: column;
  list-style: none;
}

a {
  text-decoration: none;
  color: #fff;
}

li {
  margin-bottom: 1rem;
}

/* Medium Screen */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin-bottom: 0;
  }

  ul {
    flex-direction: row;
  }

  li {
    margin: 0 1rem;
  }
} 
`
export default StyledNavbar;