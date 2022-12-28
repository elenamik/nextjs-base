import React from "react";
import Image from "next/image";
import Button from "components/common/Button";
import NumberSelector from "components/common/NumberSelector";
import OptionSelector from "components/common/OptionSelector";
import { Spin } from "antd";
import useUser from "hooks/useUser";

const SocialSecurityCard: React.FC<{ userId: number; graphUrl: string }> = ({
  userId,
  graphUrl,
}) => {
  const { data, error, isLoading } = useUser(userId);

  const Graph = () => {
    return (
      <div className="flex justify-center">
        <Image src={graphUrl} alt="graph" width={400} height={204} />
      </div>
    );
  };

  const Divider = () => {
    return <div className="my-2 h-[1px] bg-grey-1"></div>;
  };

  const hasData =
    data?.user_info?.full_name && data?.assumptions?.retirement_age;

  if (error || (!isLoading && !hasData)) {
    console.log("API ERROR", error);
    return (
      <div className="flex w-[420px] flex-col justify-center p-4 pb-6">
        <h1 className="text-sxl text-center font-bold drop-shadow-lg ">
          Could not load data
        </h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex h-[200px] w-[420px] items-center justify-center">
        <Spin />
      </div>
    );
  }

  const retirementAge = data!.assumptions.retirement_age;
  return (
    <div className="flex w-[420px] flex-col justify-center p-4 pb-6">
      <h1 className="text-sxl text-center font-bold drop-shadow-lg ">
        Best Social Security Claimed Age
      </h1>
      <h3 className="text-center">Our Recommendation</h3>
      <div className="p-4">
        <Graph />
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
          value={retirementAge}
          canEdit={true}
        />
        <NumberSelector
          text="Annual Social Security Payment"
          canEdit={false}
          value="$18,000"
        />
      </div>
      <div className="flex justify-around">
        <Button
          text={`Use ideal ${retirementAge}`}
          variant="secondary"
        ></Button>
        <Button text="Accept 70" variant="primary"></Button>
      </div>
    </div>
  );
};
export default SocialSecurityCard;
