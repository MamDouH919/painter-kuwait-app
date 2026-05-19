import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "تركيب ورق جدران"

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
                    <ImageStyle src={"/Images/links-images/tarkib_waraq_judran.jpg"} alt="تركيب ورق جدران - فني تركيب ورق جدران - معلم تركيب ورق جدران في الكويت - ورق جدران الكويت" />

                    <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        تركيب ورق جدران - فني تركيب ورق جدران - معلم تركيب ورق جدران في الكويت - ورق جدران الكويت - 90998489
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        تستخدم شركة تركيب ورق جدران الكويت افضل ورق الجدران من أفضل المحلات التجارية ومنها ورق جدران الفينيل بأنواعه وورق جدران معدني وآخر من النسيج العشبي وأوراق جدران ثلاثية الأبعاد بأشكال مختلفةيقدم معلم تركيب تركيب ورق جدران الكويت كافة خدمات تشطيبات ورق الجدران والدهانات مقابل أسعار مناسبة للجميع، بجانب أنه يوفر خصومات وعروض فعالة على خدمات تشطيبات كاملة لجدران الفلل والمنازليمكنكم الآن طلب خدمات تركيب ورق جدران رخيص الكويت من منازلكم عن طريق التواصل على ارقام الشركة المتاحة على الموقع على مدار الأسبوع وعلى الفور يقوم احد موظفين خدمة العملاء بالرد عليكم وأخذ كافة طلبات تركيب ورق جدران او خدمات الدهانات. ويتم تحديد موعد مناسب حتى يتمكن صباغ معلم تركيب ورق جدران بالكويت من القدوم إلى منازلكم وأخذ كافة مقاسات الجدران والأسقف لكافة الغرف. وكذلك يقوم <strong>صباغ الكويت</strong> بعرض تصاميم الدهانات وتصاميم اشكال اوراق الجدران على العملاء لاختيار الأشكال المفضلة لديهم على حسب أذواقهم وبعد ذلك يقوم الفني أو الصباغ بتوفير جميع المستلزمات من الادوات والدهانات واوراق الحائط ومعدات التركيب ويبدأ فورا في إنجاز المهام.
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
