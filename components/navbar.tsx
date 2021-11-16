import * as React from 'react';
import styles from '../styles/navbar.module.css'
import Box from '@mui/material/Box';
import Image from 'next/image'
import Link from 'next/link'
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: "2px solid lightgrey",
    borderRadius: "8px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: "40px",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '32vw',
    },
}));

const useStyles = makeStyles((theme) => ({
    badge: {
        fontSize: 10,
        width: "14px",
        height: "18px",
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        fontFamily: "'Almarai', sans-serif",
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));



export default function Navbar() {
    const classes = useStyles();
    return (
        <>

            <Box id='NAVBAR' className={styles.nav}>

                <Toolbar>
                    <Box
                        sx={{ ml: 1, my: 1, display: 'inline' }}>
                        <Link href="/main">

                            <img src="/images/logo.png" className={styles.logo} />

                        </Link>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Typography
                            className={styles.navText}
                        >استكشف</Typography>
                        <ExpandMoreIcon className={styles.expand} />
                    </Box>


                    <Search className={styles.searchBar}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            // placeholder="اكتشف هواياتك..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Typography className={styles.navText}
                    >تدرب للشركات</Typography>

                    <Typography className={styles.join}
                    >انضم كمدرب</Typography>

                    <Button className={styles.regBtn} variant="contained">حساب جديد</Button>
                    <Button className={styles.signInBtn} variant="outlined">تسجيل دخول</Button>

                    <Box className={styles.cartBox} sx={{ mr: 4 }}>

                        <Badge classes={{ badge: classes.badge }} badgeContent={2} className={styles.badge}
                            sx={{
                                '& .MuiBadge-badge': {
                                    backgroundColor: "#AF151F", color: "white"
                                }
                            }} >
                            <ShoppingCartOutlinedIcon className={styles.cart} />
                        </Badge>
                    </Box>
                </Toolbar>

            </Box>


        </>
    )
}
