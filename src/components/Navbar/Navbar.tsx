import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      bg="#EDF2F7"
      color="black"
      w="100%"
      className="flex justify-between items-center py-4 px-4 md:px-36"
    >
      <Text color="teal" className=" font-bold">
        <Link to="/">Fitness</Link>
      </Text>
      <ul className="flex gap-5">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </Box>
  );
};

export default Navbar;
