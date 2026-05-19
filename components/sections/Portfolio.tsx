"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import Image from "next/image";
import portfolio from "@/data/portfolio.json";
import { Card, CardContent, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionTitle from "../layouts/SectionTitle";

const Root = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.grey[50], // bg-gray-50          // py-16 → top padding
    "& .image-style": {
        width: "100%",      // w-full
        height: "24rem",    // h-96 = 24 * 4px = 384px
        objectFit: "cover", // object-cover
    },
    ".figure-style": {
        position: "relative",
    },
    ".card-style": {
        overflow: "hidden",               // overflow-hidden
        transition: "all 0.3s ease",      // transition-all duration-300
        "&:hover": {
            boxShadow: theme.shadows[4],    // hover:shadow-lg (MUI shadow level ~4)
        },
    },
    ".card-content-style": {
        padding: "0 !important",          // !important to override MUI CardContent padding
    },
    ".header-style": {
        textAlign: "center",           // text-center
        marginBottom: theme.spacing(12)
    },
    "& .sr-only": {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
    },
}));


const Portfolio = () => {
    return (
        <Root maxWidth="lg" sx={{ my: 5 }} id={"our-services"}>
            <Container maxWidth="lg">

                {/* Heading */}
                <header className="header-style">
                    <SectionTitle
                        sectionTitle='معرض أعمالنا'
                        subSectionTitle="شاهد بعض من أعمالنا المتميزة"
                    />
                </header>

                {/* Carousel */}
                <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        perMove: 1,
                        gap: "1rem",
                        pagination: true,
                        arrows: true,
                        direction: "rtl",
                        autoplay: true,
                        interval: 3000,
                        slideFocus: false,
                        breakpoints: {
                            768: { perPage: 1 },
                            1024: { perPage: 2 },
                        },
                    }}
                    aria-label="شرائح من أعمال صباغ الكويت"
                >
                    {portfolio.map((item, index) => (
                        <SplideSlide key={index} aria-label={`شريحة ${index + 1}: ${item.title}`}>
                            <Card className="card-style">
                                <CardContent className="card-content-style">
                                    <figure className="figure-style">
                                        <Image
                                            src={"/" + item.image}
                                            alt={`${item.title} - صباغ الكويت`}
                                            width={650}
                                            height={650}
                                            className="image-style"
                                            loading="lazy"
                                        />
                                        {item.title && (
                                            <figcaption className="sr-only">{item.title}</figcaption>
                                        )}
                                    </figure>
                                </CardContent>
                            </Card>
                        </SplideSlide>
                    ))}
                </Splide>

            </Container>
        </Root>
    );
};

export default Portfolio;