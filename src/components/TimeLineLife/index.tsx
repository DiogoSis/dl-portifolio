import { Event, School, Work } from "@mui/icons-material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";


interface EventData {
    year: number;
    description: string;
    category: 'event' | 'course' | 'work';
}

export default function TimeLineLife(){
    const [events, setEvents] = useState<EventData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/timeLineEvents.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setEvents(data)
            setLoading(false)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
        })
    }, []);

    const getIcon = (category: string) => {
        switch(category) {
            case 'work': 
                return <Work />
            case 'course': 
                return <School />
            case 'event': 
                default: 
                    return <Event />
        }
    }
    if (loading) return <Typography>Carregando Eventos...</Typography>;

    return (
        <Box sx={{ overflow:'auto', display:'flex', flexDirection:'colunm', alignItems:'center'}} >
            <Timeline position="alternate" >
                {events.map((event, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot color={
                            event.category === 'work' ? 'primary':
                            event.category === 'course' ? 'secondary':
                            'secondary'}
                        >
                            {getIcon(event.category)}
                        </TimelineDot>
                        {index < events.length -1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6">{event.year}</Typography>
                        <Typography>{event.description}</Typography>
                    </TimelineContent>
                </TimelineItem>
                ))}
            </Timeline>
        </Box>
    )

}