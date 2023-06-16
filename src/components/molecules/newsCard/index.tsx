import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Text } from "../../atoms/text";
import { Icon } from "../../atoms/icon";
import Icons from "../../../assets/icons";
import { Box } from "@mui/material";
import { Flag } from "../flag";

export interface INewsCard {
  id: number;
  heading: string;
  subHeading: string;
  author: string;
  designation: string;
  cardMedia?: string;
  status: string;
  durationTime: string;
}

const NewsCard: React.FC<INewsCard> = ({
  cardMedia,
  heading,
  subHeading,
  author,
  designation,
  status,
  durationTime,
}) => {
  const theme = useTheme();

  console.log(theme, "theme");

  return (
    <Card>
      {cardMedia && (
        <Box height={120}>
          <Flag iconSrc={Icons.completionStatus} label={status} />
          <CardMedia
            component="img"
            height="100%"
            image={cardMedia}
            alt={cardMedia}
          />
          <Box>
            <Box>
              <Icon src={Icons.podcast} />
              <Flag iconSrc={Icons.clock} label={durationTime} />
            </Box>
          </Box>
        </Box>
      )}
      <CardContent>
        <Text variant={"labelBold"} color={theme.palette.textColor.main}>
          {heading}
        </Text>
        <Text variant={"labelBold"} color={theme.palette.textColor.main}>
          {subHeading}
        </Text>
        <Text variant={"labelBold"} color={theme.palette.textColor.main}>
          {author}
        </Text>
        <Text variant="labelBold" color={theme.palette.textColor.main}>
          {designation}
        </Text>
      </CardContent>
      <CardActions>
        <Icon src={Icons.share} />
        <Icon src={Icons.bookmark} />
      </CardActions>
    </Card>
  );
};

const newsCard = React.memo(NewsCard);
export { newsCard as NewsCard };
