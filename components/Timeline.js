import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

export default function OppositeContentTimeline() {
  return (
    <React.Fragment>
      {/* <Timeline position="alternate"> */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2020.06.13</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>첫 만남</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2020.06.22</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>무아 커플 탄생</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2020.10.17</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>첫 다툼</TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2020.12.21</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>소연 이사(독립)</TimelineContent>
      </TimelineItem> */}
      {/* <TimelineItem>
          <TimelineOppositeContent color="text.secondary">2021.05.01</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary"/>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
          </TimelineSeparator>
          <TimelineContent>부산 여행</TimelineContent>
        </TimelineItem> */}
      {/* <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2021.07.12</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>제주 여행(민기 이직)</TimelineContent>
      </TimelineItem> */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2021.08.11</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>잠실로 이사(동거 시작)</TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2021.11.09</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>소연 면허 취득</TimelineContent>
      </TimelineItem> */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2021.12.28</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>괌 여행</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2022.06.18</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>터키 여행(소연 아버님과 함께)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2022.08.20</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>발리 한달 살기</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2022.10.09</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary"/>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent>소연, 민기 부모님 조우</TimelineContent>
      </TimelineItem>
      {/* </Timeline> */}
    </React.Fragment>
  )
}
