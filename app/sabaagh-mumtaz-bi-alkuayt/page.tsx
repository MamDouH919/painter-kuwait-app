import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "صباغ ممتاز بالكويت"

export const metadata: Metadata = {
    title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - ${title}`,
    keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
    description: `صباغ ممتاز بالكويت في الكويت - خدمات صباغة ودهانات داخلية وخارجية باحترافية وبأفضل الأسعار. اتصل الآن على ${process.env.NEXT_PUBLIC_PHONE}`,
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_APP_SITE}/sabaagh-mumtaz-bi-alkuayt`,
        title: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - صباغ ممتاز بالكويت`,
        description: `صباغ ممتاز بالكويت في الكويت - خدمات صباغة ودهانات داخلية وخارجية باحترافية وبأفضل الأسعار. اتصل الآن على ${process.env.NEXT_PUBLIC_PHONE}`,
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_APP_SITE}/Images/links-images/sabaagh_mumtaz_bi_alkuayt.jpg`,
                alt: `صباغ الكويت - ${process.env.NEXT_PUBLIC_PHONE} - صباغ شاطر ورخيص - صباغ ممتاز بالكويت`,
            },
        ],
        type: 'article',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_SITE}/sabaagh-mumtaz-bi-alkuayt`,
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
                    <ImageStyle src={"/Images/links-images/sabaagh_mumtaz_bi_alkuayt.jpg"} alt="صباغ ممتاز الكويت - خدمات دهان احترافية" />

                    <Typography component="h2" variant="h2" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        صباغ ممتاز الكويت - خدمات دهان احترافية - {process.env.NEXT_PUBLIC_PHONE}
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        نحن في صباغ ممتاز الكويت، فخورون بخدمات الدهان التي نقدمها. فريقنا يوفر خدمات عالية الجودة بأسعار مناسبة. نحن نستخدم التقنيات الحديثة واصباغ ممتازة لتزويدكم بمظاهر جميلة وجذابة. إذا كنتم بحاجة لدهان لمنزلكم أو مشروعكم التجاري، اعتمدوا على خبرتنا. تواصلوا معنا اليوم لخدمات دهان مميزة في الكويت. خدمات صباغ ممتاز الكويت تحتوي على العديد من خدمات الدهان. تقدم لجميع أنواع المباني والمساحات خدماتنا. نحن نختص في تزيين المنازل والشقق وأماكن العمل مثل المحال والمصانع والورش. نقدم الأفضل بفضل سنوات الخبرة التي اكتسبناها. إننا دائما نحرص على تطوير مهاراتنا ومتابعة أحدث التقنيات. ذلك يساعدنا على تحقيق نتائج جميلةاختيار <strong>صباغ الكويت</strong> مرتبط بجودتنا العالية وكفاءتنا. نحن ندعم دهاناتنا ذات الجودة والاصباغ المثالية في صباغ ممتاز الكويت، نقدم مجموعة واسعة من أنواع الدهانات. تلبي احتياجات جميع عملائنا. الأنواع تتضمن المائية والزيتية والأكريليك والإيبوكسي والبلاستيكية. نحن نستخدم منتجات عالية الجودة لأفضل النتائج. تشكيلتنا من الاصباغ في الكويت هي الأوسع والأكثر تنوعًا. تم تصميمها لتناسب جميع الأذواق والغرض، بما يشمل منازل وشقق ومباني تجارية ومصانع وورش. اصباغنا تتميز بالجودة والمتانة والتنوع. إذا كنت تبحث عن دهان مائي للحوائط أو زيتي للأرضيات، صباغ ممتاز الكويت هو الخيار المثالي. تصل تشكيلتنا بين الجودة والأداء لنضمن لك النتائج المطلوبة. نحن نقدم خدمات دهان احترافية بفضل الاستثمار بأفضل المنتجات والتقنيات. صباغ ممتاز الكويت هو اختيارك الأمثل لأنواع الدهانات الفائقة في الجودة.
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
