import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const RatingStars = ({ rating }) => {
  return (
    <Box>
      <Rating name="user-rating" value={rating} precision={0.5} />
    </Box>
  );
};

export default RatingStars;
