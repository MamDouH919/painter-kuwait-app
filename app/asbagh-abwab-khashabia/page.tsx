import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "اصباغ ابواب خشب"

export const metadata: Metadata = {
    title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - ${title}`,
    keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
    description: `اصباغ ابواب خشب في الكويت - خدمات صباغة ودهانات داخلية وخارجية باحترافية وبأفضل الأسعار. اتصل الآن على ${process.env.NEXT_PUBLIC_PHONE}`,
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_APP_SITE}/asbagh-abwab-khashabia`,
        title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - اصباغ ابواب خشب`,
        description: `اصباغ ابواب خشب في الكويت - خدمات صباغة ودهانات داخلية وخارجية باحترافية وبأفضل الأسعار. اتصل الآن على ${process.env.NEXT_PUBLIC_PHONE}`,
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_APP_SITE}/Images/links-images/asbagh_abwab_khashabia.jpg`,
                alt: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - اصباغ ابواب خشب`,
            },
        ],
        type: 'article',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_SITE}/asbagh-abwab-khashabia`,
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
                    <ImageStyle src={"/Images/links-images/asbagh_abwab_khashabia.jpg"} alt="صباغ ابواب خشب - صباغ ابواب خشب في الكويت - صباغ ممتاز ابواب خشب - صباغ فني ابواب خشب في الكويت" />

                    <Typography component="h2" variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        صباغ ابواب خشب - صباغ ابواب خشب في الكويت - صباغ ممتاز ابواب خشب - صباغ فني ابواب خشب في الكويت - {process.env.NEXT_PUBLIC_PHONE}
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        صباغة الأبواب الخشبية مهمة للحفاظ على جمال المنزل. الأبواب الخشبية، مثل تلك من اللكر أو الناري الرمادي، تتعرض للعوامل الجوية. هذا يؤثر على مظهرها وجودتها. لذلك، الصباغة المحترفة ضرورية للحفاظ على جمال الأبواب. التلوين المنتظم يحمي الأبواب من التآكل. ويحافظ على شكلها الأنيق. الدهان الجيد يوفر حماية إضافية للخشب من الرطوبة والحشرات. ويحمي من أشعة الشمس الضارة. صباغة الأبواب الخشبية تساهم في تجديد مظهر الأبواب القديمة. يمكن إعادة صباغة الأبواب بألوان جذابة. هذا يضفي لمسة جمالية للمنزل ويحسن من المظهر العام. الأبواب الخشبية الملونة تضيف لمسة من الأناقة للمنزل. تعكس ذوقًا رفيعًا في الديكورات الداخلية. صباغة الأبواب الخشبية تعتبر استثمارًا مهمًا للحفاظ على جودة المنزل. تعزيز القيمة الجمالية للأبواب سواء كانت داخلية أو خارجية. عند البحث عن صباغ أبواب خشب ماهر في الكويت، من المهم التركيز على الخبرة والمهارة. الصباغ المحترف لديه معرفة واسعة بكل أنواع الدهانات وتقنيات رش طلاء الخشب بشكل احترافي. كما يتميز بالدقة والعناية لضمان نتائج مثالية
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
