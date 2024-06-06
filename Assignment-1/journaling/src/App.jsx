import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css'

const Editor = () => {
  const [value, setValue] = useState('');

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
  };

  return (
    <div className='editor'>
      <ReactQuill value={value} onChange={handleChange} />
    </div>
  );
}

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <button className='sidebar-button'>Home</button>
      <button className='sidebar-button'>Journal</button>
      <button className='sidebar-button'>Sessions</button>
      <button className='sidebar-button'>Exercise</button>
      <button className='sidebar-button'>Chat</button>
    </div>
  );
};

const Logo = () => {
  return (
    <div className='logo'>
      <h1>Logo</h1>
    </div>
  );
}

const NavBar = () => {
  return (
    <ul className='navbar'>
      <li><button className='navbar-button'>Home</button></li>
      <li><button className='navbar-button'>About</button></li>
      <li><button className='navbar-button'>Contact</button></li>
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <Logo />
      <NavBar />
      <Sidebar />
      <Editor />
    </div>
  );
}

export default App
