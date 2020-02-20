import React, { useEffect, useState } from "react";
import './img.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';


const axios = require('axios');

function GetImage(props) {

let convertDate = (date) => {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
}


let apiDate= convertDate(props.day()),

[data, setData] = useState({title: '', url: '', description: ''});

useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='+apiDate)
    .then((res) => {
        console.log(res.data);
        setData({title: res.data.title, url: res.data.url, description: res.data.explanation});
    }).catch(err => {
        console.log('ERROR: ', err);
    });
}, [apiDate])

const PhotoCard = () => {
    return (
      <div>
        <Card className="container img-container">
        <CardTitle className="img-title">{data.title}</CardTitle>
          <CardImg className="img" top width="100%" src={data.url} alt="" />
          <CardBody>
            <CardText className="img-description">{data.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
    return(<PhotoCard/>)
}

export default GetImage;