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

const PageDetailsModal = ({data, open, onClose }) => {
  console.log(data,"####ADDDAF")
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
          <Typography variant="h6">Page Analytics</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>

      <Divider sx={{ my: 2 }} />

      <DialogContent>
        <Grid container spacing={2}>
            <Grid item xs={6} >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'grey.100',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  scheduledDate
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="text.primary"
                >
                  {data?.scheduledDate}
                </Typography>
              </Paper>
            </Grid>

                        <Grid item xs={6} >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'grey.100',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Categary
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="text.primary"
                >
                  {data?.pageCategory}
                </Typography>
              </Paper>
            </Grid>

                                    <Grid item xs={6} >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'grey.100',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Likes
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="text.primary"
                >
                  {data?.Likes}
                </Typography>
              </Paper>
            </Grid>

                                    <Grid item xs={6} >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'grey.100',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Reach
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="text.primary"
                >
                  {data?.Reach}
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={6} >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'grey.100',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Shares
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="text.primary"
                >
                  {data?.Shares}
                </Typography>
              </Paper>
            </Grid>

                                    <Grid item xs={6} >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'grey.100',
                  textAlign: 'center'
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Views
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="text.primary"
                >
                  {data?.Views}
                </Typography>
              </Paper>
            </Grid>

          <Grid item xs={6} >
            <Paper
              elevation={1}
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'grey.100',
                textAlign: 'center'
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Follower
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="text.primary"
              >
                {data?.followerCount}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PageDetailsModal;
