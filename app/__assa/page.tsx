import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import Information from '@/components/sections/Information'
// import LinksContent from '@/components/sections/LinksContent'
import { Container, Stack, Typography } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'

const titles = {
    
}

type Props = {
    params: { id: string };
};

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const _id = params.id.replace(/-/g, '_');

    const title = titles[_id as keyof typeof titles];

    return {
        title: `صباغ الكويت - 90998489 - صباغ شاطر ورخيص - ${title}`,
        keywords: `صباغ الكويت, صباغ شاطر, صباغ رخيص, اصباغ داخلية وخارجية, صباغ في الكويت, اصباغ حديثة, صباغ الكويت بأفضل الأسعار, ${title}`,
    };
}

const Page = ({ params: { id } }: { params: { id: string } }) => {
    const _id = id.replace(/-/g, '_');

    return (
        <Container maxWidth="lg">
            <Stack my={5} spacing={3} alignItems={"center"}>
                <Typography color='primary.main' component={"h1"} variant='h1' fontSize={35}>{titles[_id as keyof typeof titles]} | 90998489</Typography>
                <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                <PhoneStyle />
                {/* <LinksContent id={id} /> */}
                <Information />
            </Stack>
        </Container>
    )
}

export default Page
