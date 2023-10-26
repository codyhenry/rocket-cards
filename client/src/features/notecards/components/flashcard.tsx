import { useState } from "react";
import Card from "@mui/material/Card";
import CardFront from "./card-front";
import CardBack from "./card-back";
//get the cards tags as props
const FlashCard = () => {
  const [isFlipped, setisFlipped] = useState(false);

  const handleClickFlip = () => {
    setisFlipped(!isFlipped);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 345 }}>
      {isFlipped ? (
        <CardBack flipCard={handleClickFlip} content="test back content" />
      ) : (
        <CardFront
          flipCard={handleClickFlip}
          title="test"
          content="test front content"
        />
      )}
    </Card>
  );
};

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
