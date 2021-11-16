import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import styles from '../styles/fixed-card.module.css'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Alert from '@mui/material/Alert';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DevicesIcon from '@mui/icons-material/Devices';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//     root: {
//         position: "sticky",
//         top: "10rem",
//         zIndex:5
//     },

// });

export default function FixedCard() {
    // const classes = useStyles();

    return (
        <Card id="fixedCard" className={styles.fixedcard}>
            <CardContent>
                <Typography className={styles.learnDrawing}  gutterBottom>
                    تعليم الرسم والتلوين
                </Typography>
                <Typography className={styles.learnDrawing} component="span">
                    1600
                </Typography>
                <Typography className={styles.egyPound} component="span">
                    جنيه مصري
                </Typography>
                <Box component="div">

                    <Typography className={styles.oldPrice} component="span">
                        2800
                        <Box className={styles.egyPound2} component="span">
                            جنيه مصري
                        </Box>
                    </Typography>
                    <Typography className={styles.egyPound2}
                        sx={{ mr: "2px" }} component="span">
                        <Box component='span'  className={styles.discount}>  (خصم %20) </Box>
                    </Typography>
                </Box>

                <Box className={styles.btnsContainer} sx={{
                    mt: 2, display: 'flex',
                    justifyContent: 'space-around',
                }}>

                    <Button className={styles.addToCartBtn} variant="contained">
                        <ShoppingCartOutlinedIcon className={styles.cartIcon} />
                        <Box className={styles.addToCartText}> اضف للسله </Box>
                    </Button>
                    <Button className={styles.heartIconBtn} variant="contained">
                        <FavoriteBorderOutlinedIcon className={styles.heartIcon}/>
                    </Button>
                    <Button className={styles.shareIconBtn} variant="contained">
                        <ShareOutlinedIcon className={styles.shareIcon}/>
                    </Button>
                </Box>

                <Alert className={styles.greenAlert} icon={<VerifiedUserIcon className={styles.verificationIcon}
                    />} severity="success">
                    <Box sx={{ mr: 1 }}>

                        30  يوم ضمان ذهبي استرداد كامل للمبلغ
                        <Typography className={styles.alertSmallText}  component="div">
                            اذا لم تكن راضي عن اداء الدوره
                        </Typography>
                    </Box>
                </Alert>


                <Box sx={{ fontSize: 12 }}>
                    <Box className={styles.rulesContainers}>
                        <WatchLaterIcon className={styles.rulesIcons} /> 8 ساعات تدريبيه
                    </Box>
                    <Box className={styles.rulesContainers}>
                        <FileCopyIcon className={styles.rulesIcons} />مرفقات حصريه جاهزه للتحميل
                    </Box>
                    <Box className={styles.rulesContainers}>
                        <AllInclusiveIcon className={styles.rulesIcons} /> امتلاك الدوره مدي الحياه
                    </Box>
                    <Box className={styles.rulesContainers}>
                        <DevicesIcon className={styles.rulesIcons} />المشاهده من اي موبايل او لابتوب
                    </Box>
                    <Box className={styles.rulesContainers}>
                        <CreditCardIcon className={styles.rulesIcons} />شهاده اتمام اونلاين معتمده
                    </Box>
                </Box>

                <Alert className={styles.redAlert} icon={false}>
                    <Box sx={{ mr: 1 }}>
                        انضم الي
                        <Typography className={styles.millionLearners}  component="span">
                            2 مليون متعلم
                        </Typography>
                        علي منصه تدرب وتعلم مهاره جديده يوميا

                    </Box>
                </Alert>


                <Box className={styles.enterCoponContainer}>
                    هل لديك كوبون خصم؟
                    <Typography className={styles.enterCopon} component="span">
                        ادخل الكوبون
                    </Typography>


                </Box>

            </CardContent>

        </Card>
    )
}
