import React, { useState } from 'react'
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box
} from '@mui/material'

const TaskForm = ({ onTaskCreate, loading }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const taskData = {
      title: title.trim(),
      description: description.trim()
    }

    const success = await onTaskCreate(taskData)
    
    // Clear form only after successful submission
    if (success) {
      setTitle('')
      setDescription('')
    }
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Add a Task
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          required
          disabled={loading}
          sx={{ mb: 2 }}
        />
        
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          multiline
          rows={4}
          disabled={loading}
          sx={{ mb: 3 }}
        />
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading || !title.trim()}
          sx={{ 
            px: 4, 
            py: 1,
            backgroundColor: '#2196f3',
            '&:hover': {
              backgroundColor: '#1976d2'
            },
            '&:disabled': {
              backgroundColor: '#ccc'
            }
          }}
        >
          {loading ? 'Adding...' : 'Add'}
        </Button>
      </Box>
    </Paper>
  )
}

export default TaskForm