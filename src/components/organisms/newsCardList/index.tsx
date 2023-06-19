import React, { FC } from "react";
import { INewsCard, NewsCard } from "../../molecules/newsCard";
import { useStyles } from "./styles";

interface INewsCardList {
  newsDataList: INewsCard[];
  className?: string;
}

export const NewsCardList: FC<INewsCardList> = ({
  newsDataList,
  className,
}) => {
  const styles = useStyles();
  return (
    <div className={`${className} ${styles.container}`}>
      {newsDataList.map((newsData: INewsCard, index: number) => {
        return <NewsCard key={newsData.id || index} {...newsData} />;
      })}
    </div>
  );
};
