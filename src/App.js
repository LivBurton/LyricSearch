import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Accordion } from 'react-bootstrap';
import LyricsCard from './components/LyricsCard';
import Form from './components/Form';
import { useState, useRef } from 'react';

// TESTING33333333!!!!!!!!!!!!!!!!!!!!!!!

function App() {
  // const [data, setData] = useState(undefined);
  const listRef = useRef([]);
  const [cardList, setCardList] = useState(listRef.current);

  function getData(info) {
    const list = info.data.map(item => (
      <LyricsCard
        id={item.id}
        key={item.id}
        artist={item.artist.name}
        title={item.title}
        lyrics="Lorem"
        getLyrics={getLyrics}
      />
    ));

    listRef.current = list;
    console.log(listRef.current);
    setCardList(list);
    console.log(cardList);
  }

  function getLyrics(id, words) {
    console.log(listRef.current);
    console.log(words.lyrics, id);
    const currentList = listRef.current;
    const addLyrics = currentList.map(card => {
      console.log(card.props.id, card.props.lyrics);
      if (id === card.props.id) {
        return { ...card, lyrics: words.lyrics };
      }
      console.log(card.props.id, card.props.lyrics);
      return card;
    });
    console.log(addLyrics);
    // setCardList(addLyrics);
    listRef.current = addLyrics;
    console.log(listRef.current);
    setCardList(listRef.current);

    console.log(cardList);
    // pass in the id of the card and loop through. If matches
  }

  // <Form getData={getData} />

  return (
    <div className="App">
      <div className="container bg-primary pb-5 mt-5 border border-dark rounded">
        <div className="row">
          <div className="col-md-7 mt-5 mx-auto rounded">
            <h1 className="text-center  pb-4 text-white">Lyric Search</h1>
          </div>
        </div>

        <Form getData={getData} />

        <div className="warning-message">
          <p className="text-center">Please enter a band or song to search</p>
        </div>

        <div className="search-message my-5">
          <p className="text-center font-weight-bold">
            You searched for "Muse". Here are the first 15 results:
          </p>
        </div>

        <div className="artist-container">
          <Accordion>{cardList}</Accordion>
        </div>
      </div>
    </div>
  );
}

export default App;
