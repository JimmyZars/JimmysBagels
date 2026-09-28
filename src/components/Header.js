import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

export default function Header() {
  return (
    <div className="header">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, sm: 6, md: 7, lg: 8, xl: 9 }}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 5, lg: 4, xl: 3 }} style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px' }}>
            <button>Home</button>
            <button>About</button>
            <button>Our Menu</button>
            <button>Contact Us</button>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
