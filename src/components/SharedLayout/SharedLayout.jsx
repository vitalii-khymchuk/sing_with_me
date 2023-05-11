import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavBar from "modules/NavBar";
import { Box, Container } from "@chakra-ui/react";
// import { useLocation } from "react-router-dom";

const SharedLayout = () => {
  // const { pathname } = useLocation();

  // const isDetailsPage = pathname.match(/^\/details\/\d+$/);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flexGrow={1} overflowY="hidden" height="calc(100vh - 5rem)">
        <Suspense fallback={null}>
          <Container height="100%" overflowY="scroll">
            <Outlet />
          </Container>
        </Suspense>
      </Box>
      <Box position="sticky" bottom={0}>
        <NavBar />
      </Box>
    </Box>
  );
};

export { SharedLayout };
