import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "صباغ منازل بالكويت"

export const metadata: Metadata = {
    title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - ${title}`,
    keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
    description: `صباغ منازل بالكويت في الكويت - خدمات صباغة ودهانات داخلية وخارجية باحترافية وبأفضل الأسعار. اتصل الآن على ${process.env.NEXT_PUBLIC_PHONE}`,
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_APP_SITE}/manazil-sabaagh-bi-alkuayt`,
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_SITE}/manazil-sabaagh-bi-alkuayt`,
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
                    <ImageStyle src={"/Images/links-images/manazil_sabaagh_bi_alkuayt.jpg"} alt="صباغ منازل الكويت" />

                    <Typography component="h2" variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        صباغ منازل الكويت - {process.env.NEXT_PUBLIC_PHONE}
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        صباغ منازل الكويت عبئ التفكير في كيفية تغيير ديكورات جدران بيتك و حوائط منزلك , فان كنت تعاني من وجود قشرة علي الاسطح و الجدران او ظهور الالوان بمظهر باهت وغير انيق مما يعرضك الي الاحراج امام اصدقائك و ضيوفك. صباغ منازل الكويت وخدمات صباغ خشب بالكويت نحن بفضل الله تعالي افضل شركه في مجال الدهانات و الاصباغ بداخل الممكله و خارجها. نحن لدينا عدد كبير من الكتالوجات الحديثه التي تحتوي علي احدث التصميمات العصريه و التي تجمع تشكيله متنوعه و مختلفه من الالوان و الدهانات , ومن مميزات شركتنا اننا نملك خبره علي عبر السنوات القديمه الاخري. فنحن نملك خبره سنين عديده , ونسعي الي تقديم افضل حخدمه ممكنه لعميلنا العزيز في لاختيار النوع الانسب في التشطيب والتسمسم بشكل كامل الكستخدمه في عمليات التشطيب والصباغه. و التي نتاكد من انها سوف تحظي بسعادتك و رضاك كل ماعليك فعله هو زيارتنا بفروعنا او التواصل معنا و اخبارنا بكافة التفاصيل كنوع البنايه التي تريد دهانها سواء ان كان منزل او شركة , بالاضافه الي مساحتها حتي نتمكن من تحديد عدد العمال اللذين سوف ياتون الي زيارتك و عدد المعدات ايضا.
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
