"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { styled } from "@mui/material/styles";

import Link from "next/link";
import { Card, Stack } from "@mui/material";
import { FaPhone } from "react-icons/fa";

const slides = [
    {
        id: 1,
        title: "صباغ الكويت",
        subtitle: "أفضل صباغ في الكويت",
        description: "خدمات الأصباغ والدهان المتميزة",
        buttonText: "اتصل بنا الآن",
        image: "/Images/sabagh-kuwait-the.webp",
        phone: `${process.env.NEXT_PUBLIC_PHONE}`,
        ariaLabel: "أبو يوسف - صباغ الكويت",
    },
    {
        id: 2,
        title: "صباغ شاطر ورخيص",
        subtitle: "جودة عالية وأسعار منافسة",
        description: "نقدم أفضل خدمات الأصباغ في الكويت",
        buttonText: "شاهد أعمالنا",
        image: "/Images/sabagh-kuwait-about.webp",
        phone: `${process.env.NEXT_PUBLIC_PHONE}`,
        ariaLabel: "خدمات متميزة - صباغ الكويت",
    },
    {
        id: 3,
        title: "صباغ محترف بالكويت",
        subtitle: "خبرة تزيد عن 25 عاماً",
        description: "فريق من أمهر الصباغين المحترفين",
        buttonText: "احصل على عرض سعر",
        image: "/Images/sabagh-kuwait-team.webp",
        phone: `${process.env.NEXT_PUBLIC_PHONE}`,
        ariaLabel: "فريق محترف - صباغ الكويت",
    },
];

interface AnimatedTextProps {
    lines: string[];
    isActive: boolean;
    delay?: number;
}

const Root = styled(Stack)(({ theme }) => ({
    "& .image-style": {
        objectFit: "cover",
    },
    "& .gradient-overlay": {
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(to right,rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6))"
    },
    "& .content-overlay": {
        position: "absolute", // absolute
        inset: 0, // inset-0
        display: "flex", // flex
        alignItems: "center", // items-center

    },
    "& .bottom-gradient": {
        position: "absolute", // absolute
        bottom: 0, // bottom-0
        left: 0, // left-0
        width: "100%", // w-full
        height: theme.spacing(32 / 4), // h-32 → 8rem (128px)
        backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)", // bg-gradient-to-t from-black/20 to-transparent
    },
    "& .animated-line": {
        transition: "all 0.7s ease", // transition-all duration-700
        transform: "translateY(2rem)", // default translate-y-8 (2rem)
        opacity: 0, // default opacity-0
        "&.visible": {
            transform: "translateY(0)", // translate-y-0
            opacity: 1, // opacity-100
        },
    },
}));

// Styled components for AnimatedText
const AnimatedTextContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
}));

const LinkStyled = styled(Link)(() => ({
    textDecoration: "none",
}));

const AnimatedLine = styled(Stack)(() => ({
    transition: "all 0.7s ease",
    "&.visible": {
        transform: "translateY(0)",
        opacity: 1,
    },
    "&.invisible": {
        transform: "translateY(2rem)",
        opacity: 0,
    },
    // transform: isVisible ? "translateY(0)" : "translateY(2rem)",
    // opacity: isVisible ? 1 : 0,
}));

const MainHeading = styled("h1")(({ theme }) => ({
    fontSize: "3rem",
    fontWeight: "bold",
    color: "white",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    margin: 0,
    lineHeight: 1.2,
    [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem",
    },
}));

const SubHeading = styled("h2")(({ theme }) => ({
    fontSize: "2rem",
    fontWeight: 600,
    color: "rgba(255, 255, 255, 0.9)",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    margin: 0,
    lineHeight: 1.3,
    [theme.breakpoints.down("md")]: {
        fontSize: "1.75rem",
    },
}));

const Description = styled("p")(({ theme }) => ({
    fontSize: "1.25rem",
    fontWeight: 400,
    color: "rgba(255, 255, 255, 0.8)",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    margin: 0,
    lineHeight: 1.4,
    [theme.breakpoints.down("md")]: {
        fontSize: "1.125rem",
    },
}));

const PhoneCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(0.25),
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.primary.main,
    width: "300px",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    },
}));

const PhoneCardContent = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    padding: theme.spacing(1),
}));

const PhoneIconContainer = styled("div")(({ theme }) => ({
    width: "48px",
    height: "48px",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const PhoneInfo = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
}));

const PhoneLabel = styled("p")(({ theme }) => ({
    fontWeight: "bold",
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    margin: 0,
    fontSize: "0.875rem",
}));

