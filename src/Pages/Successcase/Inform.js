import BlueLight from "../../assets/BlueLightLogo.png";
import Raccoon from "../../assets/RaccoonLogo.png";
import Burni from "../../assets/BurniLogo.png";
import RedPanda from "../../assets/RedPandaLogo.png"
import Power from "../../assets/2.SYSPOWER.png";
import EBM from "../../assets/EBM.jpeg";
import Advance from "../../assets/wiAdvance.jpg";
import Artwork from "../../assets/ItunesArtwork.png";
import Hospital1 from "../../assets/TzuChiHospital.png";
import G1 from "../../assets/ALOVAS.png";
import G2 from "../../assets/CIMS.gif";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";


import OpenSource from "../../Components/Successcase/OpenSource/OpenSource";
import Industry from "../../Components/Successcase/Industry/Industry";
import Hospital from "../../Components/Successcase/Hospital/Hospital";
import Government from "../../Components/Successcase/Government/Government";
import Crosssystem from "../../Components/Successcase/Crosssystem/Crosssystem"
const ListTitle=[
    {id:"1",title:"開源專案"},{id:"2",title:"產業產品"},{id:"3",title:"醫院應用"},{id:"4",title:"政府專案"},{id:"5",title:"跨系統互通情境"}     
];
const List=[
    {id:"1",title:"開源專案",cases:<OpenSource/>},
    {id:"2",title:"產業產品",cases:<Industry/>},
     {id:"3",title:"醫院應用",cases:<Hospital/>},
     {id:"4",title:"政府專案",cases:<Government/>},
    {id:"5",title:"跨系統互通情境",cases:<Crosssystem/>},

];

const OpenSourceInform=[
    {img:BlueLight,link:"https://mitw.dicom.org.tw/pdf/2.%E5%A5%87%E5%94%AF%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E5%80%8B%E6%A1%88%E5%B0%8E%E5%90%91%E9%86%AB%E7%99%82%E8%B3%87%E6%BA%90%E8%A8%88%E7%95%AB%E6%95%B4%E5%90%88%E5%B9%B3%E5%8F%B0(POMRP)+%E5%BA%B7%E5%B0%8F%E7%BE%8E.pdf",name:"藍光(BlueLight) - Web-based DICOM Viewer",traks:"參加賽道  \n TRACK#4 - DICOMWeb查詢與調閱 \n TRACK#5 - DICOM數位全幅病理顯微鏡影像查詢與調閱 \n TRACK#7 - 影像檢查流程",introduce:"A browser-based medical image viewer,a pure single-page application (SPA), lightweight, and using only JavaScript and HTML5 technologies so as to deploy it on any HTTP server easily (just put it in HTTP server). It supports not only opening local data, but also connecting to medical image archives which support DICOMweb. It provides tools for medical image interpretation and 3D image reconstruction, e.g., Multiplanar Rreformation or Reconstruction (MPR) and Volume Rendering (VR)."},
    {img:Raccoon ,link:"https://github.com/cylab-tw/raccoon",name:"浣熊(Raccoon) - NoSQL醫學影像資料庫",traks:"參加賽道 \n TRACK#4 - DICOMWeb查詢與調閱 \n TRACK#5 - DICOM數位全幅病理顯微鏡影像查詢與調閱 \n TRACK#7 - 影像檢查流程",introduce:"Raccoon is a noSQL-based medical image archive for managing the DICOM images. It uses the MongoDB to manage the DICOM images and provide RESTful API, supported both FHIR ImagingStudy and DICOMWeb to store, query/retrieve, and manage DICOM images. Raccoon is bulit on the top of the Burni FHIR Server to manage the FHIR resourcs related to medical images."},
    {img:Burni ,link:"https://github.com/Chinlinlee/Burni",name:"布魯尼(Burni) - NoSQL FHIR Server",traks:"參加賽道 \n TRACK#1 - 病人基本資料互通 \n TRACK#2 - 生理量測數據互通 \n TRACK#3 - 用藥及疫苗接種紀錄 \n TRACK#6 - 基因定序標記",introduce:"Burni is an implementation of the FHIR server with Node, Express, and MongoDB providing very simple ways to customize the HL7 FHIR® specification, Burni support both Windows and Linux environment to enable developers to rapidly deploy a FHIR service. Burni also supports to import your Implementation Guide to store FHIR Resources and create FHIR RESTful API as well."},
    {img:RedPanda,link:"https://github.com/cylab-tw/FHIR-Pandas",name:"FHIR Pandas - an FHIR client to access an FHIR server",traks:"參加賽道 \n TRACK#1 - 病人基本資料互通",introduce:"FHIR Pandas is coded by various programming languages, including Vue.js, Angular.js, and Vanilla.js, to implement the FHIR client. FHIR Pandas provide source code for FHIR developers to develop their FHIR client application. Currently, we have three pandas: \n Green Panda developed by Vue.js \n Red Panda developed by angularjs \n Vanilla Panda developed by Vanilla.js \n FHIR Pandas提供基於臺灣核心實作指引規格之FHIR Client(Consumer)範例程式"}
];

