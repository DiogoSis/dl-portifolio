import React from 'react';
import { Event, School, Work } from '@mui/icons-material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Box, Typography } from '@mui/material';

// Internal imports
import { useFetch } from '../../hooks';
import Loading from '../Loading';
import { EventData } from '../../types';

const TimeLineLife: React.FC = () => {
  const {
    data: events,
    loading,
    error,
  } = useFetch<EventData[]>('/timeLineEvents.json');

  const getIcon = (category: string) => {
    switch (category) {
      case 'work':
        return <Work />;
      case 'course':
        return <School />;
      case 'event':
      default:
        return <Event />;
    }
  };

  const getTimelineDotColor = (category: string) => {
    switch (category) {
      case 'work':
        return 'primary';
      case 'course':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  if (loading) return <Loading message="Carregando eventos..." />;

  if (error) {
    return (
      <Typography color="error">
        Erro ao carregar eventos: {error.message}
      </Typography>
    );
  }

  if (!events || events.length === 0) {
    return <Typography>Nenhum evento encontrado.</Typography>;
  }

  return (
    <Box
      sx={{
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={`${event.year}-${index}`}>
            <TimelineSeparator>
              <TimelineDot color={getTimelineDotColor(event.category)}>
                {getIcon(event.category)}
              </TimelineDot>
              {index < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{event.year}</Typography>
              <Typography>{event.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default TimeLineLife;
