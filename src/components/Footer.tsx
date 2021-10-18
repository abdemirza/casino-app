import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Footer() {
    return (
        <Box position="fixed" sx={{bottom:0,backgroundColor:'#2196f3',width:"100%",color:'#fff'}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 Abuzar Mirza
              </Typography>
            </Toolbar>
          </Container>
        </Box>
    )
}