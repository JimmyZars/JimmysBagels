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
          <Grid size={2}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={8} style={{ textAlign: 'center' }}>
            <div style={{ width: 800, display: 'flex', justifyContent: 'space-between', textAlign: 'center', margin: '0 auto' }}>
              <button>Home</button>
              <button>About</button>
              <button>Our Menu</button>
              <button>Contact Us</button>
            </div>
          </Grid>
          <Grid size={2} style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px' }}>

          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
