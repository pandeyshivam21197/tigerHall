import React, { FC, useCallback, useEffect, useState } from "react";
import { NewsCardList } from "../../components/organisms/newsCardList";
import { SearchBar } from "../../components/molecules/searchBar";
import { fetchNewsCardList } from "../../services/homeServices";
import { INewsCard } from "../../components/molecules/newsCard";
import { Box } from "@mui/material";

export const HomeScreen: FC<any> = (): React.ReactElement => {
  const [newsCardList, setNewsCardList] = useState<INewsCard[] | []>([]);

  const getNewsCardList = useCallback((searchText = "") => {
    const onDataFetchCallback = (data: any) => {
      //TODO: add type of model

      const newsCardData: INewsCard[] = data.map((dataCollection: any) => {
        const {
          id,
          name,
          image: { uri, alt },
          experts,
          categories,
          preamble,
          timeSpentOnByUsers,
        } = dataCollection;

        let subHeading = "";
        const author = `${experts[0]?.firstName} ${experts[0]?.lastName}`;

        categories.forEach(
          (cat: any) => (subHeading = `${subHeading} ${cat.name}`)
        );

        return {
          id,
          heading: name,
          subHeading: preamble || subHeading,
          author,
          designation: `${experts[0]?.title}, ${experts[0]?.company} `,
          status: "30% Completed",
          durationTime: `${timeSpentOnByUsers} m`,
          cardMedia: uri || alt,
        } as INewsCard;
      });

      setNewsCardList(newsCardData);
    };

    fetchNewsCardList(searchText, onDataFetchCallback);
  }, []);

  useEffect(() => {
    getNewsCardList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <SearchBar onSearchCallback={getNewsCardList} />
      <NewsCardList newsDataList={newsCardList} />
    </Box>
  );
};
