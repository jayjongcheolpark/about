import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import '../App.css'

const CardProject = ({title, subtitle, imgs, desc}) => {
  return (
  <Card style={{margin: '10px', flex: '1'}}>
    <CardTitle 
      title={title} 
      subtitle={subtitle}
      titleStyle={{fontFamily: '-apple-system, system-ui,"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'}}>
      {imgs}    
    </CardTitle>
    <CardText>
      {desc}     
    </CardText>
    <CardActions>
      <FlatButton label="Github" />
      <FlatButton label="Details" />
    </CardActions>
  </Card>
  )
}



export default CardProject;