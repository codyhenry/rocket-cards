import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Todo: make these cards polygonal (8-20 sides)
// Todo: action -> goes to flashcards screen
interface topicCardProps {
  name: string;
  numLearned: number;
  numCards: number;
}
const TopicCard = ({ name, numLearned, numCards }: topicCardProps) => {
  return (
    <Box>
      <Card sx={{ minWidth: 275, maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {numLearned}/{numCards} learned
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
