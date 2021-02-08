import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function Form(props) {
  const [search, setSearch] = useState('');

  function handleSearchChange(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  async function handleSearchClick(e) {
    e.preventDefault();

    // try {
    const res = await fetch(`https://api.lyrics.ovh/suggest/${search}`);
    const data = await res.json();
    // setLyricsData(data);
    props.getData(data);
    console.log(data);
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
