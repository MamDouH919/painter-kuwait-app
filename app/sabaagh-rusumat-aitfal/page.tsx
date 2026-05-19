import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "صباغ رسومات اطفال"

export const metadata: Metadata = {
    title: `صباغ الكويت - 90998489 - صباغ شاطر ورخيص - ${title}`,
    keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
}

const Page = () => {
    return (
        <Container maxWidth="lg">
            <Stack my={5} spacing={3} alignItems={"center"}>
                <Typography color='primary.main' component={"h1"} variant='h1' fontSize={35} textAlign={"center"}>{title} | 90998489</Typography>
                <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                <PhoneStyle />
                <Stack alignItems="center" spacing={2}>
                    <ImageStyle src={"/Images/links-images/sabaagh_rusumat_aitfal.jpeg"} alt="صباغ رسومات اطفال صباغ ممتاز رسومات اطفال - صباغ شاطر رسومات اطفال - صباغ فني رسومات اطفال" />

                    <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        صباغ رسومات اطفال صباغ ممتاز رسومات اطفال - صباغ شاطر رسومات اطفال - صباغ فني رسومات اطفال - 90998489
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        متوفر لدينا فريق متكامل في صبغ جميع انواع رسومات الاطفال الكرتوني داخل غرف الاطفال بافضل الالوان التي تناسب اعمارهم في الكويت واختيار كاتلوجات رسم لاطفال لاختيارهم افضل الرسومات
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
