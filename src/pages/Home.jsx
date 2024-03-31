import React from 'react'
import Main from '../components/Main'
import requests from '../Request'
import Row from '../components/Row'

function Home() {
  return (
    <>
       <Main/>
       <Row rowID = '1' title = 'Trending' fetchURL={requests.requestTrending}></Row>
       <Row rowID = '2' title = 'Popular' fetchURL={requests.requestPopular}></Row>
       <Row rowID = '3' title = 'Top Rated' fetchURL={requests.requestTopRated}></Row>
       <Row rowID = '4' title = 'Up Coming' fetchURL={requests.requestUpcoming}></Row>
       <Row rowID = '5' title = 'Horror' fetchURL={requests.requestHorror}></Row>
    
    </>
  )
}

export default Home
