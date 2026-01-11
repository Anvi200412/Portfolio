import React from "react";
import { Box, Container, Typography, Grid, LinearProgress } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skill = ({ name, value }) => (
  
 <Box mb={4}  width="100vw" maxWidth="400px" mx="auto">

    <Box display="flex" justifyContent="space-between" mb={1}>
      <Typography fontWeight={600}>{name}</Typography>
      <Typography fontWeight={200}>{value}%</Typography>
    </Box>

    <LinearProgress
      variant="determinate"
      value={value}
      sx={{
        height: 14,
        borderRadius: 5,
          width: "100%",
        backgroundColor: "#eee",
        "& .MuiLinearProgress-bar": {
          backgroundColor: "#278b98ff",
        },
      }}
    />
  </Box>
);

const Skills = () => {
  useEffect(() => {
      AOS.init({
        duration: 1900,
        once: true,
      });
    }, []);
  return (
    <Box py={8} id='Skill'  sx={{ scrollMarginTop: "90px" }}>
      <Container maxWidth="xl" >
        {/* Title */}
        <Box textAlign="center" mb={5} mt={5}>
          <Typography variant="h4" fontWeight="bold"  sx={{color:'#9fbfc9'}} data-aos="fade-down"
            data-aos-duration="1200">
            Skills
          </Typography>

          <Box
            width={50}
            height={4}
            bgcolor="#096b78ff"
            mx="auto"
            mt={1}
            mb={2}
          />

          <Typography color="gray" data-aos="fade-down"
            data-aos-delay="1300">
           "Skills I use to build responsive and dynamic web applications."
          </Typography>
        </Box>

        {/* Skills */}
        <Grid container spacing={4} justifyContent="center" >
          {/* Left side */}
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Skill name="HTML" value={100}  />
            <Skill name="CSS" value={90}/>
            <Skill name="JAVASCRIPT" value={75}   />
          </Grid>

          {/* Right side */}
          <Grid item xs={12} md={6} data-aos="fade-right" data-aos-delay="200" >
            <Skill name="C" value={80} />
            <Skill name="C++" value={90} />
            <Skill name="Bootstrap" value={55} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
