import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "اصباغ الكويت"

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
                    <ImageStyle src={"/Images/links-images/aisbgh_alkuayt.webp"} alt="اصباغ الكويت" />

                    <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        ا<strong>صباغ الكويت</strong> - 90998489
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
