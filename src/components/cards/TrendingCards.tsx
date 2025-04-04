import { motion } from "framer-motion";
import React from "react";

type Props = {
  type: string;
  amount: string;
  title: string;
  time: string;
  color?: string;
};

function TrendingCards({ type, title, amount, time, color }: Props) {
  return (
    <motion.div
      className="h-[350px] rounded-[20px] relative flex items-center justify-center w-full bg-[#00FFA01A] hover:bg-gradient-to-b from-[#E7FDFF] to-[#000625] group transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="z-10 px-[3%] flex-row flex absolute w-full justify-between top-5">
        <button
          className={`px-4 py-1  ${
            color ? color : "bg-[#013237] text-[#F6E8DF] "
          }  rounded-[4px] font-bold text-sm transition-all duration-300
          group-hover:bg-[#00FFA0] group-hover:text-[#013237]`}
        >
          {type}
        </button>
        <div className="flex flex-row gap-4 items-center">
          <img
            src="/Images/1564530_arrow_next_share_direction_icon 1.svg"
            className="w-[24px] h-[24px] transition-all duration-300 group-hover:brightness-150"
            alt=".."
          />
          <img
            src="/Images/icons.svg"
            className="w-[24px] h-[24px] transition-all duration-300 group-hover:scale-110"
            alt=".."
          />
        </div>
      </div>

      <img
        src="/Images/panaParty.svg"
        alt="pana_party"
        className="w-full h-auto top-10 absolute transition-all duration-300 group-hover:opacity-80"
      />

      <div className="w-[90%] lg:top-[200px] top-[210px] bg-[#F6E8DF4D] backdrop-blur-md h-[130px] absolute rounded-[20px] shadow-sm transition-all duration-300 group-hover:bg-[#F6E8DF80]">
        <div className="px-3 py-2   flex flex-row gap-4 justify-between items-start w-full">
          <p className=" text-base whitespace-nowrap leading-0  text-[#013237] font-bold">
            {title}
          </p>
          <p className="font-normal text-sm leading-0 whitespace-normal text-[#013237] font-poly">
            {time}
          </p>
        </div>
        <div className="px-3 py-2 flex flex-row items-center justify-between">
          <div
            className="flex-row flex gap-2 items-center bg-[#E7FDFF] p-2 rounded-md border transition-all duration-300
            group-hover:border-[#00FFA0] group-hover:bg-transparent"
          >
            <img src="/Images/8679214_coupon_ticket_icon 1.svg" />
            <p>{amount}</p>
          </div>

          <div
            className="flex-row flex gap-2 items-center bg-[#013237] p-2 rounded-md transition-all duration-300
            group-hover:bg-[#00FFA0]"
          >
            <p className="text-[#F9F9F9] text-base font-normal group-hover:text-[#013237]">
              More Info
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TrendingCards;
