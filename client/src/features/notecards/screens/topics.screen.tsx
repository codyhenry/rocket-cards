import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TopicsScreen = () => {
  //const {topics,isLoading,error} = useContext(FlashcardsContext)
  const flashcards: Array<string> = [];
  /**
   * Iterate through all the topics in a category
   */
  return (
    // Heading -> category
    // Carousel of topics
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      {/* Sun Image in background */}
      <Box>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Category Name
        </Typography>
        {/* Carousel of topic cards */}
      </Box>
    </Box>
  );
};

/**
 * Category -> broad category
 * Topic -> specific topic within category
 * Flashcards -> cards of a specific topic
 */
