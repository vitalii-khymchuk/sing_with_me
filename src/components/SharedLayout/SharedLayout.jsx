import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavBar from "modules/NavBar";
import { Box, Container, Spacer } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const SharedLayout = () => {
  const { pathname } = useLocation();

  const isDetailsPage = pathname.match(/^\/details\/\d+$/);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box flexGrow={1}>
        <Suspense fallback={null}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </Box>
      <Box position="sticky" bottom={0} bgColor="black">
        <NavBar />
      </Box>
    </Box>
  );
};

export { SharedLayout };
