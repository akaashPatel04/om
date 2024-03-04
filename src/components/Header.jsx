import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight, BiShoppingBag, BiSolidContact } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position={"fixed"}
        top={"5"}
        right={"5"}
        zIndex={"98"}
        w={"5vmax"}
        h={"5vmax"}
        color={"gray"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <BiMenuAltRight fontSize={"3vmax"} onClick={onOpen} />
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader textAlign={"start"} px={"2vmax"} color={"#eb4034"}>
            OM ELECTRONICS{" "}
            <DrawerCloseButton
              size={"2vmax"}
              right={["5vmax", "3vmax"]}
              top={["2vmax", "0.75vmax"]}
              backgroundColor={"#eb4034"}
              padding={"10px"}
              fontWeight="900"
              color={"#fff"}
              rounded={"full"}
            />
          </DrawerHeader>
          <DrawerBody>
            <VStack pt={"2vmax"} alignItems={"flex-start"}>
              <Link to={"/search"}>
                <Button
                  color={"blue"}
                  onClick={onClose}
                  variant={"ghost"}
                  fontSize={["2.5vmax", "2vmax", "1.5vmax"]}
                >
                  <BiShoppingBag style={{ marginRight: "1vmax" }} />
                  <span>Products</span>
                </Button>
              </Link>
              <Link to={"/about"}>
                <Button
                  color={"blue"}
                  onClick={onClose}
                  variant={"ghost"}
                  fontSize={["2.5vmax", "2vmax", "1.5vmax"]}
                >
                  <BiSolidContact style={{ marginRight: "1vmax" }} />
                  <span>About</span>
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const HomeIcon = () => {
  const navigate = useNavigate();

  return (
    <Box
      position={"fixed"}
      top={"5"}
      left={"5"}
      zIndex={"98"}
      w={"5vmax"}
      h={"5vmax"}
      color={"gray"}
      onClick={() => navigate("/")}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FaHome fontSize={"3vmax"} />
    </Box>
  );
};
