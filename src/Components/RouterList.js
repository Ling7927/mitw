import News from "../Pages/News/News"
import Introduction from "../Pages/Introduction/Introduction"
import Network from "../Pages/Network/Network";
import Preconnectathon from "../Pages/Preconnectathon/Preconnectathon";
import Result from "../Pages/Result/Result";
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
        name: "網路與主機架構",
        path: "/Network",
        Component: <Network />,
      },
      {
          name: "技術規格",
          path: "/Preconnectathon",
          Component: <Preconnectathon />,
        },
        {
          name: "2023聯測松結果",
          path: "/Result",
          Component: <Result />,
        },
 ];