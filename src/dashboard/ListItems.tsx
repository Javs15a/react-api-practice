import React, { ReactComponentElement } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import StoreIcon from '@material-ui/icons/Store';
import ReceiptIcon from '@material-ui/icons/Receipt';

interface sideBarItem {
    title: string;
    path: string;
    icon: ReactComponentElement<any>;
}

export const sideBarItems: Array<sideBarItem> = [
    {
        title: "Compra - Venta",
        path: "/",
        icon: <StoreIcon />,
    },
    {
        title: "Transacciones",
        path: "/transacciones",
        icon: <ReceiptIcon />,
    },
    {
        title: "Personas",
        path: "/personas",
        icon: <PeopleIcon />,
    },
    {
        title: "Productos",
        path: "/productos",
        icon: <ShoppingCartIcon />,
    },
];

