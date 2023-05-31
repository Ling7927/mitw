import News from "../Pages/News/News"
import Introduction from "../Pages/Introduction/Introduction"
import Specification from "../Pages/Specification/Specification";
import Traks from "../Pages/Traks/Traks";
import Result from "../Pages/Result/Result";
import Successcase from "../Pages/Successcase/Successcase";

import Member from "../Pages/Member/Member";
import Recruit from "../Pages/Recruit/Recruit";
import  {AiFillCaretDown } from "react-icons/ai";
const routerList = [
    {
      name: "最新消息",
      path: "/News",
      Component: <News />,
    },
    {
        name: "簡介",
        path: "/Introduction",
        Component: <Introduction />,
      },
      // {
        //     name: "招募",
        //     path: "/Information",
        //     Component: <Information />,
        //   },
        {
          name: <>招募 <AiFillCaretDown/></>,
          path: "",
          Component: "",
        },
      {
        name: "規格與資源",
        path: "/Specification",
        Component: <Specification />,
      },      
      {
          name: "賽道",
          path: "/Traks",
          Component: <Traks />,
        },
        
        {
          name: "2022聯測松結果",
          path: "/Result",
          Component: <Result />,
        },
        {
          name: "成果發表",
          path: "/Successcase",
          Component: <Successcase />,
        },
        {
          name: "歷年活動",
          path: "",
          Component: "",
        },
        {
          name: "活動",
          path: "",
          Component: "",
        },
 ];

 const RecruitDropDown = [
  {
    name: "賽道工作小組",
    path: "/Member",
    Component: <Member />,
  },
  {
    name: "工作小組志工與聯測督察員招募",
    path: "/Recruit",
    Component: <Recruit />,
  },
];

// const StoryDropDown = [
//   {
//     name: "2022年 MI-TW 聯測工作坊",
//     path: "/2022",
//     Component: <Story2022 />,
//   },
//   {
//     name: "2021年 MI-TW 聯測工作坊",
//     path: "/2021",
//     Component: <Story2021 />,
//   },
//   {
//     name: "2020年 MI-TW 聯測工作坊",
//     path: "/2020",
//     Component: <Story2020 />,
//   },
// ];

// const ActivityDropDown = [
//   {
//     name: "工作小組",
//     path: "/Workgroupactivity",
//     Component: <Workgroupactivity />,
//   },
//   {
//     name: "相關活動",
//     path: "/Relatedactivity",
//     Component: <Relatedactivity />,
//   },
//   {
//     name: "教育訓練",
//     path: "/Training",
//     Component: <Training />,
//   },
// ];

export {routerList,RecruitDropDown}