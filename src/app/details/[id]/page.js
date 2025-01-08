"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import { data } from "@/app/Utils/Data";
import { useRouter } from "next/navigation";

export default function ArticleDetail() {
    const router = useRouter();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [article, setArticle] = useState(null);


  useEffect(() => {
    const fetchArticle = () => {
      const foundArticle = data?.find(
        (item) => item?.id === Number(params?.id)
      );
      setArticle(foundArticle);
      setLoading(false);
    };

    fetchArticle();
  }, [params]);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (!article) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Article not found</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        color: "#fff",
        pb: 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
            color: "black",
            cursor:"pointer"
          }}
          onClick={() => router.push("/")}
        >
          <Image
            src="/Logo.png"
            alt="Logo"
            width={150}
            height={80}
            loading="lazy"
          />
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
          position: "relative",
          borderRadius: "24px",
          overflow: "hidden",
          mb: 4,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "300px", md: "600px" },
            overflow: "hidden",
            mb: 4,
          }}
        >
          <Image
            src={article?.image_url}
            alt={article?.title}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            loading="lazy"
          />
        </Box>
      </Box>

      <Box sx={{ maxWidth: "800px", mx: "auto", px: { xs: 2, md: 0 } }}>
        <Chip
          label={article?.prompt}
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "16px",
            mb: 3,
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        />

        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 4,
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "black",
          }}
        >
          {article?.short_description}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "grey.300",
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.8,
            mb: 4,
            color: "black",
          }}
        >
          {article?.content}
        </Typography>
      </Box>
    </Box>
  );
}
