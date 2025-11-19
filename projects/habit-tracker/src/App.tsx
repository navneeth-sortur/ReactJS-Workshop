import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { theme } from "./theme/theme";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