const IndustryInform=[
    {img:<img src={Power} style={{width:"100%"}}/>,link:"https://mitw.dicom.org.tw/pdf/2.%E5%A5%87%E5%94%AF%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E5%80%8B%E6%A1%88%E5%B0%8E%E5%90%91%E9%86%AB%E7%99%82%E8%B3%87%E6%BA%90%E8%A8%88%E7%95%AB%E6%95%B4%E5%90%88%E5%B9%B3%E5%8F%B0(POMRP)+%E5%BA%B7%E5%B0%8F%E7%BE%8E.pdf",name:<div><h3>奇唯科技股份有限公司</h3> <h4>個案導向醫療資源計畫整合平台(POMRP)+康小美</h4></div>,traks:" 參加賽道 \n TRACK#1 - 病人基本資料互通 \n TRACK#2 - 生理量測數據互通 \n TRACK#3 - 用藥及疫苗接種紀錄",introduce:"個案導向醫療資源計畫整合平台(POMRP) 經由不同的場域及應用情境，從醫院到社區到居家到機構。 \n 串聯了醫療紀錄及健康照護及生理量測數據，是一個跨界且完整的連續性的健康數據的管理整合平台，我們將面臨高臨化的社會結構，透過數位科技的整合，引領所有的你我他。 \n 進入健康促進、預防衰老、預測疾病進程等的在宅精準照護的安居生活。"},
    {img:<img src={EBM} style={{width:"100%"}}/>,link:"https://mitw.dicom.org.tw/pdf/8.%E5%95%86%E4%B9%8B%E5%99%A8%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_UDE%20%E8%A1%8C%E5%8B%95%E9%86%AB%E7%99%82%E5%BD%B1%E5%83%8F%E4%BC%BA%E6%9C%8D%E5%99%A8%20App.pdf",name:<div><h3>商之器科技股份有限公司</h3> <h4>UDE / 行動醫療影像伺服器 App</h4></div>,traks:"參加賽道 \n TRACK#4 - DICOMWeb查詢與調閱 \n TRACK#5 - DICOM數位全幅病理顯微鏡影像查詢與調閱 \n TRACK#7 - 影像檢查流程",introduce:"UDE是EBM既有產品的轉型升級，將PACS的應用環境延伸到iPad Pro，整合為一個獨立的伺服器及顯示設備。 醫護人員在病患做完檢查後，將影像由儀器端傳至iPad Pro儲存與管理，可進行離線影像調閱瀏覽，也可做獨立工作站和報告系統整合等延伸應用。 UDE更可利用在本機的CoreML影像AI及雲端AI模組，將運算結果同步顯示在屏幕上，讓影像上呈現標註，輔助醫生判讀肉眼難以辨識的微小病灶。 未來也將導入更多影像AI模組，持續提升輔助醫師診斷效率及流程。"},
    {img:<img src={Advance} style={{width:"100%"}}/>,link:"https://mitw.dicom.org.tw/pdf/12.%E7%B7%AF%E8%AC%99%E7%A7%91%E6%8A%80_FHIR%20%E8%B3%87%E6%96%99%E4%BA%A4%E6%8F%9B%E5%B9%B3%E5%8F%B0.pdf",name:<div><h3>緯謙科技</h3> <h4>FHIR 資料交換平台</h4></div>,traks:"參加賽道 \n TRACK#1 - 病人基本資料互通",introduce:"緯謙科技提供FHIR Convertner資料轉換平台，並整合公有雲架構，建構彈性使用的混和雲架構，便於使用者快速將不同資料格式轉換為FHIR標準格式，對於儀器商、臨床生理數據整合商，醫院HIS、健保申報、院內院外數據交換等應用，有需要轉換成FHIR格式者提供轉換服務，並可依需求設計成公有雲、私有雲、純地端等不同技術架構，滿足使用者彈性需求。"},
    {img:<img src={Artwork} style={{width:"70%"}}/>,link:"https://mitw.dicom.org.tw/pdf/14.%E9%81%A0%E5%82%B3%E9%9B%BB%E4%BF%A1%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E9%81%A0%E5%82%B3%20Health+%E9%81%A0%E8%B7%9D%E8%A8%BA%E7%99%82.pdf",name:<div><h3>遠傳電信股份有限公司</h3> <h4>遠傳 Health+遠距診療</h4></div>,traks:"參加賽道  \n TRACK#1 - 病人基本資料互通 \n TRACK#2 - 生理量測數據互通",introduce:"遠傳電信以5G服務為基礎，再結合了IoT、雲端服務，面對人口逐漸老化的台灣社會，於2020就推出了 Health+遠距診療服務。 服務採用SaaS服務架構，具有佈署快且於易維護的特性，可同時支援跨服務機構之單一平台。 過去我們強調不需整合即可簡單使用，但本公司的整合能力亦是我們的強項，因此本次參加 MITW 主辦的 FHIR 聯測就是為了驗證我們跨醫院進行整合之能力。 遠傳電信 Health+遠距診療服務已經在台東縣11鄉鎮上線服務，上線幾個月內，服務超過2,000人次，民眾滿意度>90%；2020年起再與國衛院合作，透過5G連結IOT等科技，利用遠距醫療模式，打造糖尿病連續式醫療照護，改善醫療可近性問題。 未來遠傳將會持續努力，提供台灣更易用的服務平台。"}
];

