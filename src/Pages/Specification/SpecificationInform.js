import s1 from "../../assets/specification_1.png"
import s4 from "../../assets/specification_4.png"
import SpecificantionTable from "../../Components/Specificantion/SpecificantionTable/SpecificantionTable"
import LevelTable from "../../Components/Specificantion/LevelTable/LevelTable"
import OpenSourceTable  from "../../Components/Specificantion/OpenSourceTable/OpenSourceTable"


 const P1 =
    {title: "公開徵求意見(Call for public comments)",
        context: "社團法人台灣醫療影像資訊標準協會 (MISAT)發佈的之醫療資訊規格以及公開技術文件，台灣醫學資訊聯測松工作小組基於HL7 FHIR®及DICOMWeb國際標準與規範，以標準化資訊互通介面，進行跨系統互通聯測(Connectathon)機制來驗證其互通性，企業會結盟並共同制定可互通性標準來建立標準化生態系(ecosystem)。針對每年舉辦的聯測松賽道徵求公開意見，請於點選 聯測工作小組選項，並註記賽道編號。",
        linkTitle:"公開徵求意見連結",
        link:"https://docs.google.com/forms/d/e/1FAIpQLSfPNL-NWe_EWJ7pfYY74hIQr8kuNRFEXYbeROu3Sem8Cq8Qlw/viewform"
    };
   

