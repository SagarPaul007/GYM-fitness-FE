import React from "react";
import { Button, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import bodyParts from "@/constants/bodyParts";

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  const goToDashboard = (query: string): void => {
    navigate(`/dashboard?search=${query}`);
  };

  return (
    <div className="mx-5 lg:h-[calc(100vh-60px)] lg:flex flex-col justify-between">
      <div>
        <div className="w-full py-20">
          <h1 className="lg:text-8xl md:text-7xl text-6xl text-center ">
            Build your ideal body with our{" "}
            <Text color="teal" className=" inline-block">
              specialized
            </Text>{" "}
            👀 classes
          </h1>
          <h3 className="text-4xl mt-10 text-center   ">
            It's time to regain your{" "}
            <Text color="teal" className="handwritten inline-block">
              fitness
            </Text>{" "}
            💪
          </h3>
        </div>
        <div className="flex justify-center items-center   ">
          <div className="w-[500px]">
            <Input
              borderColor="teal"
              placeholder="Search exercises"
              size="lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button
            className="ml-2"
            colorScheme="teal"
            size="lg"
            onClick={() => goToDashboard(search)}
          >
            Search
          </Button>
        </div>
        <div className="flex justify-center items-center mt-10">
          <span className=" text-center">Or,</span>
        </div>
        <div className="flex justify-center items-center mt-10   ">
          <div className="w-[800px] flex justify-center items-center flex-wrap gap-5">
            {bodyParts.map((part) => (
              <Button
                key={part.label}
                onClick={() => {
                  goToDashboard(part.label);
                }}
              >
                <span>{part.icon}</span>
                <span className="ml-1">{part.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-20 pb-5">Made with ❤️ by Sagar Paul</div>
    </div>
  );
};

export default Home;
