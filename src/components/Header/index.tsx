
import React, { ReactNode, useState } from "react";
import { Countries } from "../Countries";
import { Logo } from "../Logo";
import { Container, HamburgerBtn, HamburgerMenu, Menu } from "./styles";

interface Props {
    children: ReactNode;
}
export function Header({ children }: Props) {
    const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false);
    return (
        <Container id="nav">
            <Logo />
            <Menu>
                {children}
                <Countries />
            </Menu>
            <HamburgerBtn onClick={() => { setHamburgerMenuStatus(!hamburgerMenuStatus) }}>
                <span />
                <span />
                <span />
            </HamburgerBtn>
            <HamburgerMenu status={hamburgerMenuStatus}>
                {children}
                <Countries />
            </HamburgerMenu>
        </Container>
    );
}