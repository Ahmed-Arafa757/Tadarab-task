import * as React from 'react'
import styles from '../styles/course-details.module.css'
import {
    Box, Grid, Card, CardActions, CardContent, Typography, Breadcrumbs,
    Collapse, Chip, Stack, Alert, Accordion, AccordionSummary, AccordionDetails, Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoneIcon from '@mui/icons-material/Done';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HelpIcon from '@mui/icons-material/Help';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PeopleIcon from '@mui/icons-material/People';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { findFlagUrlByIso2Code } from "country-flags-svg";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const egFlag = findFlagUrlByIso2Code("EG");
const saFlag = findFlagUrlByIso2Code("SA");
const kwFlag = findFlagUrlByIso2Code("KW");

const useStyles = makeStyles({
    MuiAccordionroot: {
        "&.MuiAccordion-root:before": {
            backgroundColor: "white"
        }
    }

});

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// const breadcrumbs = [
//     <Link key="1" color="#000" underline="none" >
//         ????????
//     </Link>,
//     <Link
//         key="2"
//         color="#000"
//         underline="none"
//     >
//         ??????????
//     </Link>,
//     <Link
//         key="2"
//         color="#000"
//         underline="none"
//         fontWeight="bolder"
//     >
//         ?????????? ?????????? ????????????????
//     </Link>

// ];


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


function changeCurr(curr) {
    localStorage.setItem('CURRENCY', curr);
}


export default function CourseDetails() {


    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            let elemBoundaries: any = document.getElementById('fixedCard')?.getBoundingClientRect();
            let distanceToTop = window.pageYOffset + elemBoundaries?.top;
            let elementHeight: any = document.getElementById('fixedCard')?.offsetHeight;
            let scrollTop = document.documentElement.scrollTop;
            let opaCity = 1;

            if (scrollTop > distanceToTop) {
                opaCity = 1 - (scrollTop - distanceToTop) / elementHeight;
            }

            if (opaCity >= 0) {
                if (document.getElementById('fixedCard') == null) {
                } else {
                    
                    let card: any = document.getElementById('fixedCard');
                    card.style.opacity = opaCity;
                }
            }

        })

        return () => {
            window.removeEventListener('scroll', () => {
                console.log('removed');
            })
        }
    }, [])

    

    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);

    const handleExpandClick = (btnNumber: string) => {
        switch (btnNumber) {
            case '1':
                setExpanded1(!expanded1);
                expanded1 === false ? setExpanded1(true) : setExpanded1(false);
                break;
            case '2':
                setExpanded2(!expanded2);
                expanded2 === false ? setExpanded2(true) : setExpanded2(false);

                break;

        }
    };
    const classes = useStyles();
    return (
        <>
            <Box>

                <Link href="/course-page">
                    <Box className={styles.imageContainer}>
                        <img src="/images/cover.png"
                            alt="Avatar" className={styles.coverImage} />
                        <Box className={styles.text}>
                            <Box className={styles.middle}>
                                <PlayCircleIcon className={styles.playIcon} />
                                <Typography className={styles.watchAd} component="div">
                                    ???????? ?????????? ????????????
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Link>



            </Box>
            <Grid container sx={{ direction: "rtl" }}>
                <Grid item xs={10}>
                    <Popup trigger={<button> ?????????? ??????????</button>} position="left center">
                        <div style={{ marginTop: "5px" }}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                divider={<Divider orientation="horizontal" flexItem />}
                                spacing={1}

                            >
                                <img src={egFlag} style={{ cursor: "pointer" }} onClick={() => changeCurr('EG')} alt="" width="18px" />
                                <img src={saFlag} style={{ cursor: "pointer" }} onClick={() => changeCurr('SA')} alt="" width="18px" />
                                <img src={kwFlag} style={{ cursor: "pointer" }} onClick={() => changeCurr('KW')} alt="" width="18px" />
                            </Stack>
                        </div>
                    </Popup>
                    <Card className={styles.whatYouLearnCard}>
                        <CardContent>
                            <Typography className={styles.whatYouLearnText} variant="h6">
                                ???????? ?????? ?????????? ???? ??????????????
                            </Typography>
                            <Typography color="text.secondary" className={styles.whatYouLearn}>
                                <DoneIcon color='success' className={styles.doneIcon} /> ?????????? ???????????? ???????????? ???????????????? ???????? ??????????????
                            </Typography>
                            <Typography color="text.secondary" className={styles.whatYouLearn}>
                                <DoneIcon color='success' className={styles.doneIcon} />?????????????? ???????????????? ?????????????? ??????????????
                            </Typography>
                            <Typography color="text.secondary" className={styles.whatYouLearn}>
                                <DoneIcon color='success' className={styles.doneIcon} />?????? ?????????? ???????? ??????????
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing className={styles.showMoreBox}>

                            <Typography className={styles.showMore} >
                                {expanded1 === false ? " ???????? ????????????" : "???????? ??????"}
                            </Typography>
                            <ExpandMore
                                expand={expanded1}
                                onClick={() => handleExpandClick('1')}
                                aria-expanded={expanded1}
                                aria-label="show more"
                            >

                                <ExpandMoreIcon className={styles.expandMoreIcon} />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded1} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography color="text.secondary" className={styles.whatYouLearn} >
                                    <DoneIcon color='success' className={styles.doneIcon} />???????????? ?????????????? ???????????????? ????????????????
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Card className={styles.courseDetailsCard} >
                        <CardContent>
                            <Typography className={styles.whatYouLearnText} variant="h6">
                                ???????????? ????????????
                            </Typography>
                            <Typography className={styles.courseDetailsSummary} color="text.secondary" >
                                ???????? ???? ???????? ???????? ?????????????????????? ???????? ???????????? ???? ??????????????. ???????????? ???????????????? ???????? ????????
                                ????????????. ?????? ???????????? ?????????????? ???????????????? ?????????? ?????????? ???????????????????? ???????????????? ???????? ???????? ????
                                ?????????????? ?????????? ?????????? 308 ???????? ???? ???????? ???????????????????? ???????????????????? ????????????????.

                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing >

                            <Typography className={styles.showMore} >
                                {expanded2 === false ? " ???????? ????????????" : "???????? ??????"}
                            </Typography>
                            <ExpandMore
                                expand={expanded2}
                                onClick={() => handleExpandClick('2')}
                                aria-expanded={expanded2}
                                aria-label="show more"
                            >

                                <ExpandMoreIcon className={styles.expandMoreIcon} />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded2} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography className={styles.summaryRest} color="text.secondary">
                                    ???????????? ???????????? ??????
                                    ?????????? ????????????????. ?????? ???????????? ?????????? ???? ???????? ?????????? ?????????? ???????????? ???????????? ???????????????? ??????????????
                                    ?????????????? ???????? ???????? ?????????? ???? ?????????? ???????????? ???????????????????? ????????????????.

                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Card className={styles.courseTagsCard} >
                        <CardContent>
                            <Typography className={styles.whatYouLearnText} variant="h6">
                                ?????????????? ?????????????????? ????????????
                            </Typography>
                            <Stack className={styles.stack} direction="row" spacing={1}>
                                <Chip className={styles.cHIP} label="??????????" />
                                <Chip className={styles.cHIP} label="??????????????" />
                                <Chip className={styles.cHIP} label="??????????????" />
                                <Chip className={styles.cHIP} label="????????????" />
                                <Chip className={styles.cHIP} label="?????????? ??????????????????" />
                            </Stack>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Card className={styles.midLevelCard} >
                        <CardContent>
                            <Alert className={styles.midLevelAlert}
                                icon={<SignalCellularAltIcon className={styles.levelIcon} />}>
                                <Typography className={styles.midLevelText} >
                                    ?????????? ??????????
                                </Typography>
                            </Alert>

                            <Typography className={styles.courseRequirementText} >
                                ?????????????? ?????????? ???? ????????????
                            </Typography>

                            <Box className={styles.courseRequirementsBox} color='text.secondary' >
                                <Box className={styles.courseRequirements}>
                                    <FiberManualRecordIcon className={styles.bulletIcon} /> ?????????? ??????
                                </Box>
                                <Box className={styles.courseRequirements}>
                                    <FiberManualRecordIcon className={styles.bulletIcon} />??????????
                                </Box>

                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Card className={styles.trainingCourseCard}>
                        <CardContent>
                            <Typography variant="h6" className={styles.whatYouLearnText} >
                                ?????????? ???????????? ??????????????????
                            </Typography>

                            <Box className={styles.trainingCourseDuration} color="text.secondary" >
                                <PlayCircleIcon className={styles.trainingCourseDurationIcons} /> 21 ??????
                                -
                                <WatchLaterIcon className={styles.trainingCourseDurationIcons} /> 6??:45??
                            </Box>

                            <Accordion elevation={0}
                                classes={{
                                    root: classes.MuiAccordionroot
                                }} className={styles.accordionBody} >
                                <AccordionSummary sx={{ backgroundColor: "#F3F3F3" }}
                                    expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={styles.accordionBoldText} >
                                        ?????? ???????????????? 1
                                        <Typography className={styles.accordionNormalText} color="text.secondary">
                                            4 ???????? (2 ????????: 45??)
                                        </Typography>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box className={styles.accordionDetailsOuterBox}>
                                        <Box className={styles.accordionDetailsInnerBox} >
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ?????????? ????????????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                ???????? ??????????
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ?????????? ????????????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                ???????? ??????????
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ?????????? ????????????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                ???????? ??????????
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <FileCopyIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ??????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        ?????? PDF
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                <LockIcon className={styles.watchFreeIconLocked} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <HelpIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ???????????? ?????? ??????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        ??????????
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                <LockIcon className={styles.watchFreeIconLocked} />
                                            </Box>
                                        </Box>

                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion elevation={0}
                                classes={{
                                    root: classes.MuiAccordionroot
                                }} className={styles.accordionBody} >
                                <AccordionSummary sx={{ backgroundColor: "#F3F3F3" }}
                                    expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={styles.accordionBoldText} >
                                        ?????? ???????????????? 2
                                        <Typography className={styles.accordionNormalText} color="text.secondary">
                                            4 ???????? (2 ????????: 45??)
                                        </Typography>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box className={styles.accordionDetailsOuterBox}>
                                        <Box className={styles.accordionDetailsInnerBox} >
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ?????????? ????????????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                ???????? ??????????
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ?????????? ????????????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                ???????? ??????????
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ?????????? ????????????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                ???????? ??????????
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <FileCopyIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ??????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        ?????? PDF
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                <LockIcon className={styles.watchFreeIconLocked} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <HelpIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ???????????? ?????? ??????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        ??????????
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                <LockIcon className={styles.watchFreeIconLocked} />
                                            </Box>
                                        </Box>

                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion elevation={0}
                                classes={{
                                    root: classes.MuiAccordionroot
                                }} className={styles.accordionBody} >
                                <AccordionSummary sx={{ backgroundColor: "#F3F3F3" }}
                                    expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={styles.accordionBoldText} >
                                        ?????? ???????????????? 3
                                        <Typography className={styles.accordionNormalText} color="text.secondary">
                                            4 ???????? (2 ????????: 45??)
                                        </Typography>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box className={styles.accordionDetailsOuterBox}>
                                        <Box className={styles.accordionDetailsInnerBox} >
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ?????????? ????????????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                ???????? ??????????
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ?????????? ????????????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                ???????? ??????????
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ?????????? ????????????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                ???????? ??????????
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <FileCopyIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ?????? ??????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        ?????? PDF
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                <LockIcon className={styles.watchFreeIconLocked} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <HelpIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ???????????? ?????? ??????????
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        ??????????
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                <LockIcon className={styles.watchFreeIconLocked} />
                                            </Box>
                                        </Box>

                                    </Box>
                                </AccordionDetails>
                            </Accordion>


                        </CardContent>

                    </Card>

                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Card className={styles.trainerInfoBox}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src="/images/profilePic.png"
                                    alt="" className={styles.profilePic} />
                                <Typography className={styles.trainerName}>
                                    ??/???????? ??????????????
                                    <Typography className={styles.trainerRole} color="text.secondary">
                                        ?????????? ?????????????? ???????????? ??????????
                                    </Typography>
                                    <Box className={styles.coursesNumberBox} color="text.secondary">
                                        <FactCheckIcon className={styles.coursesNumberIcon} /> 5 ??????????
                                        -
                                        <PeopleIcon className={styles.coursesNumberIcon} /> 12,930 ??????????
                                    </Box>
                                </Typography>

                            </Box>
                            <Typography color="text.secondary" className={styles.trainerInfo}>
                                ???????? ???? ???????? ???????? ?????????????????????? ???????? ???????????? ???? ??????????????. ???????????? ???????????????? ???????? ????????
                                ????????????. ?????? ???????????? ?????????????? ???????????????? ?????????? ?????????? ???????????????????? ???????????????? ???????? ???????? ????
                                ?????????????? ?????????? ?????????? 308 ???????? ???? ???????? ???????????????????? ???????????????????? ????????????????.
                            </Typography>
                            <Box className={styles.previewTrainerProfile} component='span' >
                                ???????? ???????? ????????????
                                <ChevronLeftIcon className={styles.previewTrainerProfileIcon} />
                            </Box>

                        </CardContent>

                    </Card>

                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Alert className={styles.greenAlert} icon={<VerifiedUserIcon className={styles.verificationIcon} />} severity="success">
                        <Box className={styles.returnMoneyBox}>
                            ?????????? ?????????? ???????? ???? 30 ?????? ???????? ????????
                            <Typography className={styles.returnMoney} component="div">
                                ?????????????? ???????? ???????????? ?????? ???? ?????? ???????? ???? ???????? ????????????
                            </Typography>
                        </Box>
                    </Alert>
                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Typography className={styles.certfNormalText} color='text.secondary' component="div">
                        ?????? ???????? ??????
                    </Typography>
                    <Typography className={styles.certfBoldText} component="div">
                        ?????????? ???? ???????? ?????? ?????????? ????????????
                    </Typography>
                    <img src="/images/TadarabCertf.png" alt="" className={styles.certf} />

                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Typography className={styles.popQuestions} component="div">
                        ?????????????? ?????????????? ???? ????????????
                    </Typography>

                    <Accordion elevation={0}
                        classes={{
                            root: classes.MuiAccordionroot
                        }} className={styles.secondAccordionBody} >
                        <AccordionSummary sx={{
                            '& .MuiAccordionSummary-content': {
                                display: "flex", justifyContent: "end"
                            }
                        }}
                            expandIcon={<ExpandMoreIcon className={styles.expandAcc2} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={styles.secondAccordionTitle} >???? ???????????? ?????????????????? ????????</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.secondAccordionDetails} color="text.secondary" >
                                ???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ??????????????
                                ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ?????????????? ???? ???????????? ???????? ????????????. ?????????? ?????? ??????????????
                                ?????????? ?????????? ???????????? ?????????? ???????? ???????????? ????????????
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0}
                        classes={{
                            root: classes.MuiAccordionroot
                        }} className={styles.secondAccordionBody} >
                        <AccordionSummary sx={{
                            '& .MuiAccordionSummary-content': {
                                display: "flex", justifyContent: "end"
                            }
                        }}
                            expandIcon={<ExpandMoreIcon className={styles.expandAcc2} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={styles.secondAccordionTitle}>?????? ?????????? ???? ??????????????</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary" className={styles.secondAccordionDetails} >
                                ???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ??????????????
                                ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ?????????????? ???? ???????????? ???????? ????????????. ?????????? ?????? ??????????????
                                ?????????? ?????????? ???????????? ?????????? ???????? ???????????? ????????????
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0}
                        classes={{
                            root: classes.MuiAccordionroot
                        }} className={styles.secondAccordionBody} >
                        <AccordionSummary sx={{
                            '& .MuiAccordionSummary-content': {
                                display: "flex", justifyContent: "end"
                            }
                        }}
                            expandIcon={<ExpandMoreIcon className={styles.expandAcc2} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={styles.secondAccordionTitle}>???? ???????????? ???????????? ???????????? ???? ???? ????????</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary" className={styles.secondAccordionDetails} >
                                ???????? ?????????? ?????????? ?????? ?????? ???????? ?????? ???? ?????????????? ?????????????? ?????????? ???? ?????????? ???????????? ???? ??????????????
                                ?????? ?????????? ?????????????? ???????? ???? ?????? ???????? ?????????????? ???? ???????????? ???????? ????????????. ?????????? ?????? ??????????????
                                ?????????? ?????????? ???????????? ?????????? ???????? ???????????? ????????????
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Typography className={styles.questions} component='span' color="text.secondary" >
                        ???? ???????? ??????????
                        <Typography className={styles.contactUs} component='span' >
                            ?????????? ????????
                        </Typography>
                    </Typography>


                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>



                    <Grid container sx={{}}>
                        <Grid item xs={12} className={styles.redPortion}>
                            <Box component='div' className={styles.giftBox} >
                                <CardGiftcardIcon className={styles.giftIcon} />
                                ?????? ?????? ???????? ?????????? ????????????
                            </Box>

                            <Grid container >

                                <Grid item className={styles.whitePortion}
                                    xs={12} >
                                    <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.whitePortionCard} >
                                        <CardContent>
                                            <Box component='div' className={styles.whitePortionBox}>

                                                <img src="/images/cover.png"
                                                    alt="" className={styles.offerPics} />

                                                <Grid container>
                                                    <Grid item xs={12}>

                                                        <Box className={styles.courseCardsBox} >
                                                            <img src="/images/profilePic.png"
                                                                alt="" className={styles.courseCardsImg} />
                                                            <Typography className={styles.courseCardsTitle}>
                                                                ?????????? ?????????? ???????????? ????????????
                                                                <Typography className={styles.courseCardsTrainer} color="text.secondary" >
                                                                    ??/???????? ??????????????
                                                                </Typography>
                                                            </Typography>

                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box className={styles.ratingBox}>
                                                            <Typography className={styles.rating}>
                                                                4.1
                                                            </Typography>

                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIconsGray} />

                                                            <Typography color="text.secondary" className={styles.totalRating}>
                                                                (217 ??????????)
                                                            </Typography>


                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box component="div" className={styles.currentPriceBox} >

                                                            <Typography className={styles.price} component="span">
                                                                800
                                                            </Typography>
                                                            <Typography className={styles.egPound} component="span">
                                                                ???????? ????????
                                                            </Typography>
                                                        </Box>
                                                        <Box component="div" className={styles.oldPriceBox} >

                                                            <Typography className={styles.oldPrice} component="span">
                                                                860
                                                                <Box className={styles.oldPriceEgPound} component="span">
                                                                    ???????? ????????
                                                                </Box>
                                                            </Typography>
                                                            <Typography className={styles.priceDiscount} component="span">
                                                                (?????? %20)
                                                            </Typography>
                                                        </Box>

                                                    </Grid>

                                                </Grid>

                                            </Box>
                                        </CardContent>

                                    </Card>
                                    <Box sx={{ textAlign: "center", mt: 1 }}>
                                        <AddIcon className={styles.addIcon} />
                                    </Box>
                                    <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.whitePortionCard}>
                                        <CardContent>
                                            <Box component='div' className={styles.whitePortionBox}>
                                                <img src="/images/cover.png"
                                                    alt="" className={styles.offerPics} />
                                                <Grid container>
                                                    <Grid item xs={12}>

                                                        <Box className={styles.courseCardsBox}>
                                                            <img src="/images/profilePic.png"
                                                                alt="" className={styles.courseCardsImg} />
                                                            <Typography className={styles.courseCardsTitle}>
                                                                ?????????? ?????????? ???????????? ????????????
                                                                <Typography color="text.secondary" className={styles.courseCardsTrainer}>
                                                                    ??/???????? ??????????????
                                                                </Typography>
                                                            </Typography>

                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box className={styles.ratingBox}>
                                                            <Typography className={styles.rating}>
                                                                4.1
                                                            </Typography>

                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIconsGray} />

                                                            <Typography color="text.secondary" className={styles.totalRating}>
                                                                (217 ??????????)
                                                            </Typography>


                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box component="div" className={styles.currentPriceBox} >

                                                            <Typography className={styles.price} component="span">
                                                                800
                                                            </Typography>
                                                            <Typography className={styles.egPound} component="span">
                                                                ???????? ????????
                                                            </Typography>
                                                        </Box>
                                                        <Box component="div" className={styles.oldPriceBox}>

                                                            <Typography className={styles.oldPrice} component="span">
                                                                860
                                                                <Box className={styles.oldPriceEgPound} component="span">
                                                                    ???????? ????????
                                                                </Box>
                                                            </Typography>
                                                            <Typography className={styles.priceDiscount} component="span">
                                                                (?????? %20)
                                                            </Typography>
                                                        </Box>

                                                    </Grid>

                                                </Grid>

                                            </Box>
                                        </CardContent>

                                    </Card>
                                    <Box sx={{ textAlign: "center", mt: 1 }}>
                                        <AddIcon className={styles.addIcon} />
                                    </Box>
                                    <Card sx={{
                                        '& .MuiCardContent-root': {
                                            padding: 0
                                        }
                                    }} className={styles.whitePortionCard}>
                                        <CardContent>
                                            <Box component='div' className={styles.whitePortionBox}>
                                                <img src="/images/cover.png"
                                                    alt="" className={styles.offerPics} />
                                                <Grid container>
                                                    <Grid item xs={12}>

                                                        <Box className={styles.courseCardsBox}>
                                                            <img src="/images/profilePic.png"
                                                                alt="" className={styles.courseCardsImg} />
                                                            <Typography className={styles.courseCardsTitle}>
                                                                ?????????? ?????????? ???????????? ????????????
                                                                <Typography color="text.secondary" className={styles.courseCardsTrainer}>
                                                                    ??/???????? ??????????????
                                                                </Typography>
                                                            </Typography>

                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box className={styles.ratingBox}>
                                                            <Typography className={styles.rating}>
                                                                4.1
                                                            </Typography>

                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIcons} />
                                                            <StarIcon className={styles.ratingIconsGray} />

                                                            <Typography color="text.secondary" className={styles.totalRating} >
                                                                (217 ??????????)
                                                            </Typography>


                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box component="div" className={styles.currentPriceBox} >

                                                            <Typography className={styles.price} component="span">
                                                                800
                                                            </Typography>
                                                            <Typography className={styles.egPound} component="span">
                                                                ???????? ????????
                                                            </Typography>
                                                        </Box>
                                                        <Box component="div" className={styles.oldPriceBox}>

                                                            <Typography className={styles.oldPrice} component="span">
                                                                860
                                                                <Box className={styles.oldPriceEgPound} component="span">
                                                                    ???????? ????????
                                                                </Box>
                                                            </Typography>
                                                            <Typography className={styles.priceDiscount} component="span">
                                                                (?????? %20)
                                                            </Typography>
                                                        </Box>

                                                    </Grid>

                                                </Grid>

                                            </Box>
                                        </CardContent>

                                    </Card>
                                    <Grid container>
                                        <Grid item xs={6} sx={{ pr: 1, mt: 2 }}>
                                            <Typography className={styles.totalPrice} component="span">
                                                1600
                                            </Typography>
                                            <Typography className={styles.totalPriceCurrency} component="span">
                                                ???????? ????????
                                            </Typography>
                                            <Box component="div">
                                                <Box className={styles.oldTotalPriceBox} >

                                                    <Box className={styles.oldTotalPriceCurrency} component="span">
                                                        ???????? ????
                                                    </Box>
                                                    <Typography className={styles.oldTotalPrice} component="span">
                                                        3000
                                                        <Box className={styles.oldTotalPriceCurrency} component="span">
                                                            ???????? ????????
                                                        </Box>
                                                    </Typography>

                                                </Box>
                                                <Box component="div">

                                                    <Typography className={styles.youWillSave} component="span">
                                                        ?????????? 60% ???? ???????? ??????????
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box className={styles.timerBox} >

                                                <Typography className={styles.offerAvailableAt} component="span">
                                                    ?????????? ???????? ????????
                                                </Typography>
                                                <Typography component="span" className={styles.timer}>
                                                    2
                                                    <Typography component="span" className={styles.timer}
                                                        color='text.secondary'>  ???????? </Typography>
                                                    :
                                                    30
                                                    <Typography component="span" className={styles.timer}
                                                        color='text.secondary'>  ?????????? </Typography>
                                                    :
                                                    45
                                                    <Typography component="span" className={styles.timer}
                                                        color='text.secondary'>  ?????????? </Typography>
                                                </Typography>
                                            </Box>
                                            <Button className={styles.getTheOfferBtn} variant="contained">
                                                <ShoppingCartOutlinedIcon className={styles.cartIcon} /> ???????? ?????? ??????????
                                            </Button>

                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}> </Grid>

            </Grid>
        </>
    )
}
