import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { Logo } from "../Logo";
import { Container, HamburgerBtn, HamburgerMenu, Menu } from "./styles";

interface Props {
    children: ReactNode;
}
export function Header({ children }: Props) {
    const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false);
    return (
        <Container>
            <Logo />
            <Menu>
                {children}
            </Menu>
            <HamburgerBtn onClick={() => { setHamburgerMenuStatus(!hamburgerMenuStatus) }}>
                <span />
                <span />
                <span />
            </HamburgerBtn>
            <HamburgerMenu status={hamburgerMenuStatus}>
                {children}
            </HamburgerMenu>
        </Container>
    );
}