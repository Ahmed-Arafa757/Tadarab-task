import * as React from 'react'
import styles from '../styles/activities-and-reviews.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { findFlagUrlByIso2Code } from "country-flags-svg";


const egFlag = findFlagUrlByIso2Code("EG");
const saFlag = findFlagUrlByIso2Code("SA");
const kwFlag = findFlagUrlByIso2Code("KW");

export default function ActivitiesAndReviews() {

    const [currentSlide1, setCurrentSlide1] = React.useState(0)
    const [sliderRef1, slider1] = useKeenSlider<any>({
        initial: 0,
        slidesPerView: 2.5,
        rtl: true,
        slideChanged(s) {
            setCurrentSlide1(s.details().relativeSlide)
        },
    })
    const [currentSlide2, setCurrentSlide2] = React.useState(0)
    const [sliderRef2, slider2] = useKeenSlider<any>({
        initial: 0,
        slidesPerView: 5,
        rtl: true,
        slideChanged(s) {
            setCurrentSlide2(s.details().relativeSlide)
        },
    })

    return (
        <>
            <Box className={styles.generalBox} id='reviewsComp' >
                <Typography className={styles.title} variant="h5" >
                    ???????????????? ??????????????
                </Typography>
                <Typography className={styles.boldTitle} variant="h5" component='div' >
                    ?????????????????? ???? ????????????
                </Typography>
                <Typography className={styles.paragraph1} color='text.secondary' component='div' >
                    ???????? ?????????? ?????????? ???????????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ?????? ????
                    ?????? ???????? ?????????????? ???? ???????????? ???????? ????????????. ?????????? ?????? ?????????????? ?????????? ?????????? ???????????? ?????????? ???????? ???????????? ??????????????
                </Typography>

                <Grid container>
                    <Grid item md={6} xs={12}>
                        <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.traineesCards} >
                            <CardContent>
                                <img src="/images/drawing1.png" className={styles.traineesArtImg} />

                                <Box className={styles.infoBox} >
                                    <img src="/images/avatar.png"
                                        alt="" className={styles.traineeImg} />
                                    <Typography className={styles.traineeName} >
                                        ?????????? ??????????????????
                                        <Chip className={styles.traineeChip} label="??????????" />
                                        <Typography className={styles.artType} color="text.secondary" >
                                            ???????? ????????
                                        </Typography>
                                    </Typography>

                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.traineesCards}>
                            <CardContent>
                                <img src="/images/drawing2.png" className={styles.traineesArtImg} />

                                <Box className={styles.infoBox}>
                                    <img src="/images/avatar.png"
                                        alt="" className={styles.traineeImg} />
                                    <Typography className={styles.traineeName}>
                                        ?????? ??????????????????
                                        <Chip label="??????????" className={styles.traineeChip} />
                                        <Typography color="text.secondary" className={styles.artType}>
                                            ?????? ??????????????
                                        </Typography>
                                    </Typography>

                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Card sx={{
                            '& .MuiCardContent-root': {
                                padding: 0
                            }
                        }} className={styles.traineesCards}>
                            <CardContent>
                                <img src="/images/drawing3.png" className={styles.traineesArtImg} />

                                <Box className={styles.infoBox}>
                                    <img src="/images/avatar.png"
                                        alt="" className={styles.traineeImg} />
                                    <Typography className={styles.traineeName}>
                                        ?????????? ??????????
                                        <Chip label="??????????" className={styles.traineeChip} />
                                        <Typography color="text.secondary" className={styles.artType}>
                                            ?????? ??????????????
                                        </Typography>
                                    </Typography>

                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Card sx={{
                            '& .MuiCardContent-root': {
                                padding: 0
                            }
                        }} className={styles.traineesCards}>
                            <CardContent>
                                <img src="/images/drawing4.png" className={styles.traineesArtImg} />

                                <Box className={styles.infoBox}>
                                    <img src="/images/avatar.png"
                                        alt="" className={styles.traineeImg} />
                                    <Typography className={styles.traineeName}>
                                        ???????? ??????????
                                        <Chip label="??????????" className={styles.traineeChip} />
                                        <Typography color="text.secondary" className={styles.artType}>
                                            ???????? ????????
                                        </Typography>
                                    </Typography>

                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className={styles.toBeRemoved} item xs={12}>
                        <Grid item xs={12}>

                            <Typography className={styles.courseGeneralRating}
                            >?????????????? ?????????? ???????????? </Typography>

                            <Box className={styles.ratingBox} >


                                <Typography className={styles.rating} >  4.1  </Typography>
                                <Typography className={styles.starsBox} >
                                    <StarIcon className={styles.starsIcon} />
                                    <StarIcon className={styles.starsIcon} />
                                    <StarIcon className={styles.starsIcon} />
                                    <StarIcon className={styles.starsIcon} />
                                    <StarIcon className={styles.starsIconGray} />
                                    <Typography className={styles.traineesReview} color="text.secondary" >
                                        1.278 ?????????? ???? ??????????????????
                                    </Typography>
                                </Typography>

                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ direction: "ltr" }}>
                            <Box className={styles.arrowsBox} component='span' >
                                <ArrowLeft1
                                    onClick={(e) => e.stopPropagation() || slider1.prev()}
                                    disabled={currentSlide1 === 0}
                                />
                                <Box component='span' sx={{ ml: 1 }}>
                                    <ArrowRight1
                                        onClick={(e) => e.stopPropagation() || slider1.next()}
                                        disabled={currentSlide1 === slider1?.details().size - 2}
                                    />
                                </Box>

                            </Box>
                            <Box className="navigation-wrapper">
                                <Box ref={sliderRef1} className="keen-slider" >
                                    <Box sx={{ direction: "rtl" }} className="keen-slider__slide number-slide1" >
                                        <Card className={styles.slider1Cards}  >
                                            <CardContent>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Box className={styles.detailsBox} >
                                                            <img src="/images/avatar.png" alt="" className={styles.reviewerImg} />
                                                            <Typography className={styles.nameAndRatingBox} >
                                                                ???????? ??????????????????
                                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStarsGray} />
                                                                    <Typography className={styles.activeState} component="span" color="text.secondary"
                                                                    >
                                                                        ?????? 8 ??????????
                                                                    </Typography>
                                                                </Box>
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid className={styles.review} item xs={12}>
                                                        <Typography color="text.secondary" >
                                                            ???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ?????????????? ???? ???????????? ???????? ????????????.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <Box sx={{ direction: "rtl" }} className="keen-slider__slide number-slide1" >
                                        <Card className={styles.slider1Cards}  >
                                            <CardContent>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Box className={styles.detailsBox} >
                                                            <img src="/images/avatar.png" alt="" className={styles.reviewerImg} />
                                                            <Typography className={styles.nameAndRatingBox} >
                                                                ???????? ??????????????????
                                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStarsGray} />
                                                                    <Typography className={styles.activeState} component="span" color="text.secondary"
                                                                    >
                                                                        ?????? 8 ??????????
                                                                    </Typography>
                                                                </Box>
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid className={styles.review} item xs={12}>
                                                        <Typography color="text.secondary" >
                                                            ???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ?????????????? ???? ???????????? ???????? ????????????.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <Box sx={{ direction: "rtl" }} className="keen-slider__slide number-slide1" >
                                        <Card className={styles.slider1Cards}  >
                                            <CardContent>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Box className={styles.detailsBox} >
                                                            <img src="/images/avatar.png" alt="" className={styles.reviewerImg} />
                                                            <Typography className={styles.nameAndRatingBox} >
                                                                ???????? ??????????????????
                                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStarsGray} />
                                                                    <Typography className={styles.activeState} component="span" color="text.secondary"
                                                                    >
                                                                        ?????? 8 ??????????
                                                                    </Typography>
                                                                </Box>
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid className={styles.review} item xs={12}>
                                                        <Typography color="text.secondary" >
                                                            ???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ?????????????? ???? ???????????? ???????? ????????????.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <Box sx={{ direction: "rtl" }} className="keen-slider__slide number-slide1" >
                                        <Card className={styles.slider1Cards}  >
                                            <CardContent>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Box className={styles.detailsBox} >
                                                            <img src="/images/avatar.png" alt="" className={styles.reviewerImg} />
                                                            <Typography className={styles.nameAndRatingBox} >
                                                                ???????? ??????????????????
                                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStarsGray} />
                                                                    <Typography className={styles.activeState} component="span" color="text.secondary"
                                                                    >
                                                                        ?????? 8 ??????????
                                                                    </Typography>
                                                                </Box>
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid className={styles.review} item xs={12}>
                                                        <Typography color="text.secondary" >
                                                            ???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ?????????????? ???? ???????????? ???????? ????????????.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <Box sx={{ direction: "rtl" }} className="keen-slider__slide number-slide1" >
                                        <Card className={styles.slider1Cards}  >
                                            <CardContent>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Box className={styles.detailsBox} >
                                                            <img src="/images/avatar.png" alt="" className={styles.reviewerImg} />
                                                            <Typography className={styles.nameAndRatingBox} >
                                                                ???????? ??????????????????
                                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStarsGray} />
                                                                    <Typography className={styles.activeState} component="span" color="text.secondary"
                                                                    >
                                                                        ?????? 8 ??????????
                                                                    </Typography>
                                                                </Box>
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid className={styles.review} item xs={12}>
                                                        <Typography color="text.secondary" >
                                                            ???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ?????????????? ???? ???????????? ???????? ????????????.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                    <Box sx={{ direction: "rtl" }} className="keen-slider__slide number-slide1" >
                                        <Card className={styles.slider1Cards}  >
                                            <CardContent>
                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Box className={styles.detailsBox} >
                                                            <img src="/images/avatar.png" alt="" className={styles.reviewerImg} />
                                                            <Typography className={styles.nameAndRatingBox} >
                                                                ???????? ??????????????????
                                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStars} />
                                                                    <StarIcon className={styles.reviewerStarsGray} />
                                                                    <Typography className={styles.activeState} component="span" color="text.secondary"
                                                                    >
                                                                        ?????? 8 ??????????
                                                                    </Typography>
                                                                </Box>
                                                            </Typography>
                                                        </Box>
                                                    </Grid>
                                                    <Grid className={styles.review} item xs={12}>
                                                        <Typography color="text.secondary" >
                                                            ???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ?????????????? ???? ???????????? ???????? ????????????.
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Box>

                            </Box>

                        </Grid>

                    </Grid>

                    <Grid className={styles.toBeRemoved} item xs={12}>

                        <Typography className={styles.courseSubscriber}
                            >?????????????? ?????? ???????????? </Typography>
                        <Typography className={styles.ownThisCourses}
                           >?????????????? ?????????????? ?????????????? ???????? </Typography>


                    </Grid>
                    <Grid className={styles.toBeRemoved} item xs={12} sx={{ direction: "ltr" }}>
                        <Box component='div' className={styles.slider2ArrowsBox}
                          >
                            <ArrowLeft2
                                onClick={(e) => e.stopPropagation() || slider2.prev()}
                                disabled={currentSlide2 === 0}
                            />
                            <Box component='div' sx={{ display: "inline-block", ml: 1 }}>
                                <ArrowRight2
                                    onClick={(e) => e.stopPropagation() || slider2.next()}
                                    disabled={currentSlide2 === slider2?.details().size - 5}
                                />
                            </Box>

                            <Typography className={styles.showMoreBtn} component='span' color="text.secondary" >
                                ???????? ????????????
                            </Typography>
                        </Box>
                        <Box className="navigation-wrapper">
                            <Box ref={sliderRef2} className="keen-slider" >
                                <Box className={"keen-slider__slide number-slide2 " + styles.slider2Box}
                                  >
                                    <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }}} className={styles.slider2Cards} >
                                        <CardContent>
                                            <img src="/images/drawing2.png" alt="" className={styles.slider2Img} />
                                            <Typography className={styles.floatingChip} >????????</Typography>
                                            <Box className={styles.slider2DetailsBox}
                                                >
                                                <img src="/images/profilePic.png"
                                                    alt="" className={styles.slider2SmallImg} />
                                                <Typography className={styles.teachingDrawing}>
                                                    ?????????? ?????????? ??????????????
                                                    <Typography color="text.secondary" className={styles.slider2Name}
                                                        >
                                                        ??/???????? ??????????????
                                                    </Typography>

                                                </Typography>

                                            </Box>

                                            <Box className={styles.purchaseBox} >
                                                <Typography className={styles.slider2Price}
                                                     >
                                                    1200
                                                    <Typography className={styles.slider2Currency}
                                                         component='span'>
                                                        ???????? ????????
                                                    </Typography>
                                                </Typography>

                                                <Button className={styles.iconBtn}
                                                   variant="contained">
                                                    <ShoppingCartOutlinedIcon className={styles.icon} />

                                                </Button>
                                                <Button className={styles.iconBtn}  variant="contained">
                                                    <FavoriteBorderOutlinedIcon className={styles.icon} />

                                                </Button>
                                            </Box>

                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box className={"keen-slider__slide number-slide2 " + styles.slider2Box}
                                  >
                                    <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.slider2Cards} >
                                        <CardContent>
                                            <img src="/images/drawing2.png" alt="" className={styles.slider2Img} />
                                            <Typography className={styles.floatingChip} >????????</Typography>
                                            <Box className={styles.slider2DetailsBox}
                                                >
                                                <img src="/images/profilePic.png"
                                                    alt="" className={styles.slider2SmallImg} />
                                                <Typography className={styles.teachingDrawing}>
                                                    ?????????? ?????????? ??????????????
                                                    <Typography color="text.secondary" className={styles.slider2Name}
                                                        >
                                                        ??/???????? ??????????????
                                                    </Typography>

                                                </Typography>

                                            </Box>

                                            <Box className={styles.purchaseBox} >
                                                <Typography className={styles.slider2Price}
                                                     >
                                                    1200
                                                    <Typography className={styles.slider2Currency}
                                                         component='span'>
                                                        ???????? ????????
                                                    </Typography>
                                                </Typography>

                                                <Button className={styles.iconBtn}
                                                   variant="contained">
                                                    <ShoppingCartOutlinedIcon className={styles.icon} />

                                                </Button>
                                                <Button className={styles.iconBtn}  variant="contained">
                                                    <FavoriteBorderOutlinedIcon className={styles.icon} />

                                                </Button>
                                            </Box>

                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box className={"keen-slider__slide number-slide2 " + styles.slider2Box}
                                  >
                                    <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.slider2Cards} >
                                        <CardContent>
                                            <img src="/images/drawing2.png" alt="" className={styles.slider2Img} />
                                            <Typography className={styles.floatingChip} >????????</Typography>
                                            <Box className={styles.slider2DetailsBox}
                                                >
                                                <img src="/images/profilePic.png"
                                                    alt="" className={styles.slider2SmallImg} />
                                                <Typography className={styles.teachingDrawing}>
                                                    ?????????? ?????????? ??????????????
                                                    <Typography color="text.secondary" className={styles.slider2Name}
                                                        >
                                                        ??/???????? ??????????????
                                                    </Typography>

                                                </Typography>

                                            </Box>

                                            <Box className={styles.purchaseBox} >
                                                <Typography className={styles.slider2Price}
                                                     >
                                                    1200
                                                    <Typography className={styles.slider2Currency}
                                                         component='span'>
                                                        ???????? ????????
                                                    </Typography>
                                                </Typography>

                                                <Button className={styles.iconBtn}
                                                   variant="contained">
                                                    <ShoppingCartOutlinedIcon className={styles.icon} />

                                                </Button>
                                                <Button className={styles.iconBtn}  variant="contained">
                                                    <FavoriteBorderOutlinedIcon className={styles.icon} />

                                                </Button>
                                            </Box>

                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box className={"keen-slider__slide number-slide2 " + styles.slider2Box}
                                  >
                                    <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.slider2Cards} >
                                        <CardContent>
                                            <img src="/images/drawing2.png" alt="" className={styles.slider2Img} />
                                            <Typography className={styles.floatingChip} >????????</Typography>
                                            <Box className={styles.slider2DetailsBox}
                                                >
                                                <img src="/images/profilePic.png"
                                                    alt="" className={styles.slider2SmallImg} />
                                                <Typography className={styles.teachingDrawing}>
                                                    ?????????? ?????????? ??????????????
                                                    <Typography color="text.secondary" className={styles.slider2Name}
                                                        >
                                                        ??/???????? ??????????????
                                                    </Typography>

                                                </Typography>

                                            </Box>

                                            <Box className={styles.purchaseBox} >
                                                <Typography className={styles.slider2Price}
                                                     >
                                                    1200
                                                    <Typography className={styles.slider2Currency}
                                                         component='span'>
                                                        ???????? ????????
                                                    </Typography>
                                                </Typography>

                                                <Button className={styles.iconBtn}
                                                   variant="contained">
                                                    <ShoppingCartOutlinedIcon className={styles.icon} />

                                                </Button>
                                                <Button className={styles.iconBtn}  variant="contained">
                                                    <FavoriteBorderOutlinedIcon className={styles.icon} />

                                                </Button>
                                            </Box>

                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box className={"keen-slider__slide number-slide2 " + styles.slider2Box}
                                  >
                                    <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.slider2Cards} >
                                        <CardContent>
                                            <img src="/images/drawing2.png" alt="" className={styles.slider2Img} />
                                            <Typography className={styles.floatingChip} >????????</Typography>
                                            <Box className={styles.slider2DetailsBox}
                                                >
                                                <img src="/images/profilePic.png"
                                                    alt="" className={styles.slider2SmallImg} />
                                                <Typography className={styles.teachingDrawing}>
                                                    ?????????? ?????????? ??????????????
                                                    <Typography color="text.secondary" className={styles.slider2Name}
                                                        >
                                                        ??/???????? ??????????????
                                                    </Typography>

                                                </Typography>

                                            </Box>

                                            <Box className={styles.purchaseBox} >
                                                <Typography className={styles.slider2Price}
                                                     >
                                                    1200
                                                    <Typography className={styles.slider2Currency}
                                                         component='span'>
                                                        ???????? ????????
                                                    </Typography>
                                                </Typography>

                                                <Button className={styles.iconBtn}
                                                   variant="contained">
                                                    <ShoppingCartOutlinedIcon className={styles.icon} />

                                                </Button>
                                                <Button className={styles.iconBtn}  variant="contained">
                                                    <FavoriteBorderOutlinedIcon className={styles.icon} />

                                                </Button>
                                            </Box>

                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box className={"keen-slider__slide number-slide2 " + styles.slider2Box}
                                  >
                                    <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.slider2Cards} >
                                        <CardContent>
                                            <img src="/images/drawing2.png" alt="" className={styles.slider2Img} />
                                            <Typography className={styles.floatingChip} >????????</Typography>
                                            <Box className={styles.slider2DetailsBox}
                                                >
                                                <img src="/images/profilePic.png"
                                                    alt="" className={styles.slider2SmallImg} />
                                                <Typography className={styles.teachingDrawing}>
                                                    ?????????? ?????????? ??????????????
                                                    <Typography color="text.secondary" className={styles.slider2Name}
                                                        >
                                                        ??/???????? ??????????????
                                                    </Typography>

                                                </Typography>

                                            </Box>

                                            <Box className={styles.purchaseBox} >
                                                <Typography className={styles.slider2Price}
                                                     >
                                                    1200
                                                    <Typography className={styles.slider2Currency}
                                                         component='span'>
                                                        ???????? ????????
                                                    </Typography>
                                                </Typography>

                                                <Button className={styles.iconBtn}
                                                   variant="contained">
                                                    <ShoppingCartOutlinedIcon className={styles.icon} />

                                                </Button>
                                                <Button className={styles.iconBtn}  variant="contained">
                                                    <FavoriteBorderOutlinedIcon className={styles.icon} />

                                                </Button>
                                            </Box>

                                        </CardContent>
                                    </Card>
                                </Box>
                                <Box className={"keen-slider__slide number-slide2 " + styles.slider2Box}
                                  >
                                    <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.slider2Cards} >
                                        <CardContent>
                                            <img src="/images/drawing2.png" alt="" className={styles.slider2Img} />
                                            <Typography className={styles.floatingChip} >????????</Typography>
                                            <Box className={styles.slider2DetailsBox}
                                                >
                                                <img src="/images/profilePic.png"
                                                    alt="" className={styles.slider2SmallImg} />
                                                <Typography className={styles.teachingDrawing}>
                                                    ?????????? ?????????? ??????????????
                                                    <Typography color="text.secondary" className={styles.slider2Name}
                                                        >
                                                        ??/???????? ??????????????
                                                    </Typography>

                                                </Typography>

                                            </Box>

                                            <Box className={styles.purchaseBox} >
                                                <Typography className={styles.slider2Price}
                                                     >
                                                    1200
                                                    <Typography className={styles.slider2Currency}
                                                         component='span'>
                                                        ???????? ????????
                                                    </Typography>
                                                </Typography>

                                                <Button className={styles.iconBtn}
                                                   variant="contained">
                                                    <ShoppingCartOutlinedIcon className={styles.icon} />

                                                </Button>
                                                <Button className={styles.iconBtn}  variant="contained">
                                                    <FavoriteBorderOutlinedIcon className={styles.icon} />

                                                </Button>
                                            </Box>

                                        </CardContent>
                                    </Card>
                                </Box>
                                


                            </Box>

                        </Box>

                    </Grid>

                    <Grid className={styles.toBeRemoved} item xs={12}>
                        <Box className={styles.redAdBox} >
                            <img src="/images/logo.png" alt="" className={styles.adImg}  />
                            <Box sx={{ display: 'inline-block' }}>

                                <Typography className={styles.highQCourses}
                                    >
                                    ?????????? ?????????? ???????????? ???? ???????? ???????????????? ???????????? ??????????
                                    <Typography className={styles.highQCourses2ndParagraph} >
                                        ???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ?????????????? .
                                    </Typography>

                                    <Typography  className={styles.contactUsBtn} component='div'>
                                        ?????????? ????????
                                        <ArrowBackIcon className={styles.contactUsBtnIcon}  />
                                    </Typography>

                                </Typography>

                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box className={styles.commentsBox} sx={{
                            '& .MuiOutlinedInput-input': {
                            height:"200px",
                            backgroundColor:"#f3f3f3"
                        }}} >
                            <Typography className={styles.comments} >??????????????????  </Typography>

                            {/* placeholder="???? ???????? ???????????? ???? ?????????? ?? ???????? ???????????? ?????? ..." */}
                            <Box className={styles.textArea} >
                                <TextField fullWidth  id="fullWidth" />

                                <Button className={styles.sendBtn} component='div'  variant="contained">

                                    ??????????
                                    <SendIcon className={styles.sendIcon}  />
                                </Button>
                            </Box>



                            <Grid container>
                                <Grid item xs={12}>
                                    <Box className={styles.commentsInfoBox}
                                       >
                                        <img src="/images/avatar.png" alt="" className={styles.commenterImg} />
                                        <Typography className={styles.commenterInfoBox}>
                                            ???????? ??????????????????
                                            <Box  sx={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={egFlag} alt="" className={styles.flag}/>
                                                <Typography component="div" color="text.secondary" className={styles.date}
                                                   >
                                                    8 ???????? 2021 1.45 ??
                                                </Typography>
                                                <Chip label="??????????" className={styles.traineeChip}
                                                     />
                                            </Box>


                                            <Typography className={styles.comment} component='div' color="text.secondary" >
                                                ???????? ?????????? ?????? ?????????????? ???????? ???????? ???? ?????????? ??????????????
                                            </Typography>


                                            <Box component='div' className={styles.likesAndReplies} color='text.secondary'
                                                >
                                                <ThumbUpIcon className={styles.likeIcon}  />
                                                5
                                                <ChatBubbleIcon className={styles.commentIcon}
                                                    />
                                                ???????? ??????????...

                                            </Box>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mr: 8 }} className={styles.commentsInfoBox} >
                                        <img src="/images/avatar.png" alt="" className={styles.commenterImg} />
                                        <Typography className={styles.commenterInfoBox}>
                                            ?????????? ??????????
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography component="div" color="text.secondary" className={styles.date}>
                                                    8 ???????? 2021 2.30 ??
                                                </Typography>
                                                <Chip label="????????" className={styles.traineeChip}/>
                                            </Box>


                                            <Typography component='div' color="text.secondary" className={styles.comment}>
                                                ???????? ???? ???? ???????? ???????????? ???????????????? ?????????????????? ?????? ????????????
                                            </Typography>


                                            <Box component='div' color='text.secondary'
                                                className={styles.likesAndReplies}>
                                                <ThumbUpIcon className={styles.likeIcon} />
                                                3


                                            </Box>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mr: 8 }} className={styles.commentsInfoBox} >
                                        <img src="/images/avatar.png" alt="" className={styles.commenterImg} />
                                        <Typography className={styles.commenterInfoBox}>
                                            ??/???????? ??????????????
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={kwFlag} alt="" className={styles.flag} />
                                                <Typography component="div" color="text.secondary" className={styles.date}>
                                                    8 ???????? 2021 1.45 ??
                                                </Typography>
                                                <Chip label="??????????" className={styles.traineeChip} />
                                            </Box>


                                            <Typography component='div' color="text.secondary" className={styles.comment}>
                                                ???????????????? ?????????? ?????????? ?????? ???????????? ????????????
                                            </Typography>


                                            <Box component='div' color='text.secondary'
                                                className={styles.likesAndReplies}>
                                                <ThumbUpIcon className={styles.likeIcon} />
                                                1


                                            </Box>
                                        </Typography>
                                    </Box>
                                    <Box className={styles.commentsInfoBox}>
                                        <img src="/images/avatar.png" alt="" className={styles.commenterImg} />
                                        <Typography className={styles.commenterInfoBox}>
                                            Zain Abdelrahman
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <img src={saFlag} alt="" className={styles.flag} />
                                                <Typography component="div" color="text.secondary" className={styles.date}>
                                                    8 ???????? 2021 1.45 ??
                                                </Typography>
                                                <Chip label="??????????" className={styles.traineeChip}/>
                                            </Box>


                                            <Typography component='div' color="text.secondary" className={styles.comment}>
                                                ?????? ?????????? ???? ???????????? ?????? ???????????? ???????????????? ???? ???? ????????
                                            </Typography>


                                            <Box component='div' color='text.secondary'
                                                className={styles.likesAndReplies}>
                                                <ThumbUpIcon className={styles.likeIcon} />
                                                0
                                                <ChatBubbleIcon className={styles.commentIcon} />
                                                ???????? ??????????...

                                            </Box>
                                        </Typography>
                                    </Box>

                                </Grid>
                                <Grid item xs={12}>


                                </Grid>
                            </Grid>






                        </Box>
                    </Grid> 
                </Grid>
            </Box>

        </>
    )
}

function ArrowLeft1(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <ChevronLeftIcon className={disabeld} sx={{ padding: "4px", boxShadow: "1px 1px 3px 2px rgba(0,0,0,0.1)", borderRadius: "50%", cursor: "pointer" }}
            onClick={props.onClick}
        />
    )
}

function ArrowRight1(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <ChevronRightIcon className={disabeld} sx={{ padding: "4px", boxShadow: "1px 1px 3px 2px rgba(0,0,0,0.1)", borderRadius: "50%", cursor: "pointer" }}
            onClick={props.onClick}
        />

    )
}
function ArrowLeft2(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <ChevronLeftIcon className={disabeld} sx={{ padding: "4px", boxShadow: "1px 1px 3px 2px rgba(0,0,0,0.1)", borderRadius: "50%", cursor: "pointer" }}
            onClick={props.onClick}
        />
    )
}

function ArrowRight2(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <ChevronRightIcon className={disabeld} sx={{ padding: "4px", boxShadow: "1px 1px 3px 2px rgba(0,0,0,0.1)", borderRadius: "50%", cursor: "pointer" }}
            onClick={props.onClick}
        />

    )
}