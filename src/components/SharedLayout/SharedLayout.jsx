import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavBar from "modules/NavBar";
import { Container } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const SharedLayout = () => {
  const { pathname } = useLocation();

  const isDetailsPage = pathname.match(/^\/details\/\d+$/);

  return (
    <>
      {!isDetailsPage && <NavBar />}
      <Suspense fallback={null}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export { SharedLayout };
