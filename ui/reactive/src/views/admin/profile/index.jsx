
// Chakra imports
import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import Projects from "views/admin/profile/components/Projects";
import CodeAnalysis from "views/admin/profile/components/CodeAnalysis";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/bamdadAvatar.jpg";
import React from "react";

export default function Overview() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "0.8fr 1.2fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <Banner
          gridArea='1 / 1 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Bamdad Kord'
          job='Software Engineer'
          posts='17'
          exp='13'
          pos='Senior Software Engineer'
        />
        <CodeAnalysis
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          used={45}
          total={512}
        />
        {/*<Upload*/}
        {/*  gridArea={{*/}
        {/*    base: "3 / 1 / 4 / 2",*/}
        {/*    lg: "1 / 3 / 2 / 4",*/}
        {/*  }}*/}
        {/*  minH={{ base: "auto", lg: "420px", "2xl": "365px" }}*/}
        {/*  pe='20px'*/}
        {/*  pb={{ base: "100px", lg: "20px" }}*/}
        {/*/>*/}
      </Grid>
      <Grid
        mb='20px'
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}>
        <General
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH='365px'
          pe='20px'
        />
        <Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name=''
          job=''
          posts='17'
          followers='9.7k'
          following='274'
        />
        {/*<Notifications*/}
        {/*  used={25.6}*/}
        {/*  total={50}*/}
        {/*  gridArea={{*/}
        {/*    base: "3 / 1 / 4 / 2",*/}
        {/*    lg: "2 / 1 / 3 / 3",*/}
        {/*    "2xl": "1 / 3 / 2 / 4",*/}
        {/*  }}*/}
        {/*/>*/}
      </Grid>
    </Box>
  );
}
