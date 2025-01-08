"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import { data } from "./Utils/Data";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        marginTop: "40px",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
            color: "black",
          }}
        >
          <Image src="/Logo.png" alt="Logo" width={150} height={80}  loading="lazy" />
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 1,
            color: "black",
          }}
        >
          alkye
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "#6c6c6c",
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          The easiest test you will ever do
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          width: "100%",
          pb: 2,
        }}
      >
        {data?.map((card, index) => (
          <Link key={card?.id} href={`/details/${card?.id}`} passHref>
            <Card
              key={index}
              sx={{
                minWidth: { xs: "300px", md: "400px" },
                maxWidth: { xs: "300px", md: "400px" },
                bgcolor: "transparent",
                borderRadius: "24px",
                flexShrink: 0,
                position: "relative",
                backgroundImage: `url(${card?.image_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: "rgba(0,0,0,0.4)",
                  borderRadius: "inherit",
                },
              }}
            >
              <CardContent
                sx={{
                  height: "400px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  p: 3,
                }}
              >
                <Chip
                  label={card?.prompt}
                  sx={{
                    bgcolor: "#000",
                    color: "#fff",
                    borderRadius: "16px",
                    mb: 2,
                    width: "fit-content",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    lineHeight: 1.4,
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {card?.short_description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
