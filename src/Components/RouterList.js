import News from "../Pages/News/News"
import Introduction from "../Pages/Introduction/Introduction"
import Specification from "../Pages/Specification/Specification";
import Traks from "../Pages/Traks/Traks";
import Result from "../Pages/Result/Result";
import Successcase from "../Pages/Successcase/Successcase";
import Recruit from "../Pages/Recruit/Recruit";
export const routerList = [
    {
      name: "最新消息",
      path: "/",
      Component: <News />,
    },
    {
        name: "簡介",
        path: "/Introduction",
        Component: <Introduction />,
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
        // {
        //     name: "技術規格",
        //     path: "/Preconnectathon",
        //     Component: <Preconnectathon />,
        //   },
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
          name: "招募",
          path: "/Recruit",
          Component: <Recruit />,
        },
 ];