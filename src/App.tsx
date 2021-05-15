import React, { useState } from 'react';
import NoteBook from './components/Notebook'
import SearchNotes from './components/SearchNotes'
import './App.css';

function App() {

  const [notes, setNotes] = useState('')

  return (
    <div className="App">
      <header className='App-header'>Lab Notes</header>
      <NoteBook addNotesCallback={(notes) => setNotes(notes)} />
      <SearchNotes notes={notes} />
    </div>
  );
}

export default App;
