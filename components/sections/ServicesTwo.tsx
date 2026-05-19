"use client"

import React from "react"
import { styled } from "@mui/material/styles"
import { Container, Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import Image from "next/image"
import { FaShieldVirus } from "react-icons/fa"

// Root container
const Root = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(8, 0),
  color: theme.palette.text.primary,
}))

// Styled header box
const HeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}))

// Styled title
const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}))

// Styled paragraph
const Paragraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontSize: "1.125rem",
}))

// Styled list
const StyledList = styled(List)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 8,
}))

// Styled list item
const StyledListItem = styled(ListItem)(() => ({
  alignItems: "center",
  padding: 0,
}))

// Styled list item icon
const StyledListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: 0,
  marginRight: 8,
}))

// Styled image box
const ImageBox = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  aspectRatio: "2 / 1",
}))

const ServicesTwo = () => {
  const services = [
    "بديل خشب",
    "بديل رخام",
    "ورق جدران",
    "بديل الشيبورد",
    "جميع انواع الأصباغ",
    "جبسون بورد بيكيه",
  ]

  return (
    <Root aria-labelledby="services-title" id="services">
      <Container>
        <Grid container spacing={6} alignItems="center">

          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <HeaderBox>
              <Title variant="h4" id="services-title">
                الصباغ الافضل في الكويت
              </Title>
            </HeaderBox>

            <Paragraph variant="body1">
              <strong>صباغ الكويت</strong> يقدم مجموعة واسعة من الأصباغ الحديثة، بما في ذلك الأصباغ
              الداخلية والخارجية، الصبغ المطفي واللماع، بالإضافة إلى الصبغ بدون رائحة والصبغ الإيطالي
              المميز.
            </Paragraph>

            {/* Services List */}
            <StyledList aria-label="خدمات الصباغ">
              {services.map((service, idx) => (
                <StyledListItem key={idx} disableGutters>
                  <StyledListItemIcon>
                    <FaShieldVirus className="w-6 h-6" color="#FACC15" />
                  </StyledListItemIcon>
                  <ListItemText
                    primary={service}
                    primaryTypographyProps={{ fontSize: "1rem" }}
                  />
                </StyledListItem>
              ))}
            </StyledList>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <ImageBox>
              <Image
                src="/Images/sabagh-kuwait-services.webp"
                alt="خدمات الأصباغ في الكويت"
                fill
                style={{
                  borderRadius: 8,
                  objectFit: "cover",
                }}
                priority
              />
            </ImageBox>
          </Grid>

        </Grid>
      </Container>
    </Root>
  )
}

export default ServicesTwo
