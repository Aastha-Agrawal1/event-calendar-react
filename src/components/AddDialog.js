import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  MenuItem,
} from '@mui/material';

import {
  Close,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  MusicNote,
} from '@mui/icons-material';

import { useForm, Controller } from 'react-hook-form';
import { Snackbar } from '@mui/material';
export default function AddDialog({ open, onClose }) {
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      caption: '',
      postTime: '2025-07-06T10:32',
      mode: 'schedule',
      isDraft: false,
      file: null,
    },
  });

  const [preview, setPreview] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const watchFile = watch("file");

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);
    setShowSuccess(true); // show snackbar

    const file = data.file?.[0];
    if (file) {
      console.log("Uploaded file:", file.name);
    }

    await new Promise((res) => setTimeout(res, 1500)); // simulate async
    onClose();
    reset();
    setPreview(null);
  };


  return (
    <>
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        message="Meeting scheduled successfully!"
      />

      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle sx={{ bgcolor: '#f5f7fa', fontWeight: 600, fontSize: 20, px: 4 }}>
            Add New Student Meeting
            <IconButton onClick={onClose} sx={{ position: 'absolute', right: 16, top: 16 }}>
              <Close />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ background: '#fdfdfd', px: 4, py: 3 }}>
            <Typography variant="subtitle1" gutterBottom fontWeight={600}>
              Meeting Details
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="student_name"
                  control={control}
                  rules={{ required: 'Student name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Student Name"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 2 }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="class_name"
                  control={control}
                  rules={{ required: 'Class name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Class"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 2 }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="age"
                  control={control}
                  rules={{ required: 'Age is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Age"
                      type="number"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 2 }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="mettingLink"
                  control={control}
                  rules={{ required: 'Meeting link is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Meeting Link"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 2 }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="Attendance"
                  control={control}
                  rules={{ required: 'Attendance is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="Attendance"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 2 }}
                    >
                      <MenuItem value="On Time">On Time</MenuItem>
                      <MenuItem value="Late">Late</MenuItem>
                      <MenuItem value="Absent">Absent</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="scheduledDate"
                  control={control}
                  rules={{ required: 'Date is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Scheduled Date"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 2 }}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </DialogContent>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 2,
              px: 4,
              py: 3,
              bgcolor: '#f5f7fa'
            }}
          >
            <Button variant="outlined" color="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              sx={{ borderRadius: 2 }}
            >
              {isSubmitting ? 'Saving...' : 'Save Meeting'}
            </Button>
          </Box>
        </form>
      </Dialog>
    </>


  );
}