"use client";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Divider, MenuItem, Stack } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
// import Settings from './Settings';
import { styled } from "@mui/material/styles";
// import LanguageMenu from './Language';
// import DarkModeIcon from './DarkModeIcon';
import { keyframes } from '@mui/system';
// import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from '@mui/material';
import Image from 'next/image';


// import { useAppSelector } from '../store/store';

const PREFIX = "Navbar";
const classes = {
    stickyHeader: `${PREFIX}-stickyHeader`,
    animationFade: `${PREFIX}-animationFade`,
    activeLink: `${PREFIX}-activeLink`,
    StyledHeaderLink: `${PREFIX}-StyledHeaderLink`,
};

const animationFade = keyframes`
    0% {
        top: -50px;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
    100% {
        top: 0;
        -webkit-transform: none;
        transform: none;
    }
`;

const Root = styled(AppBar)(({ theme }) => ({
    // borderBottom: `none`,
    // boxShadow: "none",
    top: 0,
    [`&.${classes.animationFade}`]: {
        display: "flex !important",
        animation: `${animationFade} 1s both`,
    },
    [`&.${classes.stickyHeader}`]: {
        top: "-50px",
        display: "none",
        background: theme.palette.background.default,
        boxShadow: theme.shadows[5]
    },
    [`& .${classes.StyledHeaderLink}`]: {
        display: "inline-block",
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: 15,
        fontWeight: 500,
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap",
        [theme.breakpoints.up("md")]: {
            margin: theme.spacing(0, 1.5),
        },
        "&:hover": {
            color: theme.palette.primary.main,
            cursor: "pointer",
        },
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            padding: theme.spacing(1, 0),

            width: "100%",
            color: theme.palette.text.secondary,
        },
    },
    [`& .${classes.activeLink}`]: {
        color: theme.palette.primary.main,
    },

}));
const MenuItemRoot = styled(MenuItem)(({ theme }) => ({
    [`& .${classes.StyledHeaderLink}`]: {
        display: "inline-block",
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: 15,
        fontWeight: 500,
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap",
        [theme.breakpoints.up("md")]: {
            margin: theme.spacing(0, 1.5),
        },
        "&:hover": {
            color: theme.palette.primary.main,
            cursor: "pointer",
        },
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            padding: theme.spacing(1, 0),

            width: "100%",
            color: theme.palette.text.secondary,
        },
    },
    [`& .${classes.activeLink}`]: {
        color: theme.palette.primary.main,
    },

}));

// const StyledHeaderLink = styled(ScrollLink)(({ theme }) => ({

// }));

const HeaderLinkPath = ({ to, onClick, children }: { to: string, onClick?: () => void, children: React.ReactNode }) => {
    // const theme = useTheme();
    const theme = useTheme();

    return (
        <ScrollLink
            href={"/"}
            onClick={onClick}
            className={classes.StyledHeaderLink}
            activeClass={classes.activeLink}
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={1000}
            offset={-theme.mixins.toolbar.minHeight!}
            to={to}
        >
            {children}
        </ScrollLink>
    );
};

const NavLinks = [
    { label: "الصفحة الرئيسية", key: "home" },
    { label: "معلومات عنا", key: "about-us" },
    { label: "معرض أعمالنا", key: "our-work-gallery" },
    { label: "روابط سريعة", key: "articles" },
    { label: "خدماتنا", key: "our-services" },
]

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [shouldShowHeader, setShouldShowHeader] = useState<boolean>(false);
    const [animationClass, setAnimationClass] = useState<string>('');

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const listenToScroll = () => {
        setShouldShowHeader(window.pageYOffset > 300);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, []);

    useEffect(() => {
        if (shouldShowHeader) {
            setAnimationClass(classes.animationFade);
        } else {
            setAnimationClass('');
        }
    }, [shouldShowHeader]);

    return (
        <Root
            position={shouldShowHeader ? "fixed" : "absolute"}
            sx={{ background: (theme) => theme.palette.background.default }}
            className={clsx({
                [classes.stickyHeader]: shouldShowHeader,
                [animationClass]: shouldShowHeader,
            })}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 2 }}>
                    <Stack mx={2}>
                        <Image
                            src="/logo.webp"
                            alt="صباغ الكويت"
                            width={150}
                            height={60}
                            style={{ objectFit: "contain" }}
                        />
                    </Stack>
                    <Stack direction={"row"} spacing={1} useFlexGap alignItems={"center"}>
                        <Stack direction={"row"} alignItems={"center"} spacing={1} useFlexGap sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {NavLinks.map((link) => (
                                <HeaderLinkPath
                                    key={link.key}
                                    to={link.key}
                                >
                                    {link.label}
                                </HeaderLinkPath>
                            ))}
                            {/* {webLinks && webLinks()} */}
                        </Stack>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="default"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <Stack p={2} spacing={1}>
                                    {NavLinks.map((link, index) => (
                                        // <HeaderLinkPath
                                        //     key={index}
                                        //     to={link.href}
                                        //     className={clsx({ [classes.activeLink]: pathname === link.href })}
                                        // >
                                        //     {link.label}
                                        // </HeaderLinkPath>
                                        <Fragment key={index}>
                                            <MenuItemRoot onClick={handleCloseNavMenu} className={classes.StyledHeaderLink}>
                                                <HeaderLinkPath
                                                    key={link.key}
                                                    onClick={handleCloseNavMenu}
                                                    to={link.key}
                                                >
                                                    {link.label}
                                                </HeaderLinkPath>
                                            </MenuItemRoot>
                                            {index !== NavLinks.length - 1 && <Divider flexItem />}
                                        </Fragment>
                                    ))}
                                    {/* {mobileLinks && mobileLinks({ handleCloseNavMenu })} */}
                                </Stack>
                            </Menu>
                        </Box>
                    </Stack>
                </Toolbar>
            </Container>
        </Root>
    );
}

export default Navbar;
