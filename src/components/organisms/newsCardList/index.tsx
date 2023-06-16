import React, { FC } from "react";
import { INewsCard, NewsCard } from "../../molecules/newsCard";

interface INewsCardList {
  newsDataList: INewsCard[];
}

export const NewsCardList: FC<INewsCardList> = ({ newsDataList }) => {
  return (
    <>
      {newsDataList.map((newsData: INewsCard, index: number) => {
        return <NewsCard key={newsData.id || index} {...newsData} />;
      })}
    </>
  );
};
