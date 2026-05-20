import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'
 
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "صباغ سعد العبدالله"

export const metadata: Metadata = {
    title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - ${title}`,
    keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
}

const Page = () => {
    return (
        <Container maxWidth="lg">
            <Stack my={5} spacing={3} alignItems={"center"}>
                <Typography color='primary.main' component={"h1"} variant='h1' fontSize={35} textAlign={"center"}>{title} | {process.env.NEXT_PUBLIC_PHONE}</Typography>
                <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                <PhoneStyle />
                <Stack alignItems="center" spacing={2}>
                    <ImageStyle src={"/Images/links-images/sabaagh_alsaalimia.jpg"} alt={title} />

                    <Stack spacing={2} alignItems="center">
                        <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                            {title} - صباغ الكويت - {process.env.NEXT_PUBLIC_PHONE}
                        </Typography>
                        <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                            يعتبر {title} في منطقة الكويت هو الصباغ الاول في الوطن العربي لجميع اصباغ دولة الكويت اتصل الان علي صباغ السالمية واحصل علي خصم 30%علي جميع انواع الاصباغ
                        </Typography>
                        <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                    </Stack>
                    <Stack spacing={2} alignItems="center">
                        <Typography variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                            صباغ - صباغ الكويت
                        </Typography>
                        <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                            يعتبر صباغ من اهم الكلمات المستخدمة في مجال اصباغ الكويت وتعني دهانات المنازل والشقق والقسائم وعمل ديكورات في البيوت وتصميم رسومات في شقق الاطفال داخل دولة الكويت تعتبر الصباغة جزءًا مهمًا لتجديد المنازل والمباني. في الكويت، هناك شركات متخصصة تقدم خدمات صباغة متنوعة. هذه الشركات تستخدم تقنيات حديثة ومواد عالية الجودة لتحقيق أفضل النتائج. تشمل خدمات الصباغة في الكويت صباغة داخلية وخارجية، ورق جدران، وحل مشاكل الجدران. الصباغ المحترف في الكويت يركز على السلامة ويعد المكان جيدًا قبل البدء بالعمل. 80% من الأفراد يشعرون بالسعادة بعد تغيير لون منازلهم. تحسين مظهر المنزل يمكن أن يزيد من قيمته. لذلك، اختيار شركة صباغة محترفة مهم للحصول على أفضل النتائج بأسعار معقولة.
                        </Typography>
                        <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                    </Stack>

                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
