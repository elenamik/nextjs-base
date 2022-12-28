import React from "react";
import Image from "next/image";
import Button from "components/common/Button";
import NumberSelector from "components/common/NumberSelector";
import OptionSelector from "components/common/OptionSelector";
import { useQuery } from "react-query";
import { Spin } from "antd";
import { UserResponse } from "types/user";

const SocialSecurityCard: React.FC<{ userId: number }> = ({ userId }) => {
  const FETCH_USER_URL = "/api/users";

  const getUser = async (id: number) => {
    const response = await fetch(`${FETCH_USER_URL}/${id}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    return response.json();
  };

  const { data, error, isLoading } = useQuery<UserResponse>(
    `user:${userId}`,
    () => getUser(userId)
  );

  console.log(data);

  const Graphs = () => {
    return (
      <div className="flex justify-center">
        <Image src="/graphs/graph1.png" alt="graph" width={400} height={204} />
      </div>
    );
  };

  const Divider = () => {
    return <div className="my-2 h-[1px] bg-grey-1"></div>;
  };

  if (error || (!isLoading && !data?.user_info?.full_name)) {
    console.log("API ERROR", error);
    return (
      <div className="flex w-[420px] flex-col justify-center p-4 pb-6">
        <h1 className="text-sxl text-center font-bold drop-shadow-lg ">
          Could not load API
        </h1>
      </div>
    );
  }
  if (isLoading) {
    return <Spin />;
  }
  return (
    <div className="flex w-[420px] flex-col justify-center p-4 pb-6">
      <h1 className="text-sxl text-center font-bold drop-shadow-lg ">
        Best Social Security Claimed Age
      </h1>
      <h3 className="text-center">Our Recommendation</h3>
      <div className="p-4">
        <Graphs />
      </div>
      <Divider />
      <div className="flex justify-center pb-6">
        <OptionSelector
          options={[data!.user_info?.full_name ?? ""]}
          onChange={() => {}}
          placeholder="Choose..."
          id="member"
        />
      </div>
      <div className="flex justify-around">
        <NumberSelector
          text="Your ideal retire age"
          value="65"
          canEdit={true}
        />
        <NumberSelector
          text="Annual Social Security Payment"
          canEdit={false}
          value="$18,000"
        />
      </div>
      <div className="flex justify-around">
        <Button text="Use ideal 63" variant="secondary"></Button>
        <Button text="Accept 70" variant="primary"></Button>
      </div>
    </div>
  );
};
export default SocialSecurityCard;
