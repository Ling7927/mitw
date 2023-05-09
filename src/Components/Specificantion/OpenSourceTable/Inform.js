import Burni from "../../../assets/BurniLogo.png"
import Panda from "../../../assets/RedPandaLogo.jpg"
import BlueLight from "../../../assets/BlueLightLogo.png"
import Raccoon from "../../../assets/RaccoonLogo.png"
const Title=[
    "名稱","簡介","適用賽道","貢獻者"

]
const TBody=[
    {"name":"布魯斯(Burni)","img":Burni,"link":"https://github.com/Chinlinlee/Burni","introduce":"Burni 使用 Node.JS 、Express 框架以及 MongoDB 實作 FHIR R4 Server，經由簡單的設定即可產生指定 FHIR Resource、API程式碼並可自行更改，滿足需求。支援跨平台安裝，可以快速架設 FHIR Server。Burni也支援FHIR實作指引用於儲存FHIR Resource以及產生FHIR RESTful API。","traks":"所有賽道","contributor":"國北護CYLAB","clink":"https://cylab.dicom.tw/"},
    {"name":"FHIR熊貓","img":Panda,"link":"https://github.com/cylab-tw/FHIR-Pandas","introduce":"FHIR Pandas提供各種網頁前端框架，包括 Vue.js、Angular.js 和 Vanilla.js，實現 FHIR 客戶端，提供原始碼。FHIR Pandas亦提供台灣核心實作指引(TW Core IG)中10 個Profile的FHIR 客戶端程式碼範例","traks":"所有賽道","contributor":"國北護CYLAB","clink":"https://cylab.dicom.tw/"},
    {"name":"FHIR Universal Conversion Kit","img":"","link":"https://github.com/Lorex/FHIR-Universal-Conversion-Kit","introduce":<>FHIR Universal Conversion Kit提供任意數據轉換FHIR格式。亦提供台灣核心實作指引(TW Core IG)中10 個Profile的FHIR 客戶端轉換程式碼範例(詳見<a href="https://github.com/cylab-tw/FHIR-Pandas">FHIR熊貓</a>)	</>,"traks":"所有賽道","contributor":"楊宇凡","clink":"https://github.com/Lorex"},
    {"name":"藍光(BlueLight)","img":BlueLight,"link":"","introduce":"採用SPA(Single-Page Application)架構的Web DICOM Viewer，僅使用HTML5技術，可完全獨立執行，不需要搭配後端程式，可以輕鬆部署在任何 HTTP 服務器上。不僅支援離線存取DICOM影像，亦可透過DICOMweb與各種DICOM Server介接。除了提供基本的影像2D操作功能以外，也支援3D重組功能，包含MPR以及VR","traks":"Track #4 醫學影像與病理","contributor":"國北護CYLAB","clink":"https://cylab.dicom.tw/"},
    {"name":"浣熊(Raccoon)","img":Raccoon,"link":"https://github.com/cylab-tw/raccoon","introduce":"Mainecoon 採用SPA(Single-Page Application)架構的Web DICOM WSI Viewer，僅使用HTML5技術，可完全獨立執行，不需要搭配後端程式，可以輕鬆部署在任何 HTTP 服務器上。不僅支援離線存取DICOM影像，亦可透過DICOMweb與各種DICOM Server介接。提供基本數位病理影像顯示與操作功能以外，另外也支援DICOM ANN的標記註解顯示","traks":"Track #4 醫學影像與病理","contributor":"國北護CYLAB","clink":"https://cylab.dicom.tw/"},
    {"name":"緬因貓(Mainecoon)","img":"","link":"https://github.com/Chinlinlee/Burni","introduce":"採用SPA(Single-Page Application)架構的Web DICOM Viewer，僅使用HTML5技術，可完全獨立執行，不需要搭配後端程式，可以輕鬆部署在任何 HTTP 服務器上。不僅支援離線存取DICOM影像，亦可透過DICOMweb與各種DICOM Server介接。除了提供基本的影像2D操作功能以外，也支援3D重組功能，包含MPR以及VR","traks":"Track #6 - 基因體標記","contributor":"國北護CYLAB","clink":"https://cylab.dicom.tw/"},
    {"name":"ngs2fhir","img":"","link":"https://github.com/cylab-tw/ngs2fhir","introduce":"ngs2fhir為轉換次世代基因體序列(Next generation sequencing, NGS)之VCF格式轉換FHIR Resource的工具。	","traks":"Track #4 醫學影像與病理","contributor":"國北護CYLAB","clink":"https://cylab.dicom.tw/"},


]
export {Title,TBody}