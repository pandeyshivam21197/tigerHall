import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Text } from "../../atoms/text";
import { Icon } from "../../atoms/icon";
import Icons from "../../../assets/icons";
import { Box, Theme } from "@mui/material";
import { Flag } from "../flag";
import { useStyles } from "./styles";

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
  const theme: Theme = useTheme();
  const styles = useStyles();

  return (
    <Card className={styles.cardContainer}>
      {cardMedia && (
        <div className={styles.cardMedia}>
          <Flag
            className={styles.completedFlag}
            iconSrc={Icons.completionStatus}
            label={status}
          />
          <CardMedia
            height="120px"
            component="img"
            image={cardMedia}
            alt={cardMedia}
          />
          <div className={styles.statusFlag}>
            <div className={styles.podCastContainer}>
              <Icon src={Icons.podcast} />
            </div>
            <Flag iconSrc={Icons.clock} label={durationTime} />
          </div>
        </div>
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
      <CardActions className={styles.footerActions}>
        <Icon src={Icons.share} />
        <Icon src={Icons.bookmark} />
      </CardActions>
    </Card>
  );
};

const newsCard = React.memo(NewsCard);
export { newsCard as NewsCard };
