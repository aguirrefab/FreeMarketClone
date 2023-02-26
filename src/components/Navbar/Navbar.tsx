import React from "react";

import {
  Stack,
  Image,
  StackDivider,
  Input,
  Text,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineEnvironment, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosNotificationsOutline} from 'react-icons/io';
import { ColorModeSwitcher } from "../ColorMode/ColorModeSwitcher";

import logo from "../../assets/images/meli_logo.png";
import suscripcion from "../../assets/images/suscripcion.webp"

export const Navbar = () => {
  return (
    <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={12} flex={1}>
                <Image src={logo} objectFit="contain" minWidth={140} />
                <Stack
                    direction="row"
                    divider={<StackDivider />}
                    padding={2}
                    maxWidth={600}
                    borderRadius="sm"
                    backgroundColor="white"
                    boxShadow="sm"
                    alignItems="center"
                    width="100%"
                >
                    <Input variant="unstyled" paddingX={2} placeholder="Buscar productos, marcas y más." color="blackAlpha.400" />
                    <Icon as={AiOutlineSearch} height={6} color="gray.400" width={5}/>

                    {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
                </Stack>
            </Stack>

            <Stack direction="row" alignItems="center">
                <Image src={suscripcion} objectFit="contain" maxWidth="340"/>
            </Stack>
            
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline">
            <Stack direction="row" alignItems="baseline" spacing={12} flex={1}>
                <Stack direction="row" spacing={0} minWidth={140} >
                    <Icon as={AiOutlineEnvironment} height={7} width={7} color="blackAlpha.700" />         
                    <Stack spacing={0}>
                        <Text fontSize="xs" color="blackAlpha.700" lineHeight="normal"> Enviar a Invitado</Text>
                        <Text fontSize="sm" color="blackAlpha.800" lineHeight="normal"> Dirección 0000</Text>
                    </Stack>                          
                </Stack> 
                <Stack direction="row" spacing={6} fontSize="sm" color="blackAlpha.500" alignItems="baseline" >
                    <Text lineHeight="normal">Categorías</Text>
                    <Text lineHeight="normal">Ofertas</Text>
                    <Text lineHeight="normal">Historial</Text>
                    <Text lineHeight="normal">Supermercado</Text>
                    <Text lineHeight="normal">Moda</Text>
                    <Text lineHeight="normal">Vender</Text>
                    <Text lineHeight="normal">Ayuda</Text>
                </Stack>          
            </Stack>
            <Stack direction="row" alignItems="center" fontSize="sm" spacing={4} color="blackAlpha.700">
                <Text lineHeight="normal">Invitado</Text>
                <Text lineHeight="normal">Mis compras</Text>
                <Text lineHeight="normal">Favoritos</Text>
               
                <Icon as={IoIosNotificationsOutline} height={5} width={5} color="blackAlpha.600" />         
                <Icon as={AiOutlineShoppingCart} height={5} width={5} color="blackAlpha.600" />         

            </Stack>
        </Stack>
    </Stack>
  );
};
