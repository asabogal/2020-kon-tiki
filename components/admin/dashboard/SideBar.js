import {useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const SideBar = () => {

  const [search, setSearch] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('search is', search)
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const displayDateTime = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    const year = today.getFullYear();
    const month = months[today.getMonth()];
    const date = today.getDate();
    const day = days[today.getDay()];
    return `${day} ${month} ${date}, ${year}`;
  };

  return (
    <SideBarContainer>
      <AdminMenu>
        <Box time>
        <h2>{displayDateTime()}</h2>
        </Box>
      </AdminMenu>
      <Search onSubmit={handleSubmit}>
        <label>
          Search Reservations
        </label>
        <input
          placeholder="search by phone #..."
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </Search>
      <AdminMenu>
        <Box>
          <Link href='#'><a><h2>Manage Reservations</h2></a></Link>
        </Box>
        <Box>
          <Link href='/admin/menus'><a><h2>Manage Menus</h2></a></Link>
        </Box>
      </AdminMenu>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  flex: 0 0 20rem;
  background-color: #23243a;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const Search = styled.form`
padding-left: 2rem;
  margin-bottom: 2rem;
  label {
    margin-bottom: 2rem;
  }
  input {
    border: 1px thin black;
    height: 1.5rem;
    font-size: 1rem;
    padding: 5px;
  }
`;

const AdminMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
margin-bottom: 1rem;
padding-left: 2rem;
a {
  color: inherit;
  text-decoration: none;
}
&:hover {
  background-color: ${(props => props.time ? 'none' : '#363644')};
}
`;