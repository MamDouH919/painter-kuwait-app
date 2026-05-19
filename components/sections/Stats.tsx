"use client"

import React from "react"
import { styled } from "@mui/material/styles"
import { Container, Grid, Typography, Box } from "@mui/material"

// Root section
const Root = styled("section")(({ theme }) => ({
    padding: theme.spacing(8, 0), // py-16
    textAlign: "center",
    backgroundColor: theme.palette.background.default,
}))

// Hidden heading (for accessibility)
const HiddenTitle = styled("h2")({
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: 0,
})

// Stat container
const StatBox = styled(Box)(() => ({
    textAlign: "center",
}))

// Stat value
const StatValue = styled(Typography)(({ theme }) => ({
    fontSize: "2.25rem", // text-4xl
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
}))

// Stat label
const StatLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}))

const Stats = () => {
    const stats = [
        { value: "500+", label: "مشروع مكتمل" },
        { value: "25+", label: "سنة خبرة" },
        { value: "100%", label: "رضا العملاء" },
        { value: "24/7", label: "خدمة العملاء" },
    ]

    return (
        <Root aria-labelledby="stats-title" id="stats">
            <Container>
                <HiddenTitle id="stats-title">إحصائيات الشركة</HiddenTitle>

                <Grid container spacing={4}>
                    {stats.map((stat, index) => (
                        <Grid key={index} item xs={12} md={3}>
                            <StatBox>
                                <StatValue>{stat.value}</StatValue>
                                <StatLabel>{stat.label}</StatLabel>
                            </StatBox>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Root>
    )
}

export default Stats
