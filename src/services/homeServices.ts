import { INewsCard } from "../components/molecules/newsCard";
import { ApiClient } from "../network";
import { HTTP_STATUS_CODES } from "../network/constants";

export const fetchNewsCardList = async (
  searchText = "",
  callback: (newCardListData: INewsCard[]) => void
) => {
  const payload = {
    query:
      "query Edges($filter: ContentCardsFilter) {\n  contentCards(filter: $filter) {\n    edges {\n      ... on Podcast {\n        name\n     id\n    preamble\n   timeSpentOnByUsers\n       image {\n          uri\n          alt\n        }\n        categories {\n          name\n        }\n        experts {\n          firstName\n          lastName\n          title\n          company\n        }\n      }\n    }\n  }\n}\n",
    variables: {
      filter: {
        limit: 10,
        types: "PODCAST",
        keywords: searchText,
      },
    },
    operationName: "Edges",
  };

  const res = await ApiClient.post(payload);

  if (res?.status === HTTP_STATUS_CODES.Ok) {
    callback(res?.data?.data?.contentCards?.edges);
  }
};
