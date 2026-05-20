import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
import { Container, Divider, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import { ImageStyle } from '@/components/layouts/ImageStyle'

const title = "صباغ غرف اطفال"

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
                    <ImageStyle src={"/Images/links-images/sabaagh_buyut_aitfal.jpg"} alt="صباغ بيوت أطفال" />

                    <Typography variant="h1" textAlign={"center"} fontWeight={500} fontSize={30} color="primary.main">
                        صباغ غرف أطفال - {process.env.NEXT_PUBLIC_PHONE}
                    </Typography>
                    <Typography textAlign="center" fontSize={18} color="text.secondary" width={{ xs: "auto", md: "80%" }}>
                        صباغ بيوت هو افضل خدمة صباغ يقدمها <strong>صباغ الكويت</strong> في البيوت جميع انواع الدهانات المطفية والزيتة اذا كنت تبحث عن افضل و احدث تصميمات الثري دى التي اصبحت من احدث الصيحات فى مجال الديكورات. فان <strong>صباغ الكويت</strong> يمتلك باقة من الالبومات التي تضم افضل رسومات ورق الجدران التى تتناسب مع كل اذواق و اراء عملاء <strong>صباغ الكويت</strong>. ليس فقط الرسومات عزيزى العميل و لكن ايضا الجودة و السعر ف<strong>صباغ الكويت</strong> يوفر لك ورق الجدار بالشكل الذى تريده و كذلك بافضل جودة و اعلي مستوى و ايضا اقل سعر. يقدم <strong>صباغ الكويت</strong> جبس بورد باشكال متعددة تتميز بالروعة و الجمال و كذلك تصميمات داخلية و خارجية من الجبس بورد و التى يتم صناعتها على ايدى نخبة من افضل المهندسين و الفنيين المختصين ذوى الخبرة الطويلة فى هذا المجال. مع استخدام افضل الخامات للحصول على اعلى جودة ممكنة للجبس بورد ف<strong>صباغ الكويت</strong> يسعلى دائما للتميز و الجودة و ارضاء كل العملاء .
                    </Typography>
                    <Divider component="div" orientation="horizontal" sx={{ width: '30%' }} />
                </Stack>
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
