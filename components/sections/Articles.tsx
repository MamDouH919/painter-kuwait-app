"use client"

import React from "react"
import articles from "@/data/articles.json"
import { styled } from "@mui/material/styles"
import { Container, Grid, Paper, Typography, Box } from "@mui/material"

const Section = styled("section")(({ theme }) => ({
    padding: "64px 16px",
    backgroundColor: theme.palette.grey[50],
}))

const Header = styled("header")(({ theme }) => ({
    textAlign: "center",
    marginBottom: theme.spacing(6),
}))

const Title = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    fontSize: "1.875rem", // 3xl equivalent
}))

const Subtitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}))

const ArticleCard = styled(Paper)(({ theme }) => ({
    transition: "box-shadow 0.3s ease",
    padding: theme.spacing(3),
    "&:hover": {
        boxShadow: theme.shadows[4],
    },
}))

const ArticleTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.25rem",
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
}))

const ArticleContent = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
}))

const Articles = ({ makeH1 = false }: { makeH1?: boolean }) => {
    return (
        <Section id="articles">
            <Container maxWidth="lg">
                <Header>
                    {makeH1 ? (
                        <Title variant="h1">مقالات ونصائح حول صباغ الكويت</Title>
                    ) : (
                        <Title variant="h2">مقالات ونصائح حول صباغ الكويت</Title>
                    )}
                    <Subtitle>
                        اقرأ أحدث المقالات والنصائح المتعلقة بخدمات صباغة ودهان المنازل في الكويت
                    </Subtitle>
                </Header>

                <Grid container spacing={4} display={"flex"} alignItems={"stretch"}>
                    {articles.map((article, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index} display={"flex"}>
                            <ArticleCard elevation={1}>
                                <Box>
                                    <ArticleTitle>{article.title}</ArticleTitle>
                                    <ArticleContent>
                                        {article.content.substring(0, 120)}...
                                    </ArticleContent>
                                </Box>
                            </ArticleCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Section>
    )
}

export default Articles