const HospitalInform=[
    {img:<img src={Hospital1} style={{width:"100%"}}/>,link:"https://mitw.dicom.org.tw/pdf/11.%E4%BD%9B%E6%95%99%E6%85%88%E6%BF%9F%E9%86%AB%E7%99%82%E8%B2%A1%E5%9C%98%E6%B3%95%E4%BA%BA%E8%8A%B1%E8%93%AE%E6%85%88%E6%BF%9F%E9%86%AB%E9%99%A2_%E5%81%A5%E5%BA%B7%E7%A6%8F%E7%A5%89%E7%A7%91%E6%8A%80%E6%95%B4%E5%90%88%E7%85%A7%E8%AD%B7%E7%A4%BA%E7%AF%84%E5%A0%B4%E5%9F%9F%E6%8E%A8%E5%8B%95%E8%A8%88%E7%95%AB.pdf",name:<div><h3>佛教慈濟醫療財團法人花蓮慈濟醫院</h3> <h4>健康福祉科技整合照護示範場域推動計畫</h4></div>,traks:"參加賽道 \n TRACK#1 - 病人基本資料互通 \n TRACK#2 - 生理量測數據互通 \n TRACK#3 - 用藥及疫苗接種紀錄",introduce:"本計畫以花蓮縣秀林鄉、吉安鄉、鳳林鎮、光復、萬榮、卓溪鄉及台東縣海端鄉、池上鄉、延平鄉為健康福祉科技整合照護之示範推動地區，透過對示範場域健康及醫療照護現況與需求進行全面調查與分析，以衛生所醫療資訊系統為基礎，整合慈濟醫院醫療資訊系統的門急診、手術住院、慢性病及藥物資訊，盤整示範場域目前之系統使用狀態，並以家庭歸戶進行跨系統介接，建置家庭健康戶口名簿，開發「健康福祉科技整合照護平台」。 平台包括以鄉鎮為範圍的：1.家戶歸戶作業；2.預防保健(四癌篩檢、X光、預防注射)名冊匯入及查詢列印；3.慢性病(糖尿病、高血壓、高血脂、肝病、胃病、COPD)的資料匯入及個案管理；4.長照據點(社區關懷據點及部落文化健康站)個案管理及生理量測系統；5.居家端個案收案及設備綁定管理，6.健康福祉FHIR跨區域互通系統；7.健康福祉視覺化地理資訊系統；8.健康福祉Line Bot主動推播及整合查詢系統。 另透過 FHIR Gateway介接：1.健康福祉科技整合照護平台；2.各家雲端生理量測平台; 3.醫院及衛生所HIS；4.縣政府社會處早療及獨居長者個案管理系統；5.醫院罕病兒童個案管理系統；6.急性後期及長照轉介。計畫應用遠距資通訊科技發展適合偏鄉的遠距照護及醫療服務模式。"},

];

