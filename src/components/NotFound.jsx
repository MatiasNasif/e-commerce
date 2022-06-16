import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link to="/">
        <Alert status='warning'variant='subtle'flexDirection='column'alignItems='center'justifyContent='center'textAlign='center'height='200px'>
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Sorry, we couldn't find that page.
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Try searching or go to Good Vibes home page.
          </AlertDescription>
        </Alert>
      </Link>
    </div>
  )
}

export default NotFound;
