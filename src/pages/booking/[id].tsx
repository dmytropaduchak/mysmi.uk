import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Box, CircularProgress } from "@mui/material";
import { useAtom } from "jotai";
import { atom, THEMES } from "../../atom/atom";
import { useCallback, useEffect, useMemo, useState } from "react";

export const getServerSideProps = (async (context) => {
  return { props: context.params! };
}) satisfies GetServerSideProps<ParsedUrlQuery>

interface Props {
  id: string;
}

export default function Booking({ id }: Props) {
  // const [loading, setLoading] = useState(true);
  const [data] = useAtom(atom);

  // const theme = useTheme();

  const backgroundImage = useMemo(() => {
    return data.theme === THEMES.DARK
      ? "radial-gradient(circle at 50% 14em, #333333 0%, #222222 60%, #000000 100%)"
      : "radial-gradient(circle at 50% 14em, #ffffff 0%, #eeeeee 60%, #cccccc 100%)";
  }, [data.theme]);

  const fetchBooking = useCallback(async () => {
    try {
      // const response = await fetch(`/api/booking/${id}`);
      // const json = await response.json();
      // if (json?.status === 200) {
      //   setBookingData(json.data);
      // }
    } catch (err) {
      console.log("[ERROR][PAGE][BOOKING]", err);
    }
  }, [id]);

  useEffect(() => {
    fetchBooking();
  }, [fetchBooking]);

  // if (loading) {
    return (
      <Box
        sx={{
          backgroundImage,
          display: "flex",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={21} />
      </Box>
    )
  // }

  // return (
  //   <>
  //     <Box
  //       sx={{
  //         backgroundImage,
  //         display: "flex",
  //         minHeight: "100vh",
  //         justifyContent: "center",
  //         flexDirection: "column",
  //       }}
  //     >
  //       <Box
  //         sx={{
  //           maxWidth: 1200,
  //           flex: 1,
  //           mx: "auto",
  //           px: { xs: 2, md: 4 },
  //           py: { xs: 4, md: 6 },
  //           display: "flex",
  //           flexDirection: "column",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 3, md: 6 } }}>
  //           <Box sx={{ flex: 1 }}>
  //             {/* <Typography variant="h1" sx={{
  //               mb: 1,
  //               fontSize: "2.1rem",
  //               textAlign: {
  //                 xs: "center",
  //                 md: "left",
  //               },
  //             }}>
  //               {brand?.name}
  //             </Typography>
  //             <Typography
  //               variant="body1"
  //               color="text.secondary"
  //               sx={{ mb: 3, textAlign: { xs: "center", md: "left" } }}
  //             >
  //               {brand?.subtitle}
  //             </Typography>

  //             <Typography variant="h2" sx={{
  //               fontSize: "1.5rem",
  //               mb: 2,
  //             }}>
  //               {brand?.title}
  //             </Typography>
  //             <Typography variant="body1" color="text.secondary">
  //               {brand?.description}
  //             </Typography> */}
  //           </Box>

  //           {/* <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
  //             <Card sx={{ width: "100%", maxWidth: 480, borderRadius: 2, overflow: "hidden" }}>
  //               <CardActionArea
  //                 component="div"
  //                 sx={{
  //                   position: "relative",
  //                   width: "100%",
  //                   aspectRatio: "4 / 3",
  //                   display: "block",
  //                 }}
  //               >
  //                 <Box
  //                   sx={{
  //                     position: "absolute",
  //                     inset: 0,
  //                     backgroundImage: `url('/assets/brands/${brand?.slug}.webp')`,
  //                     backgroundRepeat: "no-repeat",
  //                     backgroundPosition: "center",
  //                     backgroundSize: { xs: "auto 55%", md: "auto 60%" },
  //                     filter: `grayscale(1) brightness(${data.theme === THEMES.DARK ? 0.35 : 0.6})`,
  //                     transition: "filter 200ms ease",
  //                   }}
  //                 />
  //                 <CardContent
  //                   sx={{
  //                     position: "relative",
  //                     height: "100%",
  //                     display: "flex",
  //                     flexDirection: "column",
  //                     justifyContent: "center",
  //                     px: { xs: 3, md: 4 },
  //                     py: { xs: 3, md: 4 },
  //                   }}
  //                 >
  //                   <Typography
  //                     variant="h2"
  //                     sx={{
  //                       fontSize: "2.8rem",
  //                       lineHeight: 1.1,
  //                       mb: 1,
  //                       color: "#fff",
  //                     }}
  //                   >
  //                     Need help?
  //                   </Typography>
  //                   <Typography
  //                     variant="body1"
  //                     sx={{
  //                       color: "rgba(255,255,255,0.92)",
  //                     }}
  //                   >
  //                     Don&apos;t hesitate to contact our customer service for more help and offer
  //                   </Typography>
  //                   <Box
  //                     sx={{
  //                       mt: 3,
  //                       display: "flex",
  //                       gap: 2,
  //                       justifyContent: "center",
  //                       flexWrap: "wrap",
  //                     }}
  //                   >
  //                     <Button
  //                       variant="contained"
  //                       href={`tel:+${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
  //                       onClick={onClickCallNow}
  //                       sx={{
  //                         borderRadius: 16,
  //                         px: 3,
  //                         [theme.breakpoints.down('md')]: {
  //                           width: "100%",
  //                         },
  //                       }}
  //                     >
  //                       <PhoneInTalk fontSize="small" sx={{ mr: 1 }} />
  //                       Call now
  //                     </Button>
  //                     <Booking />
  //                   </Box>
  //                 </CardContent>
  //               </CardActionArea>
  //             </Card>
  //           </Box> */}
  //         </Box>
  //       </Box>
  //     </Box>
  //   </>
  // );
}
