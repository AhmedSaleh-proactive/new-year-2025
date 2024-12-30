import { Stack, Typography, useMediaQuery } from "@mui/material";
import "./App.css";
import Confetti from "react-confetti";
import logo from "../src/assets/logo.png";
import waleed from "../src/assets/waleed.png";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

function App() {
  const titleAnimation = keyframes`
    from {
      width: 0;
    }
    to {
      width: 103%;
    }
  `;

  const isSmallScreen = useMediaQuery("(max-width: 850px)");

  return (
    <Stack
      className="container"
      gap={2}
      minHeight="100vh"
      overflowY={isSmallScreen ? "scroll" : "hidden"}
    >
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={1000}
        tweenDuration={18000}
      />

      <Stack
        className="appbar"
        direction={isSmallScreen ? "column-reverse" : "row"}
        justifyContent="space-between"
        gap={2}
        alignItems={"center"}
      >
        <img src={logo} alt="proactives it logo" width={70} />

        <Typography
          variant="h3"
          data-text="Proactives IT"
          height={50}
          sx={{
            color: "transparent",
            position: "relative",
            "&::before": {
              content: "attr(data-text)",
              position: "absolute",
              color: "white",
              borderRight: "3px solid #476eb7",
              overflow: "hidden",
              whiteSpace: "nowrap",
              height: "100%",
              left: 0,
              width: 0,
              animation: `${titleAnimation} 4s linear infinite`,
            },
          }}
        >
          Proactives IT
        </Typography>
      </Stack>

      <Stack
        className="content"
        direction={isSmallScreen ? "column" : "row"}
        width="100%"
        height="100%"
        gap={4}
        justifyContent="space-between"
      >
        <motion.div
          className="waleed"
          style={{
            width: isSmallScreen ? "100%" : "40%",
            display: "flex",
            alignItems: "flex-end",
          }}
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <img src={waleed} alt="Waleed Rawhi" width="100%" height="85%" />
        </motion.div>

        <motion.div
          className="content-descriptions"
          style={{
            width: isSmallScreen ? "100%" : "60%",
            direction: "rtl",
            display: "flex",
          }}
          initial={{ x: 70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.6 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Stack gap={4} justifyContent="center">
            <Typography variant="h3" color="white" fontFamily="Cairo">
              تهانينا بحلول عام جديد مليء بالنجاحات والفرص الجديدة !
            </Typography>
            <Typography variant="h6" color="white" fontFamily="Cairo">
              نحن في <b>Proactives IT</b> نتطلع إلى تقديم أفضل الحلول التقنية
              التي تلبي طموحاتك وتدعم مسيرتك نحو المستقبل. مع بداية هذا العام،
              نؤكد على التزامنا بتحقيق التميز وخدمة عملائنا بأعلى مستويات
              الجودة. نتمنى لكم عاماً مليئاً بالسعادة والإنجازات!
            </Typography>
          </Stack>
        </motion.div>
      </Stack>
    </Stack>
  );
}

export default App;
