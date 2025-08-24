import React from 'react'
import {
  Box,
  Paper,
  Typography
} from '@mui/material'
import TaskCard from './TaskCard.jsx'

const TaskList = ({ tasks, onTaskComplete }) => {
  if (tasks.length === 0) {
    return (
      <Paper sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          No tasks available. Create your first task!
        </Typography>
      </Paper>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onComplete={onTaskComplete}
        />
      ))}
    </Box>
  )
}

export default TaskList