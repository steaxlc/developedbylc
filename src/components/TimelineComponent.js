import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

const TimelineComponent = () => {
    const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  color="purple['A200']">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="textSecondary">
            Naja Solutions
          </Typography>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              2021-today
            </Typography>
            <Typography>Full time Bug Tester, second line Software Support, trainer and database analysis.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="textSecondary">
            Naja Solutions
          </Typography>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              2018-2020
            </Typography>
            <Typography>Full time first line Software Support, trainer and database analysis.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="textSecondary">
            Farias Brito University Center
          </Typography>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              2018-2022
            </Typography>
            <Typography>Graduation in Computer Science.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="textSecondary">
            Naja Solutions
          </Typography>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              2017-2018
            </Typography>
            <Typography>Intern as Software Support.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SearchIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" color="textSecondary">
            Ceará State University 
          </Typography>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              2014-2017
            </Typography>
            
            <Typography>Intern in a technology laboratory.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimelineComponent
