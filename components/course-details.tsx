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
//         فنون
//     </Link>,
//     <Link
//         key="2"
//         color="#000"
//         underline="none"
//     >
//         الرسم
//     </Link>,
//     <Link
//         key="2"
//         color="#000"
//         underline="none"
//         fontWeight="bolder"
//     >
//         تعليم الرسم والتلوين
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
                                    شاهد اعلان الدوره
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Link>



            </Box>
            <Grid container sx={{ direction: "rtl" }}>
                <Grid item xs={10}>
                    <Popup trigger={<button> اختار عملتك</button>} position="left center">
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
                                ماذا سوف تتعلم في الدوره؟
                            </Typography>
                            <Typography color="text.secondary" className={styles.whatYouLearn}>
                                <DoneIcon color='success' className={styles.doneIcon} /> الرسم بالقلم الرصاص والألوان وعمل اسكتشات
                            </Typography>
                            <Typography color="text.secondary" className={styles.whatYouLearn}>
                                <DoneIcon color='success' className={styles.doneIcon} />التلوين واستخدام الألوان الخشبيه
                            </Typography>
                            <Typography color="text.secondary" className={styles.whatYouLearn}>
                                <DoneIcon color='success' className={styles.doneIcon} />عمل لوحات فنيه كامله
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing className={styles.showMoreBox}>

                            <Typography className={styles.showMore} >
                                {expanded1 === false ? " اقرأ المزيد" : "اقرأ اقل"}
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
                                    <DoneIcon color='success' className={styles.doneIcon} />اختيار الألوان المناسبه للرسومات
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
                                تفاصيل الدوره
                            </Typography>
                            <Typography className={styles.courseDetailsSummary} color="text.secondary" >
                                تقدم لك منصة تحرب الإلكترونية دورة أسراري في التربية. بإشراف الأستاذة عفاف محمد
                                الجاسم. وهي المؤسس والرئيس التتفيذي لشركة إنسان للاستشارات والتدريب خبرة أكثر من
                                والمشرف العام لنادي 308 عاما في مجال الاستشارات الاجتماعية والتدريب.

                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing >

                            <Typography className={styles.showMore} >
                                {expanded2 === false ? " اقرأ المزيد" : "اقرأ اقل"}
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
                                    ومدربة مدربين فثة
                                    إنسان للمدربين. وهي مستشار تدريب في معهد وليام جلاسر الحولي لنظرية الاختيار والعلاج
                                    الواقعي وعضو مجلس إدارة في جمعية الخدمة الاجتماعية الكويتية.

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
                                الكلمات المفتاحيه للدوره
                            </Typography>
                            <Stack className={styles.stack} direction="row" spacing={1}>
                                <Chip className={styles.cHIP} label="الرسم" />
                                <Chip className={styles.cHIP} label="التلوين" />
                                <Chip className={styles.cHIP} label="الألوان" />
                                <Chip className={styles.cHIP} label="الفنون" />
                                <Chip className={styles.cHIP} label="الرسم للمبتدئين" />
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
                                    مستوى متوسط
                                </Typography>
                            </Alert>

                            <Typography className={styles.courseRequirementText} >
                                متطلبات البدأ في الدورة
                            </Typography>

                            <Box className={styles.courseRequirementsBox} color='text.secondary' >
                                <Box className={styles.courseRequirements}>
                                    <FiberManualRecordIcon className={styles.bulletIcon} /> كشكول رسم
                                </Box>
                                <Box className={styles.courseRequirements}>
                                    <FiberManualRecordIcon className={styles.bulletIcon} />ألوان
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
                                محتوي الدوره التدريبيه
                            </Typography>

                            <Box className={styles.trainingCourseDuration} color="text.secondary" >
                                <PlayCircleIcon className={styles.trainingCourseDurationIcons} /> 21 درس
                                -
                                <WatchLaterIcon className={styles.trainingCourseDurationIcons} /> 6س:45د
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
                                        اسم المجموعه 1
                                        <Typography className={styles.accordionNormalText} color="text.secondary">
                                            4 دروس (2 ساعه: 45د)
                                        </Typography>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box className={styles.accordionDetailsOuterBox}>
                                        <Box className={styles.accordionDetailsInnerBox} >
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    اسم الدرس والفيديو
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                شاهد مجانا
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    اسم الدرس والفيديو
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                شاهد مجانا
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    اسم الدرس والفيديو
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                شاهد مجانا
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <FileCopyIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ملف شرح
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        ملف PDF
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
                                                    إختبار علي الدرس
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        اسأله
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
                                        اسم المجموعه 2
                                        <Typography className={styles.accordionNormalText} color="text.secondary">
                                            4 دروس (2 ساعه: 45د)
                                        </Typography>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box className={styles.accordionDetailsOuterBox}>
                                        <Box className={styles.accordionDetailsInnerBox} >
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    اسم الدرس والفيديو
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                شاهد مجانا
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    اسم الدرس والفيديو
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                شاهد مجانا
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    اسم الدرس والفيديو
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                شاهد مجانا
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <FileCopyIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ملف شرح
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        ملف PDF
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
                                                    إختبار علي الدرس
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        اسأله
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
                                        اسم المجموعه 3
                                        <Typography className={styles.accordionNormalText} color="text.secondary">
                                            4 دروس (2 ساعه: 45د)
                                        </Typography>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box className={styles.accordionDetailsOuterBox}>
                                        <Box className={styles.accordionDetailsInnerBox} >
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    اسم الدرس والفيديو
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                شاهد مجانا
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    اسم الدرس والفيديو
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                شاهد مجانا
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PlayCircleIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    اسم الدرس والفيديو
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        03:45
                                                    </Typography>
                                                </Typography>

                                            </Box>
                                            <Box component='span' className={styles.watchFreeBox}>
                                                شاهد مجانا
                                                <LockOpenIcon className={styles.watchFreeIcon} />
                                            </Box>
                                        </Box>
                                        <Box className={styles.accordionDetailsInnerBox}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <FileCopyIcon className={styles.accPlayIcon} />
                                                <Typography className={styles.accordionBoldText}>
                                                    ملف شرح
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        ملف PDF
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
                                                    إختبار علي الدرس
                                                    <Typography color="text.secondary" className={styles.accordionNormalText}>
                                                        اسأله
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
                                    أ/مروة عبدالله
                                    <Typography className={styles.trainerRole} color="text.secondary">
                                        فنانه تشكيليه ومعلمه للرسم
                                    </Typography>
                                    <Box className={styles.coursesNumberBox} color="text.secondary">
                                        <FactCheckIcon className={styles.coursesNumberIcon} /> 5 دورات
                                        -
                                        <PeopleIcon className={styles.coursesNumberIcon} /> 12,930 متعلم
                                    </Box>
                                </Typography>

                            </Box>
                            <Typography color="text.secondary" className={styles.trainerInfo}>
                                تقدم لك منصة تحرب الإلكترونية دورة أسراري في التربية. بإشراف الأستاذة عفاف محمد
                                الجاسم. وهي المؤسس والرئيس التتفيذي لشركة إنسان للاستشارات والتدريب خبرة أكثر من
                                والمشرف العام لنادي 308 عاما في مجال الاستشارات الاجتماعية والتدريب.
                            </Typography>
                            <Box className={styles.previewTrainerProfile} component='span' >
                                اعرض حساب المدرب
                                <ChevronLeftIcon className={styles.previewTrainerProfileIcon} />
                            </Box>

                        </CardContent>

                    </Card>

                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Alert className={styles.greenAlert} icon={<VerifiedUserIcon className={styles.verificationIcon} />} severity="success">
                        <Box className={styles.returnMoneyBox}>
                            رضائك يهمنا نقدم لك 30 يوم ضمان ذهبي
                            <Typography className={styles.returnMoney} component="div">
                                إسترداد كامل للمبلغ اذا لم تكن راضي عن اداء الدوره
                            </Typography>
                        </Box>
                    </Alert>
                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Typography className={styles.certfNormalText} color='text.secondary' component="div">
                        سوف تحصل علي
                    </Typography>
                    <Typography className={styles.certfBoldText} component="div">
                        شهادة من تدرب بعد إتمام الدورة
                    </Typography>
                    <img src="/images/TadarabCertf.png" alt="" className={styles.certf} />

                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>
                    <Typography className={styles.popQuestions} component="div">
                        الأسأله الشائعه عن الدورة
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
                            <Typography className={styles.secondAccordionTitle} >هل الدورة للمبتدئين فقط؟</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={styles.secondAccordionDetails} color="text.secondary" >
                                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارى عن التركيز
                                على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي بقرأها. ولذلك يتم استخدام
                                طريقة لوريم إيبسوم لأنها تعطي توزيعا طبيعيا
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
                            <Typography className={styles.secondAccordionTitle}>كيف اشترك في الدورة؟</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary" className={styles.secondAccordionDetails} >
                                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارى عن التركيز
                                على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي بقرأها. ولذلك يتم استخدام
                                طريقة لوريم إيبسوم لأنها تعطي توزيعا طبيعيا
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
                            <Typography className={styles.secondAccordionTitle}>هل يمكنني مشاهدة الدورة في اي وقت؟</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary" className={styles.secondAccordionDetails} >
                                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارى عن التركيز
                                على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي بقرأها. ولذلك يتم استخدام
                                طريقة لوريم إيبسوم لأنها تعطي توزيعا طبيعيا
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Typography className={styles.questions} component='span' color="text.secondary" >
                        هل لديك سؤال؟
                        <Typography className={styles.contactUs} component='span' >
                            تواصل معنا
                        </Typography>
                    </Typography>


                </Grid>
                <Grid item xs={2}> </Grid>
                <Grid item xs={10}>



                    <Grid container sx={{}}>
                        <Grid item xs={12} className={styles.redPortion}>
                            <Box component='div' className={styles.giftBox} >
                                <CardGiftcardIcon className={styles.giftIcon} />
                                عرض خاص جداا لفتره محدودة
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
                                                                تعليم الرسم بالقلم الرصاص
                                                                <Typography className={styles.courseCardsTrainer} color="text.secondary" >
                                                                    أ/مروة عبدالله
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
                                                                (217 تقييم)
                                                            </Typography>


                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box component="div" className={styles.currentPriceBox} >

                                                            <Typography className={styles.price} component="span">
                                                                800
                                                            </Typography>
                                                            <Typography className={styles.egPound} component="span">
                                                                جنيه مصري
                                                            </Typography>
                                                        </Box>
                                                        <Box component="div" className={styles.oldPriceBox} >

                                                            <Typography className={styles.oldPrice} component="span">
                                                                860
                                                                <Box className={styles.oldPriceEgPound} component="span">
                                                                    جنيه مصري
                                                                </Box>
                                                            </Typography>
                                                            <Typography className={styles.priceDiscount} component="span">
                                                                (خصم %20)
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
                                                                تعليم الرسم بالقلم الرصاص
                                                                <Typography color="text.secondary" className={styles.courseCardsTrainer}>
                                                                    أ/مروة عبدالله
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
                                                                (217 تقييم)
                                                            </Typography>


                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box component="div" className={styles.currentPriceBox} >

                                                            <Typography className={styles.price} component="span">
                                                                800
                                                            </Typography>
                                                            <Typography className={styles.egPound} component="span">
                                                                جنيه مصري
                                                            </Typography>
                                                        </Box>
                                                        <Box component="div" className={styles.oldPriceBox}>

                                                            <Typography className={styles.oldPrice} component="span">
                                                                860
                                                                <Box className={styles.oldPriceEgPound} component="span">
                                                                    جنيه مصري
                                                                </Box>
                                                            </Typography>
                                                            <Typography className={styles.priceDiscount} component="span">
                                                                (خصم %20)
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
                                                                تعليم الرسم بالقلم الرصاص
                                                                <Typography color="text.secondary" className={styles.courseCardsTrainer}>
                                                                    أ/مروة عبدالله
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
                                                                (217 تقييم)
                                                            </Typography>


                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box component="div" className={styles.currentPriceBox} >

                                                            <Typography className={styles.price} component="span">
                                                                800
                                                            </Typography>
                                                            <Typography className={styles.egPound} component="span">
                                                                جنيه مصري
                                                            </Typography>
                                                        </Box>
                                                        <Box component="div" className={styles.oldPriceBox}>

                                                            <Typography className={styles.oldPrice} component="span">
                                                                860
                                                                <Box className={styles.oldPriceEgPound} component="span">
                                                                    جنيه مصري
                                                                </Box>
                                                            </Typography>
                                                            <Typography className={styles.priceDiscount} component="span">
                                                                (خصم %20)
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
                                                جنيه مصري
                                            </Typography>
                                            <Box component="div">
                                                <Box className={styles.oldTotalPriceBox} >

                                                    <Box className={styles.oldTotalPriceCurrency} component="span">
                                                        بدلا من
                                                    </Box>
                                                    <Typography className={styles.oldTotalPrice} component="span">
                                                        3000
                                                        <Box className={styles.oldTotalPriceCurrency} component="span">
                                                            جنيه مصري
                                                        </Box>
                                                    </Typography>

                                                </Box>
                                                <Box component="div">

                                                    <Typography className={styles.youWillSave} component="span">
                                                        هتوفر 60% من خلال العرض
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box className={styles.timerBox} >

                                                <Typography className={styles.offerAvailableAt} component="span">
                                                    العرض متاح خلال
                                                </Typography>
                                                <Typography component="span" className={styles.timer}>
                                                    2
                                                    <Typography component="span" className={styles.timer}
                                                        color='text.secondary'>  ساعة </Typography>
                                                    :
                                                    30
                                                    <Typography component="span" className={styles.timer}
                                                        color='text.secondary'>  دقيقة </Typography>
                                                    :
                                                    45
                                                    <Typography component="span" className={styles.timer}
                                                        color='text.secondary'>  ثانية </Typography>
                                                </Typography>
                                            </Box>
                                            <Button className={styles.getTheOfferBtn} variant="contained">
                                                <ShoppingCartOutlinedIcon className={styles.cartIcon} /> احصل علي العرض
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
