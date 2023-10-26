import { useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Stack from "@mui/system/Stack";
interface cardFrontProps {
  flipCard: () => void;
  title?: string;
  tags?: string[];
  content: string; //array in the case of list
}

const CardFront = ({ flipCard, title, tags, content }: cardFrontProps) => {
  // const [tags, setTags] = useState(tags);
  const [isShowSettings, setIsShowSettings] = useState(false);
  //Todo get cards from context

  /**
   * Settings:
   * Edit Card -> change title, content, tags
   *
   * Show/Hide Tags
   */
  return (
    <>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="Put tags here"
      />
      {isShowSettings ? (
        <CardContent sx={{ minHeight: 200 }}>
          <Stack justifyContent="space-evenly">
            <Button size="small" color="primary">
              Edit
            </Button>
            <Button size="small" color="primary">
              Toggle Tags
            </Button>
          </Stack>
        </CardContent>
      ) : (
        <>
          <CardActionArea onClick={() => flipCard}>
            <CardContent sx={{ minHeight: 200 }}>
              <Typography variant="body2" color="text.secondary">
                {content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Stack direction="row" justifyContent="space-between">
              {/* make Edit an Icon */}
              <Button size="small" color="primary">
                Edit
              </Button>
              <Button size="small" color="primary">
                Learned
              </Button>
            </Stack>
          </CardActions>
        </>
      )}
    </>
  );
};

export default CardFront;
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
