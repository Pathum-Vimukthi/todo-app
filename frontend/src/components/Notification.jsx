import React from 'react'
import {
  Snackbar,
  Alert
} from '@mui/material'

const Notification = ({ error, success, onClose }) => {
  return (
    <>
      {/* Error Notification */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={onClose} severity="error">
          {error}
        </Alert>
      </Snackbar>

      {/* Success Notification */}
      <Snackbar
        open={!!success}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={onClose} severity="success">
          {success}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Notification