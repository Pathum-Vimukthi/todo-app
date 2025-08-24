import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid
} from '@mui/material'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import Notification from './components/Notification.jsx'
import axios from 'axios'

const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:8080'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tasks`)
      setTasks(response.data)
    } catch (error) {
      setError('Failed to fetch tasks')
      console.error('Error fetching tasks:', error)
    }
  }

  const handleTaskCreate = async (taskData) => {
    if (!taskData.title.trim()) {
      setError('Title is required')
      return false
    }

    setLoading(true)
    try {
      await axios.post(`${API_BASE_URL}/api/tasks`, taskData)
      setSuccess('Task created successfully!')
      await fetchTasks()
      return true
    } catch (error) {
      setError('Failed to create task')
      console.error('Error creating task:', error)
      return false
    } finally {
      setLoading(false)
    }
  }

  const handleTaskComplete = async (taskId) => {
    try {
      await axios.put(`${API_BASE_URL}/api/tasks/${taskId}/complete`)
      setSuccess('Task completed!')
      await fetchTasks()
    } catch (error) {
      setError('Failed to complete task')
      console.error('Error completing task:', error)
    }
  }

  const handleCloseNotifications = () => {
    setError('')
    setSuccess('')
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Add Task Form */}
        <Grid item xs={12} md={6}>
          <TaskForm 
            onTaskCreate={handleTaskCreate}
            loading={loading}
          />
        </Grid>

        {/* Task List */}
        <Grid item xs={12} md={6}>
          <TaskList 
            tasks={tasks}
            onTaskComplete={handleTaskComplete}
          />
        </Grid>
      </Grid>

      {/* Notifications */}
      <Notification
        error={error}
        success={success}
        onClose={handleCloseNotifications}
      />
    </Container>
  )
}

export default App