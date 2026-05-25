import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "معلم صباغ"

export const metadata: Metadata = {
    title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - ${title}`,
    keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
    description: `معلم صباغ في الكويت - خدمات صباغة ودهانات داخلية وخارجية باحترافية وبأفضل الأسعار. اتصل الآن على ${process.env.NEXT_PUBLIC_PHONE}`,
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_APP_SITE}/muealim-sabagh`,
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_SITE}/muealim-sabagh`,
    }
}

const Page = () => {
    return (
        <Container maxWidth="lg">
            <Stack my={5} spacing={3} alignItems={"center"}>
                <Typography color='primary.main' component={"h1"} variant='h1' fontSize={35} textAlign={"center"}>{title} | {process.env.NEXT_PUBLIC_PHONE}</Typography>
                <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                <PhoneStyle />
                <Stack alignItems="center" spacing={2}>
                    <ImageStyle src={"/Images/links-images/muealim-sabagh.jpg"} alt="معلم صباغ" />

                    <Typography component="h2" variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        ا<strong>صباغ الكويت</strong> - {process.env.NEXT_PUBLIC_PHONE}
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        <strong>صباغ الكويت</strong> يوفر لكم كل هذه الاشياء في عمله فان خبرته تجعله افضل صباغ حيث انه يعمل بأفضل الخامات عليه الجودة الذي تجعل عمليه الدهان تتم على اكمل وجه كما يتميز بانه يمتلك فريق عمل متخصص ويجعله يتمم المهمة في اسرع وقت كما يتميز <strong>صباغ الكويت</strong> بانه يوفر لكم ارخص الاسعار داخل دولة الكويت ويتبع الطرق الحديثة في عمليات الدهان ودائما ما يسعى لتطوير الخدمات التي يقدمها من اجل ارضاء العملاء
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
