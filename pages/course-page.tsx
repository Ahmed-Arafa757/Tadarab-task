import * as React from 'react';
import {
    Box, Grid, Card, CardActions, CardContent, Typography, Breadcrumbs, Link,
    Collapse, Chip, CardHeader, Stack, Alert, Button
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import styles from '../styles/course-page.module.css'
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import { findFlagUrlByIso2Code } from "country-flags-svg";
import { GetServerSideProps } from 'next';
import Navbar from '../components/navbar';


const egFlag = findFlagUrlByIso2Code("EG");
const kwFlag = findFlagUrlByIso2Code("KW");

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: '1.2rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'light'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));





export default function CoursePage({data}) {
    const [currency, setCurrency] = React.useState('EG');
    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

  

    React.useEffect(() => {
        const h: any = document.getElementById('NAVBAR')?.clientHeight;
        const stickyNAV: any = document.getElementById('STICKYNAV');
        const windowWidth: any = document.documentElement.clientWidth;

        if (windowWidth > 770) {
            stickyNAV.style.position = "sticky";
            stickyNAV.style.top = `${h}px`;

        } else if (windowWidth <= 770) {
            stickyNAV.style.top = "auto";
            stickyNAV.style.position = "fixed";
            stickyNAV.style.bottom = "0px";
        }
       

        window.addEventListener('resize',function(){
            const h: any = document.getElementById('NAVBAR')?.clientHeight;
            const stickyNAV: any = document.getElementById('STICKYNAV');
            const windowWidth: any = document.documentElement.clientWidth;
         

            if (windowWidth > 770) {
                stickyNAV.style.position = "sticky";
                stickyNAV.style.top = `${h}px`;

            } else if (windowWidth <= 770) {
                stickyNAV.style.top = "auto";
                stickyNAV.style.position = "fixed";
                stickyNAV.style.bottom = "0px";
            }
        }, true);

        return () => {
            window.removeEventListener('resize', function () {
            });
            window.removeEventListener('load', function () {
            })
        }

    }, [])

    const goFullWidth = () => {
        // const Swaper:any = document.getElementById('swaper');
        const FullWidthVid:any = document.getElementById('fullWidthVid');
        const SwaperRightPane: any = document.getElementById('swaperRightPane');
        const CloseBtn: any = document.getElementById('CloseBtn');

        
        CloseBtn.style.display = "none";
        FullWidthVid.style.maxWidth = "100%";
        FullWidthVid.style.flexGrow = "1";
        FullWidthVid.style.flexBasis = "100%";
        SwaperRightPane.style.maxWidth = "100%";
        SwaperRightPane.style.flexGrow = "1";
        SwaperRightPane.style.flexBasis = "100%";
    }



    return (
        <>
      <Navbar />
            <Grid container>
                <Grid item xs={12} className={styles.upperStrip}>
                    حياة
                    <ChevronLeftIcon className={styles.leftArrow} />
                </Grid>
                <Grid id='fullWidthVid' item xs={12} md={7}>
                    <img src="/images/courseImg.png" id='coverVideo' className={styles.courseImg} />
                </Grid>
                  
                    <Grid id="swaperRightPane" item xs={12} md={5}>
                    <Box className={styles.courseVideosContainer}>
                        <Box className={styles.courseTitle}>
                            {data.data.course_details.title}

                                <CloseIcon id="CloseBtn" onClick={() => goFullWidth()} className={styles.closeIcon} />
                        </Box>
                        <Box className={styles.courseDurationBox}>
                            إجمالي الدورة
                            <Box component='span' className={styles.courseDuration}>   5س : 45د : 30ث  </Box>
                        </Box>
                        <Box id='rightPane' className={styles.scrollableComp}>
                            <Box className={styles.videoSlot}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PlayCircleOutlineIcon className={styles.playIcon} />
                                    <Typography className={styles.introduction}>
                                        مقدمة عن الدورة
                                        <Typography color="text.secondary" className={styles.videoDuration}>
                                            00:04:30
                                        </Typography>
                                    </Typography>

                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box component='span' className={styles.watchFree}>
                                        شاهد مجانا
                                    </Box>
                                    <LockOpenIcon className={styles.lockIcon} />
                                </Box>

                            </Box>
                            <Box className={styles.videoSlot}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PlayCircleOutlineIcon className={styles.playIcon} />
                                    <Typography className={styles.introduction}>
                                        اسرار قيادة حياتك
                                        <Typography color="text.secondary" className={styles.videoDuration}>
                                            00:19:48
                                        </Typography>
                                    </Typography>

                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box component='span' className={styles.watchFree}>
                                        شاهد مجانا
                                    </Box>
                                    <LockOpenIcon className={styles.lockIcon} />
                                </Box>

                            </Box>
                            <Box className={styles.videoSlot}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PlayCircleOutlineIcon className={styles.playIcon} />
                                    <Typography className={styles.introduction}>
                                        تمرين 1 ما الذي استطيع التحكم به
                                        <Typography color="text.secondary" className={styles.videoDuration}>
                                            00:04:30
                                        </Typography>
                                    </Typography>

                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box component='span' className={styles.watchFree}>
                                        شاهد مجانا
                                    </Box>
                                    <LockOpenIcon className={styles.lockIcon} />
                                </Box>

                            </Box>

                            <Accordion className={styles.accordionBody} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    <Typography className={styles.accordionTitle}>اليوم الأول</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box className={styles.videoSlot}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PlayCircleOutlineIcon className={styles.playIcon} />
                                            <Typography className={styles.introduction}>
                                                مقدمة عن الدورة
                                                <Typography color="text.secondary" className={styles.videoDuration}>
                                                    00:04:30
                                                </Typography>
                                            </Typography>

                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component='span' className={styles.watchFree}>
                                                شاهد مجانا
                                            </Box>
                                            <LockOpenIcon className={styles.lockIcon} />
                                        </Box>

                                    </Box>
                                    <Box className={styles.videoSlot}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PlayCircleOutlineIcon className={styles.playIcon} />
                                            <Typography className={styles.introduction}>
                                                اسرار قيادة حياتك
                                                <Typography color="text.secondary" className={styles.videoDuration}>
                                                    00:19:48
                                                </Typography>
                                            </Typography>

                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component='span' className={styles.watchFree}>
                                                شاهد مجانا
                                            </Box>
                                            <LockOpenIcon className={styles.lockIcon} />
                                        </Box>

                                    </Box>
                                    <Box className={styles.videoSlot}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PlayCircleOutlineIcon className={styles.playIcon} />
                                            <Typography className={styles.introduction}>
                                                تمرين 1 ما الذي استطيع التحكم به
                                                <Typography color="text.secondary" className={styles.videoDuration}>
                                                    00:04:30
                                                </Typography>
                                            </Typography>

                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component='span' className={styles.watchFree}>
                                                شاهد مجانا
                                            </Box>
                                            <LockOpenIcon className={styles.lockIcon} />
                                        </Box>

                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className={styles.accordionBody} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography className={styles.accordionTitle}>اليوم الثاني</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box className={styles.videoSlot}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PlayCircleOutlineIcon className={styles.playIcon} />
                                            <Typography className={styles.introduction}>
                                                مقدمة عن الدورة
                                                <Typography color="text.secondary" className={styles.videoDuration}>
                                                    00:04:30
                                                </Typography>
                                            </Typography>

                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component='span' className={styles.watchFree}>
                                                شاهد مجانا
                                            </Box>
                                            <LockOpenIcon className={styles.lockIcon} />
                                        </Box>

                                    </Box>
                                    <Box className={styles.videoSlot}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PlayCircleOutlineIcon className={styles.playIcon} />
                                            <Typography className={styles.introduction}>
                                                اسرار قيادة حياتك
                                                <Typography color="text.secondary" className={styles.videoDuration}>
                                                    00:19:48
                                                </Typography>
                                            </Typography>

                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component='span' className={styles.watchFree}>
                                                شاهد مجانا
                                            </Box>
                                            <LockOpenIcon className={styles.lockIcon} />
                                        </Box>

                                    </Box>
                                    <Box className={styles.videoSlot}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PlayCircleOutlineIcon className={styles.playIcon} />
                                            <Typography className={styles.introduction}>
                                                تمرين 1 ما الذي استطيع التحكم به
                                                <Typography color="text.secondary" className={styles.videoDuration}>
                                                    00:04:30
                                                </Typography>
                                            </Typography>

                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component='span' className={styles.watchFree}>
                                                شاهد مجانا
                                            </Box>
                                            <LockOpenIcon className={styles.lockIcon} />
                                        </Box>

                                    </Box>
                                </AccordionDetails>
                            </Accordion>

                        </Box>

                    </Box>
                      </Grid>
                    <Grid id='STICKYNAV' className={styles.stickyNav} item xs={12}>
                    <Typography className={styles.navLinks}>عن الدوره</Typography>
                    <Typography className={styles.navLinks}>مرفقات</Typography>
                    <Typography className={styles.navLinks}>تعليقات</Typography>
                    <button className={styles.addToCartBtn}>
                        أضف للسله
                        <ShoppingCartIcon className={styles.cartIcon} />
                    </button>
                    <Box className={styles.price}> {data.data.course_details.price} {data.data.course_details.currency_code}</Box>
                      </Grid>


                <Grid className={styles.aboutCourse} item xs={12}>
                    <Box className={styles.listItem} >
                        <LiveTvIcon className={styles.listIcon} />
                        دورة اونلاين مسجله بجودة عالية
                    </Box>
                    <Box className={styles.listItem} >
                        <WatchLaterIcon className={styles.listIcon} />
                        05:43:30
                    </Box>
                    <Box className={styles.listItem} >
                        <PeopleIcon className={styles.listIcon} />
                        عدد المسجلين : 1290
                    </Box>
                    <Box className={styles.listItem} >
                        <LiveTvIcon className={styles.listIcon} />
                        دورة اونلاين مسجله بجودة عالية
                    </Box>
                    <Box className={styles.listItem} >
                        <WatchLaterIcon className={styles.listIcon} />
                        05:43:30
                    </Box>
                    <Box className={styles.listItem} >
                        <PeopleIcon className={styles.listIcon} />
                        عدد المسجلين : 1290
                    </Box>

                </Grid>

                <Grid item xs={12}>
                    <Box className={styles.greenAlert}>

                        <VerifiedUserIcon className={styles.verifiedIcon} />
                        رضائك يهمنا نقدم لك ٣٠ يوم ضمان ذهبي استرداد كامل المبلغ اذا لم تكن راضي عن محتوى الدورة
                    </Box>
                </Grid>

                <Grid className={styles.ownTheCourse} item xs={12}>
                    <button className={styles.ownTheCourseBtn}>امتلك الدورة</button>

                </Grid>

                <Grid item lg={4} xs={2}></Grid>

                <Grid className={styles.aboutThePlatform} lg={8} item xs={10}>
                    <Box className={styles.paragraph}>
                        <Box component='div'>
                            تقدم لك منصة تدرب الإلكترونية دورة أسرار قيادة الحياة، بإشراف الأستاذة عفاف محمد الجاسم، وهي المؤسس والرئيس التنفيذي لشركة إنسان للاستشارات والتدريب.
                        </Box>
                        <Box component='div'>
                            لديها خبرة أكثر من ثلاثين عاماً في مجال الاستشارات الاجتماعية والتدريب، مدرب مدربين فئة A والمشرف العام لنادي إنسان للمدربين.
                        </Box>
                        <Box component='div'>
                            مستشار تدريب في معهد وليام جلاسر الدولي لنظرية الاختيار والعلاج الواقعي، عضو مجلس إدارة في جمعية الخدمة الاجتماعية الكويتية.
                        </Box>
                        <Box component='div'>
                            عضو المجلس الاستشاري للجنة الطبية في جمعية صندوق إعانة المرضى، وعضو مؤسس في جمعية الاختيار الكويتية، مقيم داخلي ومحكم دولي معتمد من المؤسسة الأوروبية لإدارة الجودة EFQM.
                        </Box>
                        <Box component='div'>
                            عضو في الجمعية البريطانية للتنويم الايحائي العلاجي UK Guild منذ عام 2000.
                        </Box>
                    </Box>
                    <Box className={styles.title}>ماذا سوف تتعلم في دورة مبادئ قيادة الحياة؟</Box>
                </Grid>
                <Grid item lg={4} xs={2}></Grid>

                <Grid className={styles.aboutThePlatform} lg={8} item xs={10}>
                    <Box className={styles.paragraph}>
                        <Box component='div'>
                            تقدم لك منصة تدرب الإلكترونية دورة أسرار قيادة الحياة، بإشراف الأستاذة عفاف محمد الجاسم، وهي المؤسس والرئيس التنفيذي لشركة إنسان للاستشارات والتدريب.
                        </Box>
                        <Box component='div'>
                            لديها خبرة أكثر من ثلاثين عاماً في مجال الاستشارات الاجتماعية والتدريب، مدرب مدربين فئة A والمشرف العام لنادي إنسان للمدربين.
                        </Box>
                        <Box component='div'>
                            مستشار تدريب في معهد وليام جلاسر الدولي لنظرية الاختيار والعلاج الواقعي، عضو مجلس إدارة في جمعية الخدمة الاجتماعية الكويتية.
                        </Box>
                        <Box component='div'>
                            عضو المجلس الاستشاري للجنة الطبية في جمعية صندوق إعانة المرضى، وعضو مؤسس في جمعية الاختيار الكويتية، مقيم داخلي ومحكم دولي معتمد من المؤسسة الأوروبية لإدارة الجودة EFQM.
                        </Box>
                        <Box component='div'>
                            عضو في الجمعية البريطانية للتنويم الايحائي العلاجي UK Guild منذ عام 2000.
                        </Box>
                    </Box>
                    <Box className={styles.title}>ماذا سوف تتعلم في دورة مبادئ قيادة الحياة؟</Box>
                </Grid>
                <Grid item lg={4} xs={2}></Grid>

                <Grid className={styles.aboutThePlatform} lg={8} item xs={10}>
                    <Box className={styles.paragraph}>
                        <Box component='div'>
                            تقدم لك منصة تدرب الإلكترونية دورة أسرار قيادة الحياة، بإشراف الأستاذة عفاف محمد الجاسم، وهي المؤسس والرئيس التنفيذي لشركة إنسان للاستشارات والتدريب.
                        </Box>
                        <Box component='div'>
                            لديها خبرة أكثر من ثلاثين عاماً في مجال الاستشارات الاجتماعية والتدريب، مدرب مدربين فئة A والمشرف العام لنادي إنسان للمدربين.
                        </Box>
                        <Box component='div'>
                            مستشار تدريب في معهد وليام جلاسر الدولي لنظرية الاختيار والعلاج الواقعي، عضو مجلس إدارة في جمعية الخدمة الاجتماعية الكويتية.
                        </Box>
                        <Box component='div'>
                            عضو المجلس الاستشاري للجنة الطبية في جمعية صندوق إعانة المرضى، وعضو مؤسس في جمعية الاختيار الكويتية، مقيم داخلي ومحكم دولي معتمد من المؤسسة الأوروبية لإدارة الجودة EFQM.
                        </Box>
                        <Box component='div'>
                            عضو في الجمعية البريطانية للتنويم الايحائي العلاجي UK Guild منذ عام 2000.
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box className={styles.founderInfo}>
                        <img src="/images/profilePic.png" className={styles.founderImg} />
                        <Box className={styles.infoLines}>

                            عفاف محمد الجاسم
                        </Box>
                        <Box className={styles.infoLines}>

                            مؤسِس والرئيس التنفيذي لشركة إنسان للإستشارات والتدريب
                        </Box>
                        <Box className={styles.infoLines}>

                            خبرة ٣٠ سنة في مجال الاستشارات الاجتماعية والتدريب.
                        </Box>
                        <Box className={styles.infoLines}>

                            مدرب مدربين فئة A
                        </Box>
                        <Box className={styles.infoLines}>

                            المشرف العام لنادي إنسان للمدربين .
                        </Box>
                        <Box className={styles.infoLines}>

                            مستشار تدريب في معهد وليم جلاسر الدولي لنظرية الاختيار والعلاج الواقعي
                        </Box>
                        <Box className={styles.infoLines}>

                            عضو مجلس إدارة في جمعية الخدمة الاجتماعية الكويتية.
                        </Box>
                        <Box className={styles.infoLines}>

                            عضو المجلس الاستشاري للجنة الطبية بجمعية صندوق إعانة المرضى.
                        </Box>
                        <Box className={styles.infoLines}>

                            عضو مؤسس في جمعية الإختيار الكويتية.
                        </Box>
                        <Box className={styles.infoLines}>

                            مقيم داخلي ومحكم دولي معتمد من
                        </Box>
                        <Box className={styles.infoLines}>

                            المؤسسة الأوروبية لإدارة الجودة EFQM.
                        </Box>
                        <Box className={styles.infoLines}>

                            ‎عضو في الجمعية البريطانية للتنويم الإيحائي العلاجي .. UK GUILD  ‎منذ عام ٢٠٠٠ ميلادي
                        </Box>

                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box className={styles.filesContainer}>
                        <Box className={styles.filesList}>
                            <DescriptionIcon className={styles.filesIcon} />
                            شهادة حضور الكترونية اون لاين
                        </Box>
                        <Box className={styles.filesList}>
                            <DescriptionIcon className={styles.filesIcon} />
                            تمرين مالذي أستطيع التحكم فيه
                        </Box>
                        <Box className={styles.filesList}>
                            <DescriptionIcon className={styles.filesIcon} />
                            تمرين أرني ماعندك
                        </Box>
                        <Box className={styles.filesList}>
                            <DescriptionIcon className={styles.filesIcon} />
                            تمرين هل أفعالي تقربنا أم تبعدنا عن بعضنا البعض؟
                        </Box>
                        <Box className={styles.filesList}>
                            <DescriptionIcon className={styles.filesIcon} />
                            قياس الحاجة
                        </Box>
                        <Box className={styles.filesList}>
                            <DescriptionIcon className={styles.filesIcon} />
                            أسئلة للتفكير
                        </Box>
                        <Box className={styles.filesList}>
                            <DescriptionIcon className={styles.filesIcon} />
                            بطاقة العادات المعمرة والمدمرة
                        </Box>
                        <Box className={styles.filesList}>
                            <DescriptionIcon className={styles.filesIcon} />
                            تمرين أسئلة لقيادة حياتك
                        </Box>
                    </Box>
                </Grid>
            </Grid> 
        </>
    )
}
// var countryCurrency = localStorage.getItem('CURRENCY');

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params, req } = context;
    const res = await fetch(`https://developer.tadarab.com/wp-json/api/courses/31222/?country_code=KW`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}