const ListTitle=[
   {id:"1",title:"運作機制說明"},{id:"2",title:"定義使用規範"},{id:"3",title:"定義測試情境"},{id:"4",title:"領域分類"},{id:"5",title:"驗測規則分級"},{id:"6",title:"聯測網路與主機架構"},{id:"7",title:"開源工具"}
   
];
const List=[
    {id:"1",title:"運作機制說明",content:<div><p>資訊標準是健康醫療系統整合應用、系統商品化的基礎。醫資標準化系統之建置與推行有一套嚴謹的步驟，包含標準確立、準備測試案例、實作系統、聯測、以及推廣等，需有系統、有制度化地運作。本活動邀請國內健康醫療、醫療影像、資訊科技相關之產業界、政府單位、學術界、以及醫療機構參加。希望鼓勵醫療資訊系統相關新創業者，開發與使用標準化醫療資訊格式(包含:HL7, HL7 FHIR®, DICOM等)，預期效益為發展具國際標準標準化互通性(Interoperability)之醫學資訊系統以及醫療儀器、利於健康醫療系統整合應用、跨系統資料交換、也利於發展的系統在全球銷售。本活動包含:</p>
    <ul style={{margin:"0"}}>
        <li>聯測工作小組會議: 在面對面聯測活動前，針對不同賽道主題，分成多個標準工作小組，將招募會邀請國內醫療資訊標準專家(Domain Expert)、健康醫療領域專家等，並定期召集會議，確立、產生及公告規範。</li>
        <li>聯測準備活動(Pre-Connectathon)： 面對面聯測前兩個月將提供線上測試資料以及測試主機，讓參加單位進行驗證，最為面對面聯測之準備。線上遇到問題時，將提供線上諮詢服務，並排除技術問題，另外會不定期提供線上讀書會、教育訓練以及意見交流活動。</li>    
        <li>聯測工作坊(預演): 為面對面聯測之前一個月舉辦一場聯測模擬測試，讓第一次或是不熟悉聯測工具以及流程的參加者能提前適應聯測。參加者將以實體參與活動，在一天的時間內對於參加賽道以及規格進行實際測試，活動將提供線上測試資料以及測試主機，讓參加單位進行驗證，最為面對面聯測之準備。另外會邀請部分督察員以及工作小組成員對於參加地的問題在現場排除問題，並提供諮詢。</li>    
        <li>面對面聯測: 參加單位將在四天內與其他參加單位以實際的網路連線進行系統介接測試，在四天內須完成指定的規範與測試資料，符合通過標準者，將提供產品通過證書。</li>
        <li>聯測松論壇： 今年主題為:「打造標準化金融醫療生態圈」，預計邀請醫院、學術界以及政府單位專家進行多場專題演講，分享有關標準化金融醫療數據應用、政策，多元應用場景、核保理賠、健康照護/健檢以及智慧醫療科技串聯等領域的專題演講。</li>
        <li>成果展示： 參加者通過聯測後，將提供成果展示活動，包含實體論壇、線上文宣以及網站公告等方式，展示聯測成果。聯測成果亦將作為醫院採購產品之參考依據。將聯測成果辦理應用推廣活動，推廣健康醫療資訊相關創新應用，推廣到產官學研機構、醫療院所單位團體、數據相關業者、與新創企業等。可透過每年的聯測松結果以及成果發表媒合有意提供健康醫療數據交換與加值應用之業者。</li>
        <p>聯測規格運作機制架構請參考下圖</p>
        <img src={s1} style={{width:"80%"}}/>
    </ul></div>},
    {id:"2",title:"定義使用規範 (Profile)",content:<div><p>聯測將使用架設的IHE Gazelle (以下簡稱Gazelle) 。在Gazelle聯測系統中，包含測試整合規範(Integration Profile)以及測試案例定義(Test Definition)。我們將聯測的分成10個測試整合規範。參加單位可由報名的測試整合規範，查看要符合此規範需要依循那些技術規格。在設計上，我們將此次的健康數據資料分成幾個領域 (Domain): MI-TW以及RAD。</p></div>},
    {id:"3",title:"定義測試情境(Test Script)",content:<div><p>測試情境將定義每個角色所需符合的條件，將測試流程定義為測試案例定義(Test Script)，每個測試案例定義會加入該角色對應要連線測試的受測角色，依據標準規範分成no peer以及peer to peer這兩大類型。驗證規範由本會所招募的標準專家，將各賽道要驗證的測試情境定義在測試案例定義中。
    </p></div>},
    {id:"4",title:"領域分類",content:<div><p>在交換情境設計上因應符合台灣的應用情境，引用自行定義以及國際IHE規範做為聯測的測試情境。每個規範定義分別的角色(Actor)以及交易(Transaction)，定義角色之間彼此的關係。聯測包含各種Profile包含:</p>
    <SpecificantionTable/>

    <ul style={{margin:"0"}}>
    <li>MI-TW為MI-TW作小組針對台灣的交換情境制定的規範</li>    
    <li>RAD為依循國際IHE規範Radiology中定義的各種整合規範(Integration Profile)</li>    
    </ul></div>},
    {id:"5",title:"驗測規則分級",content:<div>
        <p>聯測根據性質區分三個等級。Level I為基本能力驗證，系統需根據各賽道的測試情境(Scenario)的測試腳本(Test Script)，與主辦單隊提供的主機系統進行驗證。通過後即可符合。Level II為互通性驗證，要求測試系統需與三家不同的系統進行驗證，須通過各賽道的測試情境的測試腳本。Level III為連線測試時須支援動態身分授權機制，即系統需支援OAuth2認證功能，且雙方的系統需要均能支援。下表為驗測規則分級整理與說明。</p>
        <ul style={{margin:"0"}}>
            <li>
            驗測規則分級整理表
            <LevelTable/>
            </li>
            <li>提供OAuth2 Server，驗證參加單位OAuth2 Client，大會提供Keycloak Server作為認證主機。</li>
        </ul>
    </div>},
    {id:"6",title:"聯測網路與主機架構",content:<div>
        <p>各種情境的資料儲存至資料主機的FHIR與DICOM主機，透過健康數據服務API以標準FHIR與DICOMweb API提供模擬健康資料，包含個賽道提供的測試資料，使用情境則使用Gazelle平台以及平台的各種工具提供聯測使用，目前提供工具包含: FHIR基本格式驗證以及DICOM格式驗證。參加者需配合主辦單位設定網路以及API設定。</p>
        <ul style={{margin:"0"}}>
            <li>實體面對面聯測者: 參加者連接聯測區域網路後，經過網路設定，將交易連結導向Gazelle Proxy主機作為抓取交易封包以及連結特定的測試單元。</li>
            <li>主機架設在雲端的參加單位: 透過VPN服務連線，設定外部主機之IP以及PORT將透過HTTP/HTTPS連線至連測區域網路內，GO Proxy作為外部主機IP與PORT轉換對照，用來擷取網路封包並記錄至Gazelle Proxy</li>
            <li>使用HTTP協定之情境: 驗證Level I時，須設定基本JWT Token作為基礎身分認證授權驗證，報名程序完成後，由主辦單位核發JWT Token,並將其放入HTTP Header中作為存取FHIR與DICOM主機認證使用。在互通性驗證時，雙方必須能支援動態身分授權機制，登入者身分須註冊到主辦單位提供的OAuth2主機，由參測主機端設定權限，交付督察員驗證時，須能證明雙方能採用標準化認證機制。</li>
            <li>使用DICOM協定之情境: 驗證Level I時，不需要設定JWT Token，但需透過DICOM AE 設定，以確保Client與Server主機能連線。</li>
        </ul>
        <p>下圖為聯測網路與伺服器服務架構，主要規劃分成兩個主機: (1)聯測控制主機以及(2)資料主機。</p>
        <img src={s4} style={{width:"80%"}}/>
    </div>},
    {id:"7",title:"開源工具",content:<div>
        <p>為了協助開發者開發標準化的醫學資訊系統，本聯測由各開源團隊提供多個開源工具，以發展開源技術且建立開源生態系統 (open source ecosystem)，降低開發者開發DICOM以及FHIR系統的最後一哩路的門檻。亦可協助產業在開發產品時能使用開源程式碼，透過透明且開放式的參與模式、可加速這個領域的產業發展，進而回饋至產業。</p>
        <li>有人提交開源工具提交，經過基本審查後提出會議討論。</li>
        <div style={{width:"80%"}}> <OpenSourceTable/></div>
    </div>}
    ];

export {P1,ListTitle,List}