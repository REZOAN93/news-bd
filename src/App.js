import './App.css';
import { Button, Col, Row, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import News from './Component/News/News';

function App() {
  const [news, setnews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-04-07&sortBy=publishedAt&apiKey=aed41eafa9a04a86adaad5fd267c51fd')
      .then(res => res.json())
      .then(data => setnews(data.articles))
  }, [])

  return (
    <div className='App'>
      {
      news.length === 0 ?
        <Spinner animation="border" />
        :
        <Row xs={1} md={3} className="g-4">
          {news.map(nw => <News news={nw}></News>)}
        </Row>
      }

    </div>
  ); 
  }
  export default App;
