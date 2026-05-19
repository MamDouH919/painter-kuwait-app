"use client"
import React from 'react'
import { styled } from "@mui/material/styles";
import { Container, Paper, Stack, Typography } from '@mui/material';
import SectionTitle from '../layouts/SectionTitle';


const PREFIX = "Services";
const classes = {
    text: `${PREFIX}-text`,
    container: `${PREFIX}-container`
};


const Root = styled(Container)(({ theme }) => ({
    [`& .${classes.text}`]: {
        color: theme.palette.getContrastText(theme.palette.secondary.main)
    },
    [`& .${classes.container}`]: {
        position: "relative",
        background: theme.palette.background.default,
        borderRadius: 20,
        boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        [`&::before`]: {
            content: '""',
            position: "absolute",
            top: "-5px",
            left: "-5px",
            width: "100px",
            height: "100px",
            background: theme.palette.primary.main,
            zIndex: -1,
            borderRadius: 20,
            transition: "width 0.3s ease, height 0.3s ease",
        },
        [`&::after`]: {
            content: '""',
            position: "absolute",
            bottom: "-5px",
            right: "-5px",
            width: "100px",
            height: "100px",
            background: theme.palette.primary.main,
            zIndex: -1,
            borderRadius: 20,
            transition: "width 0.3s ease, height 0.3s ease",
        },
        '&:hover': {
            [`&::after`]: {
                width: "150px",
                height: "100%",
            },
            [`&::before`]: {
                width: "150px",
                height: "100%",
            },
        },
    },
}));

const Services = () => {
    return (
        <Root maxWidth="lg" sx={{ my: 5 }} id={"our-services"}>
            <SectionTitle sectionTitle='خدماتنا' />
            <Stack spacing={5} my={10}>
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color='primary.main'>
                        هل تبحث عن صباغ متميز في الكويت؟ أتساءل كيف يمكن أن تحصل على خدمات دهان عالية الجودة بأسعار تنافسية؟
                    </Typography>
                    <Typography textAlign={"center"} fontSize={15} color='text.secondary' width={{ xs: "auto", md: "80%" }}>
                        اذا كنت تبحث عن أفضل شركة صباغ في الكويت، فشركة <strong>صباغ الكويت</strong> هي الخيار المثالي لك. نقدم خدماتنا المتميزة في الدهان، مثل دهان الجدران والأسقف والبوابات والأبواب والأرضيات. نعمل بجد لتقديم أفضل جودة واحترافية لخدماتنا. فريقنا مؤهل ومدرّب على أحدث تقنيات الدهان. نستخدم أفضل المواد والمعدات لضمان دقة تنفيذ أعمال الصباغة. نحرص على تقديم خدمات سريعة ونظيفة، مع الحفاظ على نظافة الموقع.

                        اتصل بنا الان ولا تترد في طلب الخدمة
                    </Typography>
                </Paper>
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color='primary.main'>
                        <strong>صباغ الكويت</strong>: خدمات دهان احترافية بأفضل الأسعار
                    </Typography>
                    <Typography textAlign={"center"} fontSize={15} color='text.secondary' width={{ xs: "auto", md: "80%" }}>
                        في الكويت، يبحث الكثيرون عن صباغ يقدم خدمات دهان احترافية بأسعار تنافسية. هل تعلم أن هناك فرقًا كبيرًا بين صباغ احترافي وعامل دهان عادي؟ كيف يمكنك الحصول على أفضل قيمة مقابل المال من خدمات الدهان؟ سنستكشف في هذا المقال خدمات الصباغ المتميزة في الكويت. سنعرف كيف يمكنك اختيار أفضل صباغ محترف. هذا الاختيار يمكن أن يجعل فرقًا كبيرًا في جودة الدهان والمظهر النهائي لمنزلك.

                        كيف يمكن للصباغ الرخيص أن يوفر لك المال؟

                        الصباغ الرخيص في الكويت يوفر المال بطريقة ذكية. أسعارهم تنافسية ويمكن الوصول إليها من قبل الجميع. يستخدمون مواد عالية الجودة لتحقيق أقصى فائدة. خبرتهم تضمن لك الحصول على أفضل قيمة مقابل المال. هذا يقلل من التكلفة ويضمن جودة عالية.
                    </Typography>
                </Paper>
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color='primary.main'>
                        أهمية اختيار صباغ محترف وخبير
                    </Typography>
                    <Typography textAlign={"center"} fontSize={15} color='text.secondary' width={{ xs: "auto", md: "80%" }}>
                        عند البحث عن خدمات الدهان، من المهم جدًا اختيار صباغ محترف. هذا الضمان لنتائج دهان رائعة وإتمام المشروع في الوقت المحدد. كما يضمن الميزانية المتفق عليها. الصباغ الخبير يقدم نصائح حول اختيار ألوان الدهان المناسبة. كما يعرف آخر صيحات الموضة في الديكور والتصميم الداخلي. هذا يساعدك على إضفاء لمسة عصرية على منزلك.

                        يستخدم الصباغ الخبير أفضل المواد والمنتجات لضمان جودة الدهان. هذا يوفر لك الكثير من الوقت والجهد في المستقبل. .

                        من المهم البحث عن صباغ محترف وخبير بدلاً من الخيارات الرخيصة. الاستثمار في خدمات الصباغ الاحترافية يضمن لك نتائج دهان متميزة وطويلة الأمد.

                        اختيار ألوان الدهان المناسبة مهم جدًا لمنزلك. يمكن أن تحول الغرفة إلى مكان مريح وجذاب. هناك نصائح مهمة يجب مراعاتها عند الاختيار.

                        أولًا، فكر في إضاءة الغرفة ومساحاتها. الألوان الفاتحة تجعل الغرفة تبدو أكبر ومرحبة. بينما الألوان الداكنة تجعل الغرفة تبدو أصغر. يجب أيضًا التنسيق بين ألوان الجدران والأثاث. هذا يساعد في تحقيق تناغم ديكوري جميل.
                    </Typography>
                </Paper>
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color='primary.main'>
                        تقنيات الدهان الحديثة والمبتكرة
                    </Typography>
                    <Typography textAlign={"center"} fontSize={15} color='text.secondary' width={{ xs: "auto", md: "80%" }}>
                        الصباغ الرخيص مثالي إذا كان لديك ميزانية محدودة. يمكنك الحصول على خبرات عالية بأسعار معقولة. هذا بسبب الكفاءة والأسعار التنافسية.

                        اختيار ألوان الدهان مهم للجو العام. نقدم لك نصائح لاختيار الألوان المناسبة. ننصحك بالتنسيق بين الألوان للحصول على ديكور رائع.
                    </Typography>
                </Paper>

            </Stack>
        </Root>
    )
}

export default Services