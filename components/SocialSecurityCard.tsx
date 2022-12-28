import React from "react";
import Image from "next/image";
import Button from "components/common/Button";
import NumberSelector from "components/common/NumberSelector";
import OptionSelector from "components/common/OptionSelector";

const SocialSecurityCard: React.FC<{}> = () => {
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
          options={["Lena", "Craig"]}
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
