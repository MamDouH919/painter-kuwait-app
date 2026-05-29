import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "معلم جبس بورد"

export const metadata: Metadata = {
    title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - ${title}`,
    keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
    description: `معلم جبس بورد في الكويت - خدمات صباغة ودهانات داخلية وخارجية باحترافية وبأفضل الأسعار. اتصل الآن على ${process.env.NEXT_PUBLIC_PHONE}`,
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_APP_SITE}/muealim-jabs-burd`,
        title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - معلم جبس بورد`,
        description: `معلم جبس بورد في الكويت - خدمات صباغة ودهانات داخلية وخارجية باحترافية وبأفضل الأسعار. اتصل الآن على ${process.env.NEXT_PUBLIC_PHONE}`,
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_APP_SITE}/Images/links-images/muealim_jabs_burd.jpg`,
                alt: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - معلم جبس بورد`,
            },
        ],
        type: 'article',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_SITE}/muealim-jabs-burd`,
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
                    <ImageStyle src={"/Images/links-images/muealim_jabs_burd.jpg"} alt="معلم جبس بورد الكويت - جبس بورد -فني جبس بورد - جبس بورد الكويت" />

                    <Typography component="h2" variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        معلم جبس بورد الكويت - جبس بورد -فني جبس بورد - جبس بورد الكويت - {process.env.NEXT_PUBLIC_PHONE}
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        معلم جبس بورد الكويت للحصول علي قواطع وديكورات احترافية في اعمال الجبس تحويل منزلك الي تحفة فنية مع افضل فني ديكورات الجبسون بورد بالكويت افضل التصميمات المتغيرة والتي يمكنك وضعها في اي موضع للتناسب مع المكان المراد العمل عليه ابو مصطفى لاعمال الديكور والجبس هو خيارك الأمثل للحصول علي أحدث تقنيات وديكورات الجبس بورد الإحترافية فنيين يمكنهم تحويل منزلك الي تحفه فنيه للتميز بين الأقارب والأصحاب يمكنك الأن التواصل مع الفني لطلب معلم جبس بورد شاطر فنيين خبرة مسؤولون عن تركيب ألواح الجبس في مجموعة متنوعة من الأماكن ، بما في ذلك المباني السكنية والتجارية والصناعية. يضمنون تثبيت ألواح جبس بورد المنزل بشكل صحيح وآمن ، وفقًا لقوانين ولوائح البناء. تقديم افضل الحلول الهندسية في كل ما يخص الجبس بورد وصيانة الديكورات التي تحتاج الي تعديل او صيانة تجهيز المنزل باحدث صياحات الديكورات التي تظهر الزوق الرفيع لاصحاب المنزل يمكنك الحصول على المكان المثالي في الحداثة لمنزلك, مع افضل معلم جبس بورد بالكويت اتصل بنا الآن لتبدأ في مشروعك فريقنا متاح على مدار الساعة طوال أيام الأسبوع لمساعدتك في إنجاز المهمة بالشكل الصحيح.
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
