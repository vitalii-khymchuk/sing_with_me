import { Stack, Text, Box, Button } from "@chakra-ui/react";
import { GoogleLogIn } from "modules/Authorization";
import {
  isLoggedInSelector,
  useAuthStore,
  AccountInfo,
  signOutSelector,
} from "modules/Authorization";

const Account = () => {
  const isLoggedIn = useAuthStore(isLoggedInSelector);
  const signOut = useAuthStore(signOutSelector);
  return (
    <>
      <Stack alignItems="center">
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

        <Box position="absolute" bottom="7rem">
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
