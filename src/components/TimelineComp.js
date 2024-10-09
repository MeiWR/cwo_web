import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function BasicTimeline() {
  return (
    <div className='TimelineAll'>
      <div className='TimelineWrap'>
      <h2>Timeline</h2>
      
      <Timeline >
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          1.10.2024 - 20.10.2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector color="secondary"/>
        </TimelineSeparator>
        <TimelineContent>1. kolo registrace: Jednotlivec XXX Kč, Tým XXX kč</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          21.10.2024 - 10.11.2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector color="secondary"/>
        </TimelineSeparator>
        <TimelineContent>2. kolo registrace: Jednotlivec XXX Kč, Tým XXX kč</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          11.11.2024 - 1.12.2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>3. kolo registrace: Jednotlivec XXX Kč, Tým XXX kč</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          21.12.2024 - 22.12.2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
        </TimelineSeparator>
        <TimelineContent>Termín konání soutěže</TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    </div>
  );
}