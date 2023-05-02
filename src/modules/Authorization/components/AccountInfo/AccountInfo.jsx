import { Card, CardBody, Text, Image, VStack } from "@chakra-ui/react";
import { useAuthStore, userDataSelector } from "modules/Authorization/store";

const AccountInfo = () => {
  const { name, picture } = useAuthStore(userDataSelector);

  return (
    <Card bgColor="transparent" boxShadow="none">
      <CardBody>
        <VStack alignItems="center">
          <Text fontSize="lg" color="white">
            {`Welcome, 
            ${name}`}
          </Text>
          <Image
            max-width="100px"
            src={picture}
            alt={`${name}'s avatar`}
            borderRadius="lg"
          />
        </VStack>
      </CardBody>
    </Card>
  );
};

export { AccountInfo };
