import { BsPersonVideo3, BsLink } from "react-icons/bs";
import { GiTargetDummy } from "react-icons/gi";
import p1 from "../../assets/introduction_1.png";
import p2 from "../../assets/introduction_2.png";
import p3 from "../../assets/introduction_3.png";
import ImgDialog from "../Dialog/Dialog";
export const Inform = [
  {
    id: "1",
    Tabtitle: "簡介",
    icon: <BsPersonVideo3 />,
    content: (
      <div style={{ padding: "2vw 5vw" }}>
        <p>
          為促進醫療健康數據標準化、落實臨床醫療資訊系統之整合互通用、以助智慧醫療系統融入健康醫療流程，國際上推動「醫療健康資訊互通聯測」已行之有年，社團法人台灣醫療影像資訊標準協會(MISAT)融合全球知名的聯測體系，包含:
          HL7®(Health Level 7) FHIR® (Fast Healthcare Interoperability
          Resources)與IHE(Integrating the Healthcare
          Enterprise)等，發展在地化的醫療健康資訊互通聯測工作。以
          「標準-實作-聯測-驗證」
          共築台灣資訊標準化生態圈，建立台灣醫療資訊產業實證場域驗證機制，協助國內醫療資訊產業與新創公司開發標準化產品，串聯產業並結合各方意見與力量，從由下而上(Bottom-up)反映真正的實際產業與醫院需求，扶植國內智慧醫療新創產業。
        </p>
        {/* <img
          src={p1}
          style={{ display: "flex", width: "90%", marginLeft: "5%" }}
        /> */}
        <center>
          {" "}
          <img src={p1} Width={"80%"} />
        </center>
      </div>
    ),
  },

  {
    id: "2",
    Tabtitle: "聯測松機制",
    icon: <GiTargetDummy />,
    content: (
      <div style={{ padding: "2vw 5vw" }}>
        <ul style={{ margin: 0, padding: 0 }}>
          <li>
            聯測松(Connectathon)是由兩個名詞組成的組合字:
            互連性(Connectivity)以及以及馬拉松(Marathon)組成。運作方式是在連續幾天的時間(通常3-5天)，讓參加者以實體方式進行面對面(Face-to-face)的方式對於開發的系統進行互通性(Interoperability)測試。參加者針對特定的規格(Profile)以及情境(Scenario)進行系統開發。規格通常會結構化的方式將規格以角色(Actor)以及交易(Transaction)拆解，角色之間的交易通訊協定採用開放標準，例如:HL7,
            DICOM, IEEE, OSI,等國際標準或是工業標準規範。
            <center>
              <img src={p2} Width={"80%"} />{" "}
            </center>
          </li>
          <li>
            聯測目的在於針對依循指定規格開發的系統進行互通性驗證，參加聯測之前可事先使用開源工具或是開發的系統跟產品準備與測試。聯測提供一個有結構且嚴謹的驗證環境，讓參加者一起測試其彼此產品的互通性，並且可透過標準技術框架讓產品以實施或發佈的方式進行測試。
          </li>
          <li>
            參加聯測的單位可測試產品是否實現標準規範，並與其他公司用實際使用情境進行測試。透過廠商之間緊密合作解決彼此的問題，可以快速排除不同系統之間整合與界接的技術問題。
          </li>
          <li>
            聯測期間，參與者與其他系統進行連線測試，用來驗證開發的產品與系統符合國際標準規範，在聯測時如果遇到問題亦可在短時間內修正不符合格的項目。聯測活動使用測試工具來驗證數萬筆交易紀錄，且由中立的「連測督察員(Monitor)」來評斷結果。
          </li>
          <li>
            連測結束後，可透過連測結果陣列(Connectathon Results
            Matrix)查看。透過連測活動來達到產業之間的數據交換與互助，以合作的方式相互發展具備全球市場競爭力之產品。
            <center>
              {" "}
              <img src={p3} Width={"70%"} />{" "}
            </center>
            <br />
            促使健康保健IT產業(healthcare IT)
            的使用者以及廠商能夠共同合作達到IT系統互通(interoperability)，可透過以下方式達成
          </li>

          <li>具體定義使用案例(use cases)</li>
          <li>定義使用案例所需要的資訊(information)與流程(Processes)</li>
          <li>使用現有的國際標準來實現訊信息交換(information exchange)</li>
          <li>每年廠商參加連測，以證明系統功能符合規範(conformance)</li>
          <li>
            從2020年開始，從四大領域擴展到多個領域，截至今天為止，共涵蓋10領域，讓不同廠商開發的系統能夠互通。
          </li>
          <li>
            透過照護提供者（Care
            providers）與IT從業人員以及廠商共同合作(Coordinate)
            制定標準(Standards)與共通指引（common guidelines
            ）以達到彼此需求，照護提供者提供臨床上面臨的實際問題，IT從業人員與廠商根據需求來發展符合標準的解決方案，根據共通的指引來購買這些符合規範。
          </li>
        </ul>
      </div>
    ),
  },

  {
    id: "3",
    Tabtitle: "關係人效益",
    icon: <BsLink />,
    content: (
      <div style={{ padding: "2vw 0" }}>
        <h3 style={{ margin: " 0 0 2vh" }}>使用者(醫院、消費者)的好處</h3>
        <ul style={{ marginBottom: "2rem" }}>
          <li>減少客戶端(Site)潛在的互通性問題</li>
          <li>合格廠商可證明其產品支援標準規範，提供使用者採購時參考之依據</li>
          <li>有利於決策者對於競爭廠商投標回應做出決策(透過需求建議書)</li>
          <li>讓合格廠商節省成本與減少不方便性</li>
          <li>使採購過程和後續部署充滿信心 (驗收前後差異甚大)</li>
          <li>可註記已通過連測的廠商最做為日後審查之參考(過濾蟑螂公司)</li>
        </ul>
        <div>
          <h3 style={{ margin: " 0 0 2vh" }}>使公司產品開發的好處</h3>
          <h4>具體優點</h4>{" "}
        </div>
        <ul style={{ marginBottom: "2rem" }}>
          <li>降低開發成本與縮短產品上市時間</li>
          <li>通過結構化且嚴謹的測試環境加快測試速度</li>
          <li>幾分鐘的測試可以節省除錯時間</li>
          <li>
            由合格的測試專家(工具、督察員)進行獨立的產品測試，並且經過驗證的測試工具可確保產品質量並降低實施成本
          </li>
          <li>確保產品繼續滿足國際規範規範，並不斷擴大的利基</li>
          <li>
            促使同行之間全面的互操作性測試，可以進行更好的準備，並避免在客戶現場進行系統界接測試。
          </li>
          <li>提供新創公司一條接軌市場的捷徑</li>
        </ul>
        <h4>通用優點</h4>
        <ul style={{ marginBottom: "2rem" }}>
          <li>可將產品註冊至連測結果陣列(Connectathon Results Matrix)</li>
          <li>可證明公司在專業領域的互通性功能達到技術領先</li>
          <li>在一週面對面的活動中可與同行專家進行技術交流</li>
          <li>可從該領域的專家獲得深度技術支援</li>
          <li>
            全世界現有國家、區域與醫院的招標程序越來越注重要求開發標準化規範之能力
          </li>
        </ul>
        <h3 style={{ margin: " 0 0 2vh" }}>整體產業好處</h3>
        <ul style={{ marginBottom: "2rem" }}>
          <li>與產業領先級專家者接觸</li>
          <li>與非常多的產業頂尖專家在現場分享經驗</li>
          <li>展示產業對於互通性的接受程度</li>
          <li>提供新創公司一個很好的舞台</li>
          <li>
            參加的廠商越多，對產業鏈供給越緊密，進而讓病人以級醫護人員帶來更大的利益
          </li>
        </ul>
        <h3 style={{ margin: " 0 0 2vh" }}>
          參加聯測對於學習醫學資訊標準(例如:DICOM、HL7)的好處
        </h3>
        <ul style={{ marginBottom: "2rem" }}>
          <li>提供參加者學習、開發、以及測試FHIR規範 (Implementation Guide)</li>
          <li>
            開發者之間 面對面(Face to face)使用標準化DICOM、HL7
            Message、以及FHIR介面(Interface)
            進行互通性測試(Interoperability)與資料交換(Exchange)
          </li>
          <li>
            參加者可選擇感興趣的賽道(Track)，並動手實作開發，且可直接與其他開發者進行深度的合作與交流。
          </li>
          <li>
            透過由循序漸進的實作學習，結合教育訓練以及工作坊從做中學來了解醫學資訊標準知識
          </li>
        </ul>
        <h3 style={{ margin: " 0 0 2vh" }}>國家發展電子病歷標準的好處</h3>
        <ul style={{ marginBottom: "2rem" }}>
          <li>
            改善只「訂」標準做法
            <ul style={{ marginBottom: "2rem" }}>
              <li style={{ listStyle: "circle" }}>
                醫院為了符合衛福部規定，僅要求廠商在輸出格式符合規範，作為電子病歷歸檔之用。
              </li>
              <li style={{ listStyle: "circle" }}>
                各醫院僅完成規定的電子病歷，但對於系統之間的「互通性」並未加以驗證，無法確定每一家醫院或是廠商作的系統是否能彼此間互通。
              </li>
            </ul>
          </li>
          <li>
            以「做」標準的方式透過實作快速的驗證醫院及廠商所開發的電子病歷是否真的能互通
          </li>
          <li>可快速獲得真實世界「開發者」以及「需求者」的回饋</li>
        </ul>
      </div>
    ),
  },
];
