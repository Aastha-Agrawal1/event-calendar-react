import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Divider,
  Grid,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PageDetailsModal = ({ data, open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 2,
          minWidth: 400,
        }
      }}
    >
      <DialogTitle sx={{ p: 0 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Student Details</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>

      <Divider sx={{ my: 2 }} />

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper sx={{ p: 2, borderRadius: 2, bgcolor: 'grey.100', textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">Name</Typography>
              <Typography variant="subtitle1" fontWeight="bold">{data?.student_name}</Typography>
              </Paper>
            </Grid>

          <Grid item xs={6}>
            <Paper sx={{ p: 2, borderRadius: 2, bgcolor: 'grey.100', textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">Age</Typography>
              <Typography variant="subtitle1" fontWeight="bold">{data?.age}</Typography>
              </Paper>
            </Grid>

          <Grid item xs={6}>
            <Paper sx={{ p: 2, borderRadius: 2, bgcolor: 'grey.100', textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">Meetings</Typography>
              <Typography variant="subtitle1" fontWeight="bold">{data?.meetings}</Typography>
              </Paper>
            </Grid>

             <Grid item xs={12}>
            <Paper sx={{ p: 2, borderRadius: 2, bgcolor: 'grey.100', textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">Instructor</Typography>
              <Typography variant="subtitle1" fontWeight="bold">{data?.instructor_name}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper sx={{ p: 2, borderRadius: 2, bgcolor: 'grey.100', textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">Class</Typography>
              <Typography variant="subtitle1" fontWeight="bold">{data?.class_name}</Typography>
              </Paper>
            </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PageDetailsModal;
