"use client"

import React from "react"
import { styled } from "@mui/material/styles"
import { Container, Typography, Box, Button } from "@mui/material"
import Link from "next/link"

// Root Section
const Root = styled("section")(({ theme }) => ({
    padding: theme.spacing(8, 0), // py-16
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    width: "80%",
    margin: "0 auto",
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.shadows[6],
    textAlign: "center",
}))

// Heading
const Title = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    fontSize: "1.875rem", // ~text-3xl
}))

// Description
const Description = styled(Typography)(({ theme }) => ({
    fontSize: "1.25rem", // ~text-xl
    marginBottom: theme.spacing(4),
}))

// Styled Button (inherits from MUI Button)
const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    fontWeight: 600,
    padding: theme.spacing(1.5, 4),
    fontSize: "1rem",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
    },
}))

const Cta = () => {
    return (
        <Root aria-labelledby="cta-title" id="cta">
            <Container>
                {/* Heading */}
                <Box component="header">
                    <Title id="cta-title" variant="h4">
                        تواصل معنا الآن
                    </Title>
                </Box>

                {/* Description */}
                <Description variant="h6">
                    احصل على استشارة مجانية وعرض سعر مخصص لمشروعك
                </Description>

                {/* Call-to-action button */}
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    title="whatsApp"
                    href={`https://wa.me/+965${process.env.NEXT_PUBLIC_PHONE}`}
                >
                    <StyledButton
                        size="large"
                        aria-label="انتقل إلى صفحة الاتصال"
                    >
                        أضغط هنا للأتصال
                    </StyledButton>
                </Link>
            </Container>
        </Root>
    )
}

export default Cta
