import { Box, Container, Stack, Typography } from "@mui/material"
import PhoneStyle from "../layouts/PhoneStyle"


const Banner = () => {
    return (
        <Box bgcolor="secondary.main" py={10} id="home">
            <Container maxWidth="md">
                <Stack
                    spacing={4}
                    border={1}
                    borderColor="primary.main"
                    borderRadius={2}
                    p={5}
                    textAlign="center"
                >
                    <Typography variant="h2" fontSize={40} color="primary.main">
                        <strong>صباغ الكويت</strong>
                    </Typography>
                    <Typography color="#000" variant="body1" lineHeight={1.7}>
                        مرحبًا بكم في خدمات <strong>صباغ الكويت</strong>، حيث نقدم خدمات صباغة
                        متكاملة تتميز بالجودة والاحترافية. نحن متخصصون في تقديم حلول صباغة
                        في الكويت عالية الجودة ونسعى دائمًا لتقديم أفضل خدمة لعملائنا.
                    </Typography>
                    <Typography color="#000" variant="body1" lineHeight={1.7}>
                        فريقنا في <strong>صباغ الكويت</strong> يتألف من خبراء ذوي كفاءة عالية،
                        والذين يستخدمون أحدث التقنيات لتقديم أفضل النتائج. نحن هنا لتحقيق
                        رؤيتكم وتلبية احتياجاتكم بأعلى مستوى من الرضا.
                    </Typography>
                    <Typography color="#000" variant="body1" lineHeight={1.7}>
                        نحن في <strong>صباغ الكويت</strong> نؤمن بأهمية التفاصيل وجودة العمل. لهذا،
                        نحرص على توفير ألوان نابضة بالحياة وتجربة صباغة مميزة.
                    </Typography>
                </Stack>
                <PhoneStyle />
            </Container>
        </Box>
    )
}

export default Banner
