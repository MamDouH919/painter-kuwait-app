import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "صباغ شقق بالكويت"

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
                    <ImageStyle src={"/Images/links-images/shaqaq_sabaagh_bi_alkuayt.jpg"} alt="صباغ شقق بالكويت - صباغ شقق - صباغ شقق شاطر بالكويت - صباغ شقق ممتاز بالكويت" />

                    <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        صباغ شقق بالكويت - صباغ شقق - صباغ شقق شاطر بالكويت - صباغ شقق ممتاز بالكويت - {process.env.NEXT_PUBLIC_PHONE}
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        يعتبر صباغ شقق في الكويت من أفضل الصباغين التي تساعدك على اختيار مجموعة متنوعة من التصميمات العصرية التي تساعد بدورها على عمل مجموعة متنوعة من التشطيبات التي تضاهي أفضل الديكورات العالمية، يتم عمل مجموعة ديكورات واجهة رائعة تجعل الجميع يتعجب من جمالها، كما يتم الاهتمام بتنسيق الـ بألوان بشكل كبير، يتم توفير مجموعة من التصميمات الجميلة لجميع الديكورات الداخلية في المنازل، نهتم بعمل كل ما هو جديد للمنازل، يتم الاتصال بنا ومن ثم التعرف على أفضل العروض والتصميمات. سيتم الاتفاق داخل بيتك بعد الاطلاع على الكتالوجات والاختيار الأنسب من حيث المساحة والتكاليف، حيث أن هناك مجموعة كبيرة من التصميمات والديكورات ليتم الاختيار من بينها، يتم تحديد الالوان على حسب المكان والعفش الموجود به ليتم عمل تناسق كلي في المكان، نهتم بعمل كل ما هو جديد لينال رضاء العملاء.
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