const PhoneNumber = styled("p")(({ theme }) => ({
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    margin: 0,
    lineHeight: 1,
}));
const SplideStyle = styled(Splide)(({ theme }) => ({
    height: 700,
    [theme.breakpoints.down("md")]: {
        height: 550,
    },
}));

function AnimatedText({ lines, isActive, delay = 500 }: AnimatedTextProps) {
    const [visibleLines, setVisibleLines] = useState<number>(0);

    useEffect(() => {
        if (isActive) {
            setVisibleLines(0);
            lines.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleLines(index + 1);
                }, index * delay);
            });
        } else {
            setVisibleLines(0);
        }
    }, [isActive, lines, delay]);

    return (
        <AnimatedTextContainer>
            {lines.map((line, index) => (
                <AnimatedLine
                    key={index}
                    className={`${index < visibleLines ? "visible" : "invisible"}`}
                    spacing={2}
                >
                    {index === 0 && (
                        <MainHeading
                            itemProp="name"
                            aria-label={`العنوان الرئيسي: ${line}`}
                        >
                            {line}
                        </MainHeading>
                    )}
                    {index === 1 && (
                        <SubHeading
                            itemProp="description"
                            aria-label={`العنوان الفرعي: ${line}`}
                        >
                            {line}
                        </SubHeading>
                    )}
                    {index === 2 && (
                        <Description
                            itemProp="about"
                            aria-label={`الوصف: ${line}`}
                        >
                            {line}
                        </Description>
                    )}
                    {index === 3 && (
                        <LinkStyled
                            href={`tel:+965${line}`}
                            aria-label={`اتصل بنا على الرقم: ${line}`}
                            itemProp="telephone"
                        >
                            <PhoneCard>
                                <PhoneCardContent>
                                    <PhoneIconContainer>
                                        <FaPhone size={20} color="white" />
                                    </PhoneIconContainer>
                                    <PhoneInfo>
                                        <PhoneLabel>هاتف</PhoneLabel>
                                        <PhoneNumber>{line}</PhoneNumber>
                                    </PhoneInfo>
                                </PhoneCardContent>
                            </PhoneCard>
                        </LinkStyled>
                    )}
                </AnimatedLine>
            ))}
        </AnimatedTextContainer>
    );
}

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSlideActive, setIsSlideActive] = useState(true);

    // i want make sometjing after 3 seconds
    const [isSlideActiveFirst, setIsSlideActiveFirst] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsSlideActiveFirst(false);
        }, 3000);
    }, []);

    const handleSlideChange = (splide: unknown, newIndex: number) => {
        setIsSlideActive(false);
        setTimeout(() => {
            setCurrentSlide(newIndex);
            setIsSlideActive(true);
        }, 100);
    };

    useEffect(() => {
        setIsSlideActive(true);
    }, []);

    return (
        <Root
            mt={8}
            height={{
                xs: 550,
                md: 700,
            }}
            position={"relative"}
            overflow={"hidden"}
            role="region"
            aria-label="شريط عرض صباغ الكويت"
            aria-roledescription="carousel"
        >
            <SplideStyle
                options={{
                    type: "loop",
                    perPage: 1,
                    perMove: 1,
                    gap: 0,
                    pagination: true,
                    arrows: true,
                    direction: "rtl",
                    autoplay: true,
                    interval: 6000,
                    pauseOnHover: true,
                    resetProgress: false,
                    cover: true,
                    slideFocus: false,
                }}
                onMove={handleSlideChange}
                className="hero-slider"
                aria-label="شريحة عرض"
            >
                {slides.map((slide, index) => (
                    <SplideSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            <Stack
                                position={"relative"}
                                width={"100%"}
                                height={{
                                    xs: 550,
                                    md: 700,
                                }}
                            >
                                <Image
                                    alt={slide.title}
                                    className="image-style"
                                    src={
                                        index === 0
                                            ? isSlideActiveFirst
                                                ? "/Images/low-quality-placeholder.webp"
                                                : slide.image
                                            : slide.image
                                    }
                                    placeholder="blur"
                                    blurDataURL="/Images/low-quality-placeholder.webp"
                                    fill
                                    priority={index === 0}
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                            </Stack>
                            <div className="gradient-overlay" />

                            <div className="content-overlay">
                                <Stack width={"100%"} px={{ sm: 15, xs: 3 }}>
                                    <Stack>
                                        <AnimatedText
                                            lines={[slide.title, slide.subtitle, slide.description, slide.phone]}
                                            isActive={currentSlide === index && isSlideActive}
                                            delay={400}
                                        />
                                    </Stack>
                                </Stack>
                            </div>

                            <div className="bottom-gradient" />
                        </div>
                    </SplideSlide>
                ))}
            </SplideStyle>
        </Root>
    );
}