const GovernmentInform=[
    {img:<img src={G1} style={{width:"100%"}}/>,link:"https://mitw.dicom.org.tw/pdf/1.%E5%9C%8B%E7%AB%8B%E6%88%90%E5%8A%9F%E5%A4%A7%E5%AD%B8%20-%20%E6%99%BA%E6%85%A7%E5%9E%8B%E5%AA%92%E9%AB%94%E8%88%87%E7%94%9F%E6%B4%BB%E5%AF%A6%E9%A9%97%E5%AE%A4_ALOVAS%20%E6%95%B8%E4%BD%8D%E7%97%85%E7%90%86%E5%88%87%E7%89%87%E5%BD%B1%E5%83%8F%E5%88%86%E6%9E%90%E7%B3%BB%E7%B5%B1.pdf",name:<div><h3>國立成功大學 - 智慧型媒體與生活實驗室</h3> <h4>ALOVAS 數位病理切片影像分析系統</h4></div>,traks:" 參加賽道 \n TRACK#1 - 病人基本資料互通 \n TRACK#4 - DICOMWeb查詢與調閱 \n TRACK#5 - DICOM數位全幅病理顯微鏡影像查詢與調閱",introduce:"以前病理醫師在做病理診斷的時候，常常需要找一些很小的病灶，以及對疾病嚴重度做分級。 此程序常常需要耗費許多的眼力、腦力、以及時間。 ALOVAS 數位病理切片影像分析系統利用影像處理的方式與AI人工智慧深度學習與分析，可以幫助病理醫師尋找一些小的病灶，避免遺漏和節省時間。 另外對於疾病的嚴重度，也可以幫助病理醫師做一些客觀且準確的分級，以期達到精準醫療。 \n 本系統為跨平台的系統，醫師可以利用平板或是電腦，將病理影像資料傳送到本系統，目標如下： \n 1. 病理影像分析 \n 2. 腫瘤病理分級 \n 3. 提供細胞相關參數 (核質比、細胞大小、密度分布…等) \n 4. 提供影像分析結果瀏覽 \n 5. 提供醫師影像標註功能 "},
    {img:<img src={G2} style={{width:"100%"}}/>,link:"https://mitw.dicom.org.tw/pdf/17.CIMS%E5%9C%98%E9%9A%8A_%E8%87%A8%E5%BA%8A%E7%A0%94%E7%A9%B6%E8%B3%87%E8%A8%8A%E7%B3%BB%E7%B5%B1(CSIS)%E8%88%87CSIS-APP.pdf",name:<div><h3>CIMS服務團隊</h3> <h4>臨床研究資訊系統(CSIS)與CSIS-APP</h4></div>,traks:"參加賽道 \n TRACK#1 - 病人基本資料互通 \n TRACK#3 - 用藥及疫苗接種紀錄 \n TRACK#6 - 基因定序標記",introduce:"臨床研究資訊系統(Clinical Study Information System, CSIS)是一個協助收集臨床研究，或臨床試驗數據與的電子系統。 系統具備強大的設計功能，可以設計一般的國際標準問卷，或客製化的電子化個案報告表(eCRF)。 若由開放電子化個案報告表(eCRF)資料庫所收集的上萬張表單中，挑選eCRF並存為符合ODM之格式，即可直接上傳到使用，免去自行設計的時間。 此外，CSIS亦可設計符合CDISC標準的eCRF，並自動產生註解的個案報告表 (aCRF)以節省人工。 試驗計畫(study plan)中可列出受試者每次來訪所需的表單，並以儀表版呈現表單填寫的狀態，方便了解收案進度。"},
    {img:<img src={G2} style={{width:"100%"}}/>,link:"https://mitw.dicom.org.tw/pdf/18.CIMS%E6%9C%8D%E5%8B%99%E5%9C%98%E9%9A%8A_%E8%87%A8%E5%BA%8A%E7%A0%94%E7%A9%B6%E8%B3%87%E8%A8%8A%E7%B3%BB%E7%B5%B1%20(Clinical%20Study%20Information%20System,%20CSIS).pdf",name:<div><h3>CIMS服務團隊</h3> <h4>臨床研究資訊系統 (Clinical Study Information System, CSIS)</h4></div>,traks:"參加賽道 \n TRACK#1 - 病人基本資料互通 \n TRACK#3 - 用藥及疫苗接種紀錄 \n TRACK#6 - 基因定序標記",introduce:"在基因體醫學、生技醫藥等國家型計畫的支援下，國立陽明大學由美國國家衛生院導入臨床試驗與管理系統，給計畫及醫院的人體試驗委員會、臨床試驗中心、人體生物資料庫等單位使用。 該系統可載入符合CDISC的傳輸標準(ODM)之電子表單，因此可使用上萬種開放(open source)的表單。此外也提供問題庫，方便製作符合CDISC標準的電子表單。 系統可用網頁或APP方式在行動裝置上填寫問卷，收集患者回饋結果(ePRO)等實境數據(RWD)。 系統可使用API界接血壓計等物聯網(IoT)設備、或與核心實驗室、醫院系統等交換數據，適合廠商管理臨床試驗使用。"},

];

const CrosssystemInform=[
{title:"DICOM互通情境",img:[<img src={c1} style={{width:"100%"}}/>,<img src={c2} style={{width:"100%"}}/>]}
];
export {ListTitle,List,OpenSourceInform,IndustryInform,HospitalInform,GovernmentInform,CrosssystemInform}