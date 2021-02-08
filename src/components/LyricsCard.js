import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Accordion, Card } from 'react-bootstrap';

function LyricsCard(props) {
  // const [words, setWords] = useState([]);
  const [clicked, setClick] = useState(false);
  const [alreadyClicked, setAlreadyClicked] = useState(false);

  // function fetchLyrics() {
  //   const cardID = props.id;
  //   console.log(clicked);
  //   if (clicked && !alreadyClicked) {
  //     fetch(`https://api.lyrics.ovh/v1/${props.artist}/${props.title}`)
  //       .then(res => res.json())
  //       .then(data => props.getLyrics(cardID, data));
  //     // console.log(data);
  //     setAlreadyClicked(true);
  //   }
  // }
  useEffect(() => {
    const cardID = props.id;
    console.log(clicked);
    if (clicked && !alreadyClicked) {
      fetch(`https://api.lyrics.ovh/v1/${props.artist}/${props.title}`)
        .then(res => res.json())
        .then(data => props.getLyrics(cardID, data));
      // console.log(data);
      setAlreadyClicked(true);
      // call function in app
    }
  }, [clicked]);

  function handleClick(e) {
    e.preventDefault();
    setClick(!clicked);
    // fetchLyrics();
  }
  // setWords(data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>'))
  // async function handleClick(e) {
  //   e.preventDefault();
  //   const res = await fetch(
  //     `https://api.lyrics.ovh/v1/${props.artist}/${props.song}`
  //   );
  //   const data = await res.json();
  //   const dataTransformed = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
  //   setLyrics(dataTransformed);
  // }

  return (
    <Card>
      <Card.Header className="bg-dark text-light text-center">
        <Accordion.Toggle
          as={Card.Header}
          variant="link"
          eventKey={props.id}
          bsPrefix="accordion-style"
          onClick={handleClick}
        >
          <p>
            {props.artist} - {props.title}
          </p>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={props.id}>
        <Card.Body>{props.lyrics}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default LyricsCard;
