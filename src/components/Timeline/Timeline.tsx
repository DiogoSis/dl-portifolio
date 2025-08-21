import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="timeline-content">
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-marker">
              {event.icon ? (
                <img src={event.icon} alt="" className="timeline-icon" />
              ) : (
                <div className="timeline-dot"></div>
              )}
            </div>
            <h3 className="timeline-title">{event.title}</h3>
            <p className="timeline-description">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
