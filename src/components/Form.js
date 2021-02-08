import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function Form(props) {
  const [search, setSearch] = useState('');
  // const [lyricsData, setLyricsData] = useState(undefined);

  // fetch(`https://api.lyrics.ovh/suggest/${search}`)
  //   .then(res => res.json())
  //   .then(data => setLyricsData(data));

  function handleSearchChange(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  // need a second fetch that gets lyrics and function in App.js receives 2 arguments. One for first fetch to get id artist and titlad and second to get lyrics. So call another function within handleSearchClick here to access the lyrics then call the function in App.js...no....need to get eacah set of lyrics on card click?

  async function handleSearchClick(e) {
    e.preventDefault();

    // try {
    const res = await fetch(`https://api.lyrics.ovh/suggest/${search}`);
    const data = await res.json();
    // setLyricsData(data);
    props.getData(data);
    console.log(data);
    // } catch (e) {
    // setLyricsData(undefined);
    // }
    // console.log(lyricsData);
    // console.log(props.data);
    // console.log(search);
    // search has been set here so use for the fetch request then call the function passed as a prop from App component
    // setSearch('');
  }

  return (
    <div className="search">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter a band or song title..."
          aria-label="Enter a band or song title"
          value={search}
          onChange={handleSearchChange}
        />
        <InputGroup.Append>
          <Button
            variant="outline-light"
            className="bg-secondary"
            onClick={handleSearchClick}
          >
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default Form;
