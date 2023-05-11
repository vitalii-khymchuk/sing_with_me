import { Stack, Text, Box, Button } from "@chakra-ui/react";
import { GoogleLogIn } from "modules/Authorization";
import {
  isLoggedInSelector,
  useAuthStore,
  AccountInfo,
  signOutSelector,
} from "modules/Authorization";
import { useCallback, useEffect, useState } from "react";

const Account = () => {
  const isLoggedIn = useAuthStore(isLoggedInSelector);
  const signOut = useAuthStore(signOutSelector);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const setViewportHeight = useCallback(() => {
    setWindowHeight(window.innerHeight);
  }, [setWindowHeight]);

  window.addEventListener("resize", setViewportHeight);

  useEffect(
    () => () => {
      window.removeEventListener("resize", setViewportHeight);
    },
    [setViewportHeight]
  );

  return (
    <>
      <Stack alignItems="center" height="100%">
        <Box position="absolute" top="35%">
          {isLoggedIn ? (
            <AccountInfo />
          ) : (
            <Text fontSize="lg">
              Sign in to save music <br />
              to your personal library
            </Text>
          )}
        </Box>
        <Box position="absolute" top={`calc(${windowHeight}px - 10rem)`}>
          {isLoggedIn ? (
            <Button
              variant="outline"
              colorScheme="whiteAlpha"
              onClick={signOut}
            >
              Log out
            </Button>
          ) : (
            <GoogleLogIn />
          )}
        </Box>
      </Stack>
    </>
  );
};
export { Account };
