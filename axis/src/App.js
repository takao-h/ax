import React, { Component } from 'react';
import './App.css';
import Header from './header';
import MainCarousel from './carousel';
import Cards from './cards';
import Jobs from './jobs'
import Blog from './blog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="body">
          <MainCarousel />
        </div>
        <h1>
          おすすめの案件
        </h1>
        <Cards />
        <h1>
          コラム
        </h1>
        <Blog />
        <h1>
          職種から探す
        </h1>
        <Jobs />
      </div>
    );
  }
}

export default App;
