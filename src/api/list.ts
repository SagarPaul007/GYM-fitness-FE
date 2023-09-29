import axios from "axios";
import { useInfiniteQuery } from "react-query";
const API_URL = "http://localhost:4000";

type ListExercisesPayload = {
  search: string;
  target: string;
  equipment: string;
  bodyPart: string;
};

const fetchExercises = async ({
  search,
  target,
  equipment,
  bodyPart,
  page,
}: ListExercisesPayload & { page: number }) => {
  const response = await axios.get(
    `${API_URL}/exercises/listExercises?search=${search}&page=${page}&target=${target}&equipment=${equipment}&bodyPart=${bodyPart}`
  );
  return response.data;
};

export const useListExercises = ({
  search,
  target,
  equipment,
  bodyPart,
}: ListExercisesPayload) => {
  return useInfiniteQuery(
    ["list_exercises", search, target, equipment, bodyPart],
    ({ pageParam = 1 }) =>
      fetchExercises({ search, target, equipment, bodyPart, page: pageParam }),
    {
      staleTime: 15 * 60 * 1000,
      refetchInterval: 15 * 60 * 1000,
      getNextPageParam: (d: {
        canFetchMore: boolean;
        nextPage: number;
        exercises: unknown;
      }) => d?.canFetchMore && d?.nextPage,
      onError: (err: { message: string }) => {
        console.log(err?.message);
      },
    }
  );
};
