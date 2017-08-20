import React from 'react';
import {Card, CardActions, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {blueGrey900} from 'material-ui/styles/colors'
import '../App.css'

const CardProject = ({projImg, title, subtitle, techImgs, desc}) => {
  return (
    <Card
      style={{
      margin: '10px',
      flex: '1',
      maxWidth: '400px',
      borderRadius: '20px'
    }}>
      <CardMedia
        style={{
        backgroundColor: blueGrey900,
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px'
      }}>
        {projImg}
      </CardMedia>
      <CardTitle
        title={title}
        subtitle={subtitle}
        titleStyle={{
        fontFamily: '-apple-system, system-ui,"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}>
        {techImgs}
      </CardTitle>
      <CardText>
        {desc}
      </CardText>
      <CardActions>
        <FlatButton label="Github"/>
        <FlatButton label="Details"/>
      </CardActions>
    </Card>
  )
}

export default CardProject;