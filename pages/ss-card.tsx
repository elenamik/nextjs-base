import SocialSecurityCard from "components/SocialSecurityCard";
import { useState } from "react";

export default function SSCard() {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <div className="m-2 flex">
        <h1 className="px-10 pt-1 text-center">Social Security Card</h1>
        <h2 className="px-10 pt-1 text-center">Select Id:</h2>
        <input
          className="w-32 px-4"
          type="number"
          onChange={(e) => {
            const val = e.target.value as unknown as number;
            if (val > 0) {
              setUserId(val);
            }
          }}
          value={userId}
        />
      </div>
      <SocialSecurityCard userId={userId} />
    </>
  );
}
