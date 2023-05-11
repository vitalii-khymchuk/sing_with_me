import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import NavBar from "modules/NavBar";
import { Box, Container } from "@chakra-ui/react";

const SharedLayout = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  window.addEventListener("resize", () => {
    setWindowHeight(window.innerHeight);
  });

  return (
    <Box display="flex" flexDirection="column" height={`${windowHeight}px`}>
      <Box
        flexGrow={1}
        overflowY="hidden"
        height={`calc(${windowHeight}px - 5rem)`}
      >
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
