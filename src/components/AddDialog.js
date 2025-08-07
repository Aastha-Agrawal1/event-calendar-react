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
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Box,
  Paper,
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

  const watchFile = watch("file");

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);
    const file = data.file?.[0];
    if (file) {
      console.log("Uploaded file:", file.name);
    }

    await new Promise((res) => setTimeout(res, 1500)); // simulate async
    onClose();
    reset();
    setPreview(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("file", e.target.files);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="1120" >
      <DialogTitle sx={{ position: 'relative' }}>
        Share to social media
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container>
            {/* Left Pane */}
            <Grid item xs={5} sx={{ p: 3, borderRight: '1px solid #ccc' }}>
              <Typography variant="subtitle1" gutterBottom>
                Plan, schedule, and publish content to multiple social platforms.
              </Typography>

              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Facebook color="primary" />
                <Instagram sx={{ color: '#C13584' }} />
                <Twitter color="primary" />
                <LinkedIn color="primary" />
                <MusicNote />
              </Box>

              <Controller
                name="caption"
                control={control}
                rules={{ required: 'Caption is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Add a caption"
                    multiline
                    fullWidth
                    rows={2}
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                )}
              />

              <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                Generate
              </Button>

              <Controller
                name="mode"
                control={control}
                render={({ field }) => (
                  <RadioGroup row {...field} sx={{ mb: 2 }}>
                    <FormControlLabel value="schedule" control={<Radio />} label="Schedule" />
                    <FormControlLabel value="now" control={<Radio />} label="Publish now" />
                  </RadioGroup>
                )}
              />

              <Controller
                name="isDraft"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value} />}
                    label="Set as draft"
                  />
                )}
              />

              <Controller
                name="postTime"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Date & Time"
                    type="datetime-local"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    sx={{ mt: 2 }}
                  />
                )}
              />
            </Grid>

            {/* Right Pane */}
            <Grid
              item
              xs={7}
              sx={{
                p: 3,
                backgroundColor: '#fafafa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Paper
                variant="outlined"
                sx={{
                  border: '2px dashed #bbb',
                  p: 4,
                  textAlign: 'center',
                  width: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    style={{ maxHeight: 200, maxWidth: '100%', marginBottom: 16 }}
                  />
                ) : (
                  <>
                    <Typography variant="h6" gutterBottom>
                      Drag and drop here, or{' '}
                      <Box component="span" sx={{ color: '#6366f1', fontWeight: 500 }}>
                        browse
                      </Box>
                    </Typography>
                    <Typography variant="body2">
                      Add the images/videos you want to include in your post here.
                    </Typography>
                  </>
                )}

                <input
                  type="file"
                  accept="image/*,video/*"
                  style={{
                    opacity: 0,
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    left: 0,
                    cursor: 'pointer',
                  }}
                  {...register("file", { required: "File is required" })}
                  onChange={handleFileChange}
                />
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 3, py: 2, gap: 2 }}>
          <Button disabled>Preview</Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule'}
          </Button>
        </Box>
      </form>
    </Dialog>
  );
}