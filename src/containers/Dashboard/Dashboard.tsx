import { useListExercises } from "@/api/list";
import { Button, Card, Img, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search") || "";
  const target = searchParams.get("target") || "";
  const equipment = searchParams.get("equipment") || "";
  const bodyPart = searchParams.get("bodyPart") || "";
  const { data, isFetching, hasNextPage, fetchNextPage, isError, isLoading } =
    useListExercises({
      search,
      target,
      equipment,
      bodyPart,
    });

  const exercises = React.useMemo(
    () => data?.pages?.flatMap((each) => each?.exercises || []) || [],
    [data]
  );

  console.log(exercises);

  return (
    <div className="w-full h-full p-5">
      <div className="flex justify-center items-center   ">
        <div className="w-[500px]">
          <Input
            borderColor="teal"
            placeholder="Search exercises"
            size="lg"
            value={search}
          />
        </div>
        <Button className="ml-2" colorScheme="teal" size="lg">
          Search
        </Button>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 py-10">
        {exercises?.map((exercise) => (
          <Card className="p-5">
            <Text>{exercise.name}</Text>
            <img src={exercise?.gifUrl} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
