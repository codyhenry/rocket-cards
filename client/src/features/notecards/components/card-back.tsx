import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/system/Stack";

interface cardBackProps {
  flipCard: () => void;
  content: string | string[]; //array in the case of list
}
const CardBack = ({ flipCard, content }: cardBackProps) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 345 }}>
      <CardActions>
        <Stack direction="row" justifyContent="space-between">
          <Button size="small" color="primary">
            Edit
          </Button>
          <Button size="small" color="primary">
            Learned
          </Button>
        </Stack>
      </CardActions>
      <CardActionArea onClick={() => flipCard}>
        <CardContent sx={{ minHeight: 200 }}>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardBack;
/**
 * Todo:
 * edit button
 * alphabetically sort button -> cardList
 * create a card (at the top of screen) -> cardList
 * add tags button
 * show/hide tags button
 * learned button (adds "learned" tag)
 * show num learned out of total -> cardList
 * view full screen button (for longer cards)
 * Maybe later: add images
 * Bottom Row buttons on 1 row
 * Add list (bulleted list)
 * Add code (Code Markup)
 */

/**
 * Card will be in an array of cards
 * Each array of cards will be from a category
 * Each card will contain tags
 * The tags will be shared among the entire array
 */
