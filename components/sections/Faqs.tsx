"use client"

import React from "react"
import { styled } from "@mui/material/styles"
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import faqs from "@/data/faqs.json"

// Root section
const Root = styled("section")(({ theme }) => ({
  padding: theme.spacing(8, 0), // py-16
  backgroundColor: theme.palette.grey[50],
}))

// Header container
const Header = styled("header")(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
}))

// Title
const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.875rem", // ~text-3xl
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}))

// Subtitle
const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

// Accordion Wrapper
const AccordionWrapper = styled(Box)(() => ({
  width: "100%",
  paddingLeft: 16,
  paddingRight: 16,
}))

// FAQ Question Accordion
const StyledAccordion = styled(Accordion)(() => ({
  boxShadow: "none",
  borderBottom: "1px solid #e0e0e0",
  "&:before": {
    display: "none",
  },
}))

const StyledSummary = styled(AccordionSummary)(() => ({
  textAlign: "right",
  fontWeight: 500,
  fontSize: "1.125rem",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(180deg)", // flip for RTL
  },
}))

const StyledDetails = styled(AccordionDetails)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.8,
}))

const Faqs = () => {
  return (
    <Root id="faqs" aria-labelledby="faqs-title">
      <Container maxWidth="lg">
        {/* Header */}
        <Header>
          <Title id="faqs-title">الأسئلة الشائعة</Title>
          <Subtitle>إجابات على أكثر الأسئلة شيوعاً حول خدماتنا</Subtitle>
        </Header>

        {/* FAQ Accordion */}
        <AccordionWrapper>
          {faqs.map((faq, index) => (
            <StyledAccordion key={index}>
              <StyledSummary expandIcon={<ExpandMoreIcon />}>
                {faq.question}
              </StyledSummary>
              <StyledDetails>{faq.answer}</StyledDetails>
            </StyledAccordion>
          ))}
        </AccordionWrapper>
      </Container>
    </Root>
  )
}

export default Faqs
