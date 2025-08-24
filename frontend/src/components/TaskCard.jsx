import React from 'react'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material'

const TaskCard = ({ task, onComplete }) => {
  const handleComplete = () => {
    onComplete(task.id)
  }

  return (
    <Card 
      sx={{ 
        backgroundColor: '#f5f5f5',
        boxShadow: 1
      }}
    >
      <CardContent sx={{ pb: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleComplete}
          sx={{
            borderColor: '#ccc',
            color: '#666',
            '&:hover': {
              borderColor: '#999',
              backgroundColor: '#f0f0f0'
            }
          }}
        >
          Done
        </Button>
      </CardActions>
    </Card>
  )
}

export default TaskCard