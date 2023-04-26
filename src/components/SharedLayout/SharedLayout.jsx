import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavBar from "modules/NavBar";
import { Container } from "@chakra-ui/react";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export { SharedLayout };
