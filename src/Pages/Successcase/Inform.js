import BlueLight from "../../assets/BlueLightLogo.png";
import Raccoon from "../../assets/RaccoonLogo.png";
import Burni from "../../assets/BurniLogo.png";
import RedPanda from "../../assets/RedPandaLogo.png";
import Power from "../../assets/2.SYSPOWER.png";
import EBM from "../../assets/EBM.jpeg";
import Advance from "../../assets/wiAdvance.jpg";
import Artwork from "../../assets/ItunesArtwork.jpg";
import Hospital1 from "../../assets/TzuChiHospital.png";
import DHP from "../../assets/DHP.png";
import CGM from "../../assets/CGM.png";
import Med from "../../assets/Medical.png";
import Adv from "../../assets/AdvMeds.png";
import How from "../../assets/HowiseAI.png";
import ACME from "../../assets/ACME.jpg";
import Kenkone from "../../assets/Kenkone.png";
import Vaccine from "../../assets/Vaccine.jpg";
import Vaccine2 from "../../assets/Vaccine2.gif";
import V5 from "../../assets/V5.png";
import DAXIN from "../../assets/DAXIN.png";
import Moooore from "../../assets/Moooore.png";
import Sitatech from "../../assets/Sitatech.png";
import Doctor from "../../assets/DocterWatch.png";
import iCare from "../../assets/iCare.png";
import Minicoon from "../../assets/Minicoon.png";

import G1 from "../../assets/ALOVAS.png";
import G2 from "../../assets/CIMS.gif";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import f1 from "../../assets/f1.jpeg";
import f2 from "../../assets/f2.jpeg";

import OpenSource from "../../Components/Successcase/OpenSource/OpenSource";
import Industry from "../../Components/Successcase/Industry/Industry";
import Hospital from "../../Components/Successcase/Hospital/Hospital";
import Government from "../../Components/Successcase/Government/Government";
import Crosssystem from "../../Components/Successcase/Crosssystem/Crosssystem";
import ImgDialog from "../../Components/Dialog/Dialog";
const ListTitle = [
  { id: "1", title: "開源專案" },
  { id: "2", title: "產業產品" },
  { id: "3", title: "醫院應用" },
  { id: "4", title: "政府專案" },
  { id: "5", title: "跨系統互通情境" },
];
const List = [
  { id: "1", title: "開源專案", cases: <OpenSource /> },
  { id: "2", title: "產業產品", cases: <Industry /> },
  { id: "3", title: "醫院應用", cases: <Hospital /> },
  { id: "4", title: "政府專案", cases: <Government /> },
  { id: "5", title: "跨系統互通情境", cases: <Crosssystem /> },
];

const OpenSourceInform = [
  {
    img: BlueLight,
    linkName: "專案程式碼",
    link: "https://github.com/cylab-tw/bluelight",
    name: "藍光(BlueLight) - Web-based DICOM Viewer",
    tracks:
      "\n TRACK#4 - DICOMWeb查詢與調閱 \n TRACK#5 - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱 \n TRACK#7 - 影像檢查流程",
    jointracks: [
      { trackstitle: "\nTRACK#4", tracksname: " - DICOMWeb查詢與調閱" },
      {
        trackstitle: "\nTRACK#5",
        tracksname: " - DICOM數位全幅病理顯微鏡 影像查詢與調閱",
      },
      { trackstitle: "\nTRACK#7", tracksname: " - 影像檢查流程" },
    ],
    introduce:
      "A browser-based medical image viewer,a pure single-page application (SPA), lightweight, and using only JavaScript and HTML5 technologies so as to deploy it on any HTTP server easily (just put it in HTTP server). It supports not only opening local data, but also connecting to medical image archives which support DICOMweb. It provides tools for medical image interpretation and 3D image reconstruction, e.g., Multiplanar Rreformation or Reconstruction (MPR) and Volume Rendering (VR).",
  },
  {
    img: Raccoon,
    linkName: "專案程式碼",
    link: "https://github.com/cylab-tw/raccoon",
    name: "浣熊(Raccoon) - NoSQL醫學影像資料庫",
    tracks:
      "  \n TRACK#4 - DICOMWeb查詢與調閱 \n TRACK#5 - DICOM數位全幅病理顯微鏡影像查詢與調閱 \n TRACK#7 - 影像檢查流程",
    jointracks: [
      { trackstitle: "\nTRACK#4", tracksname: " - DICOMWeb查詢與調閱" },
      {
        trackstitle: "\nTRACK#5",
        tracksname: " - DICOM數位全幅病理顯微鏡 影像查詢與調閱",
      },
      { trackstitle: "\nTRACK#7", tracksname: " - 影像檢查流程" },
    ],
    introduce:
      "Raccoon is a noSQL-based medical image archive for managing the DICOM images. It uses the MongoDB to manage the DICOM images and provide RESTful API, supported both FHIR ImagingStudy and DICOMWeb to store, query/retrieve, and manage DICOM images. Raccoon is bulit on the top of the Burni FHIR Server to manage the FHIR resourcs related to medical images.",
  },
  {
    img: Burni,
    linkName: "專案程式碼",
    link: "https://github.com/Chinlinlee/Burni",
    name: "布魯尼(Burni) - NoSQL FHIR Server",
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據互通 \n TRACK#3 - 用藥及疫苗接種紀錄 \n TRACK#6 - 基因定序標記",
    jointracks: [
      { trackstitle: "\nTRACK#1", tracksname: " - 病人基本資料互通" },
      { trackstitle: "\nTRACK#2", tracksname: " - 生理量測數據互通" },
      { trackstitle: "\nTRACK#3", tracksname: " - 用藥及疫苗接種紀錄" },
      { trackstitle: "\nTRACK#6", tracksname: " - 基因定序標記" },
    ],
    introduce:
      "Burni is an implementation of the FHIR server with Node, Express, and MongoDB providing very simple ways to customize the HL7 FHIR® specification, Burni support both Windows and Linux environment to enable developers to rapidly deploy a FHIR service. Burni also supports to import your Implementation Guide to store FHIR Resources and create FHIR RESTful API as well.",
  },
  {
    img: RedPanda,
    linkName: "專案程式碼",
    link: "https://github.com/cylab-tw/FHIR-Pandas",
    name: "FHIR Pandas - an FHIR client to access an FHIR server",
    tracks: "  \n TRACK#1 - 病人基本資料互通",
    jointracks: [
      { trackstitle: "\nTRACK#1", tracksname: " - 病人基本資料互通" },
    ],
    introduce:
      "FHIR Pandas is coded by various programming languages, including Vue.js, Angular.js, and Vanilla.js, to implement the FHIR client. FHIR Pandas provide source code for FHIR developers to develop their FHIR client application. Currently, we have three pandas: \n Green Panda developed by Vue.js \n Red Panda developed by angularjs \n Vanilla Panda developed by Vanilla.js \n FHIR Pandas提供基於臺灣核心實作指引規格之FHIR Client(Consumer)範例程式",
  },
];

const IndustryInform = [
  {
    img: Power,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/2.%E5%A5%87%E5%94%AF%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E5%80%8B%E6%A1%88%E5%B0%8E%E5%90%91%E9%86%AB%E7%99%82%E8%B3%87%E6%BA%90%E8%A8%88%E7%95%AB%E6%95%B4%E5%90%88%E5%B9%B3%E5%8F%B0(POMRP)+%E5%BA%B7%E5%B0%8F%E7%BE%8E.pdf",
      },
    ],

    name: (
      <div>
        <h3>奇唯科技股份有限公司</h3>{" "}
        <h4>個案導向醫療資源計畫整合平台(POMRP)+康小美</h4>
      </div>
    ),
    tracks:
      "   \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據互通 \n TRACK#3 - 用藥及疫苗接種紀錄",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "個案導向醫療資源計畫整合平台(POMRP) 經由不同的場域及應用情境，從醫院到社區到居家到機構。\n 串聯了醫療紀錄及健康照護及生理量測數據，是一個跨界且完整的連續性的健康數據的管理整合平台，我們將面臨高臨化的社會結構，透過數位科技的整合，引領所有的你我他。\n進入健康促進、預防衰老、預測疾病進程等的在宅精準照護的安居生活。\n",
  },
  {
    img: EBM,
    linkName: [
      {
        lname: "產品介紹",
        1: "https://mitw.dicom.org.tw/pdf/8.%E5%95%86%E4%B9%8B%E5%99%A8%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_UDE%20%E8%A1%8C%E5%8B%95%E9%86%AB%E7%99%82%E5%BD%B1%E5%83%8F%E4%BC%BA%E6%9C%8D%E5%99%A8%20App.pdf",
      },
    ],

    name: (
      <div>
        <h3>商之器科技股份有限公司</h3> <h4>UDE / 行動醫療影像伺服器 App</h4>
      </div>
    ),
    tracks:
      "  \n TRACK#4 - DICOMWeb查詢與調閱 \n TRACK#5 - DICOM數位全幅病理顯微鏡影像查詢與調閱 \n TRACK#7 - 影像檢查流程",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "UDE是EBM既有產品的轉型升級，將PACS的應用環境延伸到iPad Pro，整合為一個獨立的伺服器及顯示設備。\n 醫護人員在病患做完檢查後，將影像由儀器端傳至iPad Pro儲存與管理，可進行離線影像調閱瀏覽，也可做獨立工作站和報告系統整合等延伸應用。\n UDE更可利用在本機的CoreML影像AI及雲端AI模組，將運算結果同步顯示在屏幕上，讓影像上呈現標註，輔助醫生判讀肉眼難以辨識的微小病灶。\n 未來也將導入更多影像AI模組，持續提升輔助醫師診斷效率及流程。\n",
  },
  {
    img: Advance,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/12.%E7%B7%AF%E8%AC%99%E7%A7%91%E6%8A%80_FHIR%20%E8%B3%87%E6%96%99%E4%BA%A4%E6%8F%9B%E5%B9%B3%E5%8F%B0.pdf",
      },
    ],
    name: (
      <div>
        <h3>緯謙科技</h3> <h4>FHIR 資料交換平台</h4>
      </div>
    ),
    tracks: "  \n TRACK#1 - 病人基本資料互通",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "緯謙科技提供FHIR Convertner資料轉換平台，並整合公有雲架構，建構彈性使用的混和雲架構，便於使用者快速將不同資料格式轉換為FHIR標準格式，對於儀器商、臨床生理數據整合商，醫院HIS、健保申報、院內院外數據交換等應用，有需要轉換成FHIR格式者提供轉換服務，並可依需求設計成公有雲、私有雲、純地端等不同技術架構，滿足使用者彈性需求。\n",
  },
  {
    img: Artwork,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/14.%E9%81%A0%E5%82%B3%E9%9B%BB%E4%BF%A1%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E9%81%A0%E5%82%B3%20Health+%E9%81%A0%E8%B7%9D%E8%A8%BA%E7%99%82.pdf",
      },
    ],

    name: (
      <div>
        <h3>遠傳電信股份有限公司</h3> <h4>遠傳 Health+遠距診療</h4>
      </div>
    ),
    tracks: "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據互通",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "遠傳電信以5G服務為基礎，再結合了IoT、雲端服務，面對人口逐漸老化的台灣社會，於2020就推出了 Health+遠距診療服務。\n 服務採用SaaS服務架構，具有佈署快且於易維護的特性，可同時支援跨服務機構之單一平台。\n 過去我們強調不需整合即可簡單使用，但本公司的整合能力亦是我們的強項，因此本次參加 MITW 主辦的 FHIR 聯測就是為了驗證我們跨醫院進行整合之能力。\n 遠傳電信 Health+遠距診療服務已經在台東縣11鄉鎮上線服務，上線幾個月內，服務超過2,000人次，民眾滿意度>90%；2020年起再與國衛院合作，透過5G連結IOT等科技，利用遠距醫療模式，打造糖尿病連續式醫療照護，改善醫療可近性問題。\n 未來遠傳將會持續努力，提供台灣更易用的服務平台。\n",
  },
  {
    img: DHP,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/15.%E7%9D%BF%E5%82%B3%E6%95%B8%E6%93%9A%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E5%81%A5%E5%BA%B7%E5%B0%8F%E8%9C%9C%E8%9C%82%E6%95%B8%E4%BD%8D%E5%81%A5%E5%BA%B7%E5%B9%B3%E5%8F%B0,%20HealthBee%20Digital%20Health%20Platform(DHP).pdf",
      },
    ],

    name: (
      <div>
        <h3>睿傳數據股份有限公司</h3>{" "}
        <h4>健康小蜜蜂數位健康平台, HealthBee Digital Health Platform(DHP)</h4>
      </div>
    ),
    tracks:
      "   \n  TRACK#1 - 病人基本資料互通\n TRACK#4 - DICOMWeb查詢與調閱 \n TRACK#7 - 影像檢查流程",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "「健康小蜜蜂數位健康平台/HealthBee DHP」是補充醫療健康難及之處，提供健康管理機構及企業職場，聯合照護客戶與員工的生態環境，平台提供：\n1.健檢機構1+364天的健康管理照護：平台提供全面數位化的客戶服務，節省每年龐大的郵寄、光碟等無意義浪費，升級客戶體驗全年貼身數位分身服務；健管師任務自動派工及快速便利的記錄方式，完整不漏接的服務客戶，並直接與服務的企業數位對接，全面自動化提高服務水平；實時匯集客戶提供的多元數據，透過演算實現精準健康管理服務、推薦客戶最佳保健措施，成為客戶心中之AI健康管理師，徹底領先同業、獲致本平台提供最高性價比的服務。\n    2.充分適應各式小/中/大型企業之職醫護需求：平台持續跟進職安相關法規變動調整，平台內建自動化數位流程，汲取員工資料同時，即自動進行健康風險分級與納入個案管理機制，讓職醫護即時順利地掌握高風險員工，透過多種管道關懷員工、提升員工健康意識；並配合企業需要，提供各式健康活動所需工具，大大的滿足企業提高照護員工健康成效、降低維護成本，使促進職場健康支持企業永續經營，成就幸福企業。\n    3.HealthBee DHP提供強大的整合運算能力，經由各式標準傳輸協定(如：FHIR)彙整健檢報告、問卷、就醫紀錄/健康存摺及IoT生活量測等數據，依據經實證醫學確認的演算邏輯，提供個人器官系統之關鍵評估報告，適切提出各項建議包括飲食、生活習慣、運動等，專業健康照護者可依個人或群組將適切之健康衛教與提醒服務，透過App推播到客戶/員工手中，亦可經由個人授權，將連續性日常活動數據及健康存摺，供專業健康照護者進行參閱及服務建議。\n",
  },
  {
    img: CGM,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/16.%E9%95%B7%E5%BA%9A%E9%86%AB%E5%AD%B8%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_U-Dr%E9%81%A0%E8%B7%9D%E9%86%AB%E7%99%82%E7%94%A2%E5%93%81.pdf",
      },
    ],

    name: (
      <div>
        <h3>長庚醫學科技股份有限公司</h3> <h4>U-Dr遠距醫療產品</h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據互通 \n TRACK#3 - 用藥及疫苗接種紀錄",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "長庚醫科U-Dr遠距醫療產品特色：\n1. 提供一般門診可支援多點連線遠距會診服務應用。\n2. 多元醫儀IoT設備介接服務。\n3. 即時雙通道影音傳輸進行視訊診察應用，醫病親臨互動。\n4. 整合介接各家HIS醫囑系統與遠距會診服務。\n\n醫療服務面特色優勢：\n1. 對民眾端的服務，提供不定點多科別的診療服務，改善偏鄉醫療服務專科別種類及時間的限制，提供醫院對專科醫師服務安排的彈性，醫師看診中即可進行會診，提升醫療服務可近性。\n    2. 對醫師端的服務，提供遠端完整的診療資訊，整合病人視訊影像聲音、五官檢查影像、會診觀察結果，以及歷次重大醫療紀錄等，提升醫療資訊完整性。\n    3. 病歷可彙整於同一醫療資訊系統，不須重複輸入，一次輸入雙方使用，滿足醫療法要求。\n",
  },
  {
    img: Med,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E4%BB%8B%E7%B4%B9/7.%E9%86%AB%E5%90%88%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_An%20architecture%20and%20management%20platform.pdf",
      },
      {
        lname: "產品海報",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1/7.%E9%86%AB%E5%90%88%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1.pdf",
      },
    ],

    name: (
      <div>
        <h3>醫合股份有限公司</h3>{" "}
        <h4>
          An architecture and management platform for blockchain-based FHIR
          personal health record exchange
        </h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據\n TRACK#3 - 處方用藥及文件打包 \nTRACK#7 - 緊急醫療救護",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "本產品藉由全面性的個人健康數據分析，設計個人化健康管理策略，提供使用者參考，達到精準醫療的目的。\n HYGEA整合多重資訊科技技術輔助健康管理與跨國資料交換，以健康管理、用藥分析、健康趨勢監測以及疾病預測，達到精準身體指標分析。\n本產品建構一個具有高度互操作性的平台，輔助使用者進行自我健康管理，提升自我健康照護的責任與義務。\n提供個人健康紀錄跨國交換與管理，以區塊鏈架構保護資料安全，資料符合FHIR標準，提升資料可用性。\n使用者遵從自我意願完成健康紀錄跨國交換。\n",
  },

  {
    img: Adv,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/4.%E5%85%88%E9%80%B2%E9%86%AB%E8%B3%87%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E4%BA%AB%E5%81%A5%E5%BA%B7%E9%98%B2%E7%96%AB%E5%A4%A7%E5%B8%AB.pdf",
      },
    ],

    name: (
      <div>
        <h3>先進醫資股份有限公司 </h3> <h4>享健康防疫大師</h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據互通 \n TRACK#3 - 用藥及疫苗接種紀錄",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "「享健康防疫大師」，量測、追縱、管理、實聯、TOCC、疫苗護照一次滿足。\n 打破一成不變體溫量測，整合各種通訊方式如Wi-Fi、4G/LTE等以符合場域通訊需求，以零接觸經濟為主的防疫物聯網架構，可裝設於企業職場、醫療機構、校園機構等場所，使用者於可觸控互動式電腦或平板開啟自動體溫量測App，並使用自動測溫儀器量測，可將量測記錄上傳雲端。\n透過健保卡、感應員工卡快速識別量測者，並可設定快速量測造冊模式、前台問卷模式等，協助機構把關每位進出者的健康狀況。\n 此外，針對醫療院所環境開發出TOCC自動查詢模組，只要插入健保卡，系統就會自動連結個人旅遊史，若有異常，系統會發出警示語音及圖像。\n 低成本快速佈建，價格只有市面傳統熱像儀的十分之一且彈性符合各種場域精準度傳感器不受週邊熱源影響，檢測具有±0.2°C的量測誤差，只要0.5秒就能立即完成測量，讓機構輕鬆防疫沒煩惱。\n 未來可配合整體推動一日通行證及結合疫苗護照等服務。\n",
  },
  {
    img: How,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E4%BB%8B%E7%B4%B9/4.%E6%98%8A%E6%85%A7%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_AI%20Clerk%20Platform%20%E7%97%85%E6%AD%B7%E7%B5%90%E6%A7%8B%E5%8C%96%E5%B7%A5%E5%85%B7.pdf",
      },
      {
        lname: "產品海報",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1/4.%E6%98%8A%E6%85%A7%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1.pdf",
      },
    ],

    name: (
      <div>
        <h3>昊慧股份有限公司 </h3>{" "}
        <h4>
          AI Clerk PlatfoAn architecture and management platform for
          blockchain-based FHIR personal health record exchange
        </h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據 \n TRACK#3 - 用藥及疫苗接種紀錄 \n TRACK#7 - 緊急醫療救護",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "協助醫療院所與保險公司從各種非結構化的各式診斷證明書、病歷、檢查報告，自動辨識與擷取重要資訊，變成容易分析和統計，並提供衍生之各式應用服務。\n協助醫療機構產生更多研究成果、減少誤診與促進營運效益。\n 協助保險公司以一條龍方式進行AI保險理賠和核保，除了可大幅減少營運成本，並獲得更多素材精算保費。\n   可支援以API、各式圖檔、PDF、JSON和TXT輸入和輸出，並獲得2021年國家新創獎-企業新創獎肯定。\n",
  },

  {
    img: ACME,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/6.%E6%85%B6%E6%97%BA%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_AI%20Clerk%20Platform.pdf",
      },
    ],

    name: (
      <div>
        <h3>慶旺科技股份有限公司</h3> <h4>QED2000</h4>
      </div>
    ),
    tracks: "  \n TRACK#2 - 生理量測數據互通 \n TRACK#7 - 影像檢查流程",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "QED2000 能快速準確完成12導程心電圖量測。\n 它具有先進的設計和人體工程學,使醫護人員能夠快速方便地控制設備。\n其特點如下:\n●15.6吋大尺寸全高清觸控式顯示螢幕\n●即時提供準確心電圖採集數據\n    ●提供心電圖異常診斷達200種 \n   ●簡單直觀的使用者輸入操作介面\n    ●自動將ECG數據傳輸到電子病歷\n    ●支援外部儲存設備擴充\n    ●支援USB介面印表機\n    ●支援 DICOM 上傳\n    ●設計材質通過抗菌測試",
  },

  {
    img: Kenkone,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/7.%E5%BA%B7%E7%B5%B1%E9%86%AB%E5%AD%B8%E7%A7%91%E6%8A%80_Bless%E5%81%A5%E5%BA%B7%E8%AD%B7%E7%85%A7.pdf",
      },
    ],

    name: (
      <div>
        <h3>康統醫學科技</h3> <h4>Bless健康護照</h4>
      </div>
    ),
    tracks: "  \n  TRACK#1 - 病人基本資料互通\n TRACK#3 - 用藥及疫苗接種紀錄",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "「Bless健康護照」為康統醫學科技2021年新產品，符合衛福部、歐盟、美日等各國規範的驗證機制，可輔導單位發出合格的數位證明，完成接種與篩檢記錄FHIR格式轉換，並核實疫苗護照的內容與真偽。\n",
  },
  {
    img: Kenkone,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E4%BB%8B%E7%B4%B9/3.%E5%BA%B7%E7%B5%B1%E9%86%AB%E5%AD%B8%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_EVAS%E5%85%A7%E8%A6%96%E9%8F%A1%E6%99%BA%E8%83%BD%E5%8A%A9%E7%90%86%E7%B3%BB%E7%B5%B1.pdf",
      },
      {
        lname: "產品海報",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1/3.%E5%BA%B7%E7%B5%B1%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1.pdf",
      },
    ],

    name: (
      <div>
        <h3>康統醫學科技 </h3> <h4>EVAS內視鏡智能助理系統</h4>
      </div>
    ),
    tracks: "  \n  TRACK#1 - 病人基本資料互通\n",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "醫師於內視鏡檢查過程之起始、結束及關鍵點，藉由口述方式回傳指令，讓AI系統自動判讀，並產生完整檢查報告，節省醫護人員謄打報告時間，並提升病歷書寫品質；檢查影像另累積成醫療大數據，進行疾病輔助診斷AI模型應用之「聯邦學習」開發。\n",
  },

  {
    img: Vaccine,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/9.%E8%B2%A1%E5%9C%98%E6%B3%95%E4%BA%BA%E8%B3%87%E8%A8%8A%E5%B7%A5%E6%A5%AD%E7%AD%96%E9%80%B2%E6%9C%83_Vaccine%20QRCode%20Passport.pdf",
      },
    ],

    name: (
      <div>
        <h3>財團法人資訊工業策進會 </h3> <h4>Vaccine QRCode Passport</h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\nTRACK#2 - 生理量測數據互通 \n TRACK#3 - 用藥及疫苗接種紀錄",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "使用者使用此服務可以透過TWID認證方式來上傳自己的COVID-19疫苗注射紀錄（小黃卡），以及輸入身份證字號來查詢對外合作間接的FHIR Server系統找到COVID-19疫苗注射紀錄資料，透過找到的疫苗紀錄來確認使用者注射的資訊之外，還可以讓使用者產生對應的疫苗資訊QRCode，讓使用者可以到店家消費的時候可以出示，當店家讀取QRCode之後，知道使用者目前的疫苗注射紀錄，進而可以讓店家確保與管控使用者的進出，產生QRCode的疫苗護照方式，全程採用不重複與有時效性的權杖（Token）對應的方式進行，QRCode的內容中不會存有使用者敏感資訊。\n 此外，產生的QRCode也會有3分鐘使用的期限，當期限到了，則使用者需要再次產生QRCode。\n",
  },

  {
    img: Vaccine2,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/10.%E8%B2%A1%E5%9C%98%E6%B3%95%E4%BA%BA%E8%B3%87%E8%A8%8A%E5%B7%A5%E6%A5%AD%E7%AD%96%E9%80%B2%E6%9C%83_%E7%94%9F%E9%86%AB%E8%B3%87%E6%96%99%E5%95%86%E7%94%A8%E6%99%BA%E6%85%A7%E5%8C%96%E5%B7%A5%E5%85%B7.pdf",
      },
    ],

    name: (
      <div>
        <h3> 財團法人資訊工業策進會</h3> <h4>生醫資料商用智慧化工具</h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據互通 \n TRACK#3 - 用藥及疫苗接種紀錄",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "面對各種異質場域產生的醫療健康數據，以及越來越多的智慧裝置產生巨量且多樣的IoT資料，跨域資料數據的授權取得及複合應用，以滿足精準健康的發展與帶動醫療照護產業轉型需求應運而生。\n 為達成生醫資料商化應用之未來目標，資策會研發生醫資料智慧商評及對應的智慧應用工具，同時開發生醫資料商化所需之管理系統，在符合現行法規運作、不重複蒐集資料與平台不儲存資料的前提下，透過平台媒合產業中不同特性或角色的單位(如醫院、藥局、穿戴裝置等等)，期望共同合作探索可能的資料需求與應用模式。\n 提供數據資料供需雙方使用之「生醫資料商用智慧化工具」，具有數據標準化、數據輪廓分析、匿名合規授權驗證與資料安全傳輸等功能，串聯交易媒合機制，期望達成醫療健康數據跨域串聯與價值創造。\n",
  },

  {
    img: V5,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/13.%E5%80%8D%E5%88%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E2%80%9C%E5%80%8D%E5%88%A9%E2%80%9D%E8%82%BA%E9%83%A8%E5%BD%B1%E5%83%8F%E8%BC%94%E5%8A%A9%E5%88%A4%E8%AE%80%E8%BB%9F%E9%AB%94.pdf",
      },
    ],

    name: (
      <div>
        <h3>倍利科技股份有限公司</h3> <h4>大心高智能成人尿布</h4>
      </div>
    ),
    tracks:
      "  \n TRACK#4 - 影像、結構化影像報告、AI標記與影像檢查流程 \n TRACK#7 - 影像檢查流程 ",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "本產品可在醫師進行常規檢查時，輔助識別與標記雙肺 CT 系列影像的結節，於醫師進行常規閱讀雙肺 CT 系列影像時，顯現標記結果。\n當本產品接收到來自醫院 PACS 系統的 CT 系列影像時，先檢查影像品質符合需求，並確認所需欄位後，進行辨識並標記疑似結節。\n完成標記後，透過符合 DICOM 標準協議寫回資訊；使用者透過操作DICOM Viewer，對偵測結果影像進行閱片，並顯示疑似結節標記結果。\n",
  },
  {
    img: DAXIN,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E4%BB%8B%E7%B4%B9/1.%E5%A4%A7%E5%BF%83%E7%94%9F%E7%89%A9%E7%A7%91%E6%8A%80%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E5%A4%A7%E5%BF%83%E9%AB%98%E6%99%BA%E8%83%BD%E6%88%90%E4%BA%BA%E5%B0%BF%E5%B8%83.pdf",
      },
      {
        lname: "產品海報",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1/1.%E5%A4%A7%E5%BF%83%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1.pdf",
      },
    ],

    name: (
      <div>
        <h3>大心生物科技股份有限公司 </h3> <h4>大心高智能成人尿布</h4>
      </div>
    ),
    tracks: "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "大心高智能成人尿布為透過穿戴式的醫療級矽膠褲內置感應器，可偵測臥床患者大小便並全自動的清洗、烘乾，全程無須人力介入，可以即時將排泄行為做數據化紀錄，並透過系統數據建模，可以提供醫療、長照領域中進行相關疾病數據之前期警示，以智慧應用提升照護品質及透過預防醫學降低後續醫療成本支出。\n個案導向醫療資源計畫整合平台(POMRP) 經由不同的場域及應用情境，從醫院到社區到居家到機構。\n",
  },

  {
    img: Moooore,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E4%BB%8B%E7%B4%B9/5.%E6%91%A9%E7%88%BE%E8%B3%87%E9%80%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E5%AE%89%E5%BF%83%E6%91%A9%E7%88%BE.pdf",
      },
      {
        lname: "產品海報",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1/5.%E6%91%A9%E7%88%BE%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1.pdf",
      },
    ],

    name: (
      <div>
        <h3>摩爾資通有限公司</h3> <h4>安心摩爾 </h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據 \nTRACK#7 - 緊急醫療救護",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "救護車到院前通報系統(心電圖)。\n具雙向確認功能可通過語音播報告知現場救護人員心電圖影像傳輸結果。\n通過LTE行動網路縮短影像傳輸時間，並確保影像的正確性和匿名性。\n 通知模組可將影像標記後送至指定的SMS、Email 或Line等社群軟體通訊群組。\n 後台系統提供管理介面及可視化圖表可以追蹤所有裝置和影像等紀錄，亦可將影像再次傳輸到指定資料庫或伺服器存放。\n",
  },

  {
    img: Sitatech,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E4%BB%8B%E7%B4%B9/6.%E7%9F%BD%E5%A1%94%E8%B3%87%E8%A8%8A%E6%9C%8D%E5%8B%99%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_%E7%9F%BD%E5%A1%94%20FHIR%20%E6%99%BA%E6%85%A7%E9%86%AB%E7%99%82%E6%95%B8%E6%93%9A%E6%9C%8D%E5%8B%99%E4%B8%AD%E5%8F%B0.pdf",
      },
      {
        lname: "產品海報",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1/6.%E7%9F%BD%E5%A1%94%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1.pdf",
      },
    ],

    name: (
      <div>
        <h3>矽塔資訊服務有限公司 </h3> <h4>U矽塔 FHIR 智慧醫療數據服務中台</h4>
      </div>
    ),
    tracks: "  \n  TRACK#1 - 病人基本資料互通\n TRACK#7 - 緊急醫療救護",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "FHIR 智慧醫療數據服務中台為矽塔團隊自主研發，提供無須進行程式撰寫即可將任意醫療資料標準化為 FHIR 格式的轉換引擎，協助客戶在跨系統間以標準化格式安全、無痛互通醫療資料與影像／媒體資料，解決系統異質性造成的醫療資訊傳遞品質與效率問題，與傳統 API 介接相比可提升達 20 倍效率。\n",
  },

  {
    img: Doctor,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E4%BB%8B%E7%B4%B9/8.%E9%9C%8D%E6%81%A9%E5%AF%A6%E6%A5%AD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_DocterWatch.pdf",
      },
      {
        lname: "產品海報",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1/8.%E9%9C%8D%E6%81%A9%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1.pdf",
      },
    ],

    name: (
      <div>
        <h3>霍恩實業有限公司</h3> <h4>DocterWatch</h4>
      </div>
    ),
    tracks: "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據互通",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "1. DocterWatch搭配專屬APP可以使用雲端分析飲食前後的血糖趨勢變化，作為運動飲食/結石/減重等健康飲食管理，目前不提供血糖監測管理，免採血無創血糖演算法已計畫申請臨床試驗準備做精準標準化，未來要申請醫療器材提供糖友免採血無痛無恐懼真正的無創血糖紀錄，雲端分析也包含了心臟健康指數/血管彈性作為日常的健康紀錄。\n    2. 所提供的心律監測為連續監測(每秒上傳伺服器)即時監測心律變化，搭配跌倒監測及求救功能，當伺服器收到異常發報，則會發送異常通知給相關人。\n        3. 搭配連續心律監測、疲勞度、壓力指數、睡眠分析(REM)可以更清楚自己的全天健康狀態，作為更完整的健康紀錄。\n",
  },
  {
    img: iCare,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E4%BB%8B%E7%B4%B9/9.%E5%BE%8B%E6%B3%B0%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_iCare%20%E5%80%8B%E4%BA%BA%E5%81%A5%E5%BA%B7%E7%AE%A1%E7%90%86%E7%85%A7%E8%AD%B7%E5%B9%B3%E5%8F%B0.pdf",
      },
      {
        lname: "產品海報",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1/9.%E5%BE%8B%E6%B3%B0%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1.pdf",
      },
    ],

    name: (
      <div>
        <h3>律泰科技有限公司 </h3> <h4>iCare 個人健康管理照護平台</h4>
      </div>
    ),
    tracks: "  \n  TRACK#1 - 病人基本資料互通\n ",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "近年來因應居家照護的蓬勃發展，本公司開發iCare個人健康管理照護平台，讓使用者可以透過LINE APP，即時回報個人的健康狀況，並協助醫護人員追蹤居家健康，適時提供衛教資訊或相關照護內容！ 該系統導入FHIR標準，可以快速整合不同醫療數據，進而提供更全面的個人化精準照護服務！",
  },
  {
    img: Minicoon,
    linkName: [
      {
        lname: "產品介紹",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E4%BB%8B%E7%B4%B9/10.%E7%8E%B3%E5%BA%B7%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8_Minicoon%20%E6%95%B8%E4%BD%8D%E7%97%85%E7%90%86%E5%BD%B1%E5%83%8F%E8%88%87%E5%A0%B1%E5%91%8A%E5%84%B2%E5%AD%98%E8%88%87%E7%AE%A1%E7%90%86%E7%B3%BB%E7%B5%B1.pdf",
      },
      {
        lname: "產品海報",
        l: "https://mitw.dicom.org.tw/pdf/%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1/10.%E7%8E%B3%E5%BA%B7%E7%94%A2%E5%93%81%E6%B5%B7%E5%A0%B1.pdf",
      },
    ],

    name: (
      <div>
        <h3>玳康科技有限公司 </h3>{" "}
        <h4>Minicoon 數位病理影像與報告儲存與管理系統 </h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#4 - 影像、結構化影像報告、AI標記與影像檢查流程 \n TRACK#5 - 數位病理影像與結構化報告",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "1. DICOM技術整合服務: 提供產生各種標準DICOM物件，例如: 超音波、心電圖、五官鏡、二次截像、儀器工作清單、DICOM顯示、儲存與傳輸。\nDICOM去識別化等服務，可針對高度客製化，滿足使用者需求。\n     2. HL7 FHIR技術整合服務: 提供臨床資料轉換FHIR格式服務，包含CDA、臨床資料庫等。\n可針對客戶設計FHIR Profile, Implementation Guide,驗證等提供顧問與技術支援。\n          3. 產品: (1) minicoon: DICOM影像儲存與管理 (一般影像以及數位病理影像) (2) NHI Uploader: 診所醫療影像上傳健保署。\n     ",
  },
];

const HospitalInform = [
  {
    img: Hospital1,
    linkname: "產品介紹",
    link: "https://mitw.dicom.org.tw/pdf/11.%E4%BD%9B%E6%95%99%E6%85%88%E6%BF%9F%E9%86%AB%E7%99%82%E8%B2%A1%E5%9C%98%E6%B3%95%E4%BA%BA%E8%8A%B1%E8%93%AE%E6%85%88%E6%BF%9F%E9%86%AB%E9%99%A2_%E5%81%A5%E5%BA%B7%E7%A6%8F%E7%A5%89%E7%A7%91%E6%8A%80%E6%95%B4%E5%90%88%E7%85%A7%E8%AD%B7%E7%A4%BA%E7%AF%84%E5%A0%B4%E5%9F%9F%E6%8E%A8%E5%8B%95%E8%A8%88%E7%95%AB.pdf",
    name: (
      <div>
        <h3>佛教慈濟醫療財團法人花蓮慈濟醫院</h3>{" "}
        <h4>健康福祉科技整合照護示範場域推動計畫</h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#2 - 生理量測數據互通 \n TRACK#3 - 用藥及疫苗接種紀錄",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "本計畫以花蓮縣秀林鄉、吉安鄉、鳳林鎮、光復、萬榮、卓溪鄉及台東縣海端鄉、池上鄉、延平鄉為健康福祉科技整合照護之示範推動地區，透過對示範場域健康及醫療照護現況與需求進行全面調查與分析，以衛生所醫療資訊系統為基礎，整合慈濟醫院醫療資訊系統的門急診、手術住院、慢性病及藥物資訊，盤整示範場域目前之系統使用狀態，並以家庭歸戶進行跨系統介接，建置家庭健康戶口名簿，開發「健康福祉科技整合照護平台」。\n 平台包括以鄉鎮為範圍的：\n1.家戶歸戶作業\n2.預防保健(四癌篩檢、X光、預防注射)名冊匯入及查詢列印\n3.慢性病(糖尿病、高血壓、高血脂、肝病、胃病、COPD)的資料匯入及個案管理\n4.長照據點(社區關懷據點及部落文化健康站)個案管理及生理量測系統\n5.居家端個案收案及設備綁定管理\n6.健康福祉FHIR跨區域互通系統\n7.健康福祉視覺化地理資訊系統\n8.健康福祉Line Bot主動推播及整合查詢系統。\n 另透過 FHIR Gateway介接：\n1.健康福祉科技整合照護平台\n2.各家雲端生理量測平台\n 3.醫院及衛生所HIS\n4.縣政府社會處早療及獨居長者個案管理系統\n5.醫院罕病兒童個案管理系統\n6.急性後期及長照轉介。\n計畫應用遠距資通訊科技發展適合偏鄉的遠距照護及醫療服務模式。\n",
  },
];

const GovernmentInform = [
  {
    img: G1,
    linkname: "產品介紹",
    link: "https://mitw.dicom.org.tw/pdf/1.%E5%9C%8B%E7%AB%8B%E6%88%90%E5%8A%9F%E5%A4%A7%E5%AD%B8%20-%20%E6%99%BA%E6%85%A7%E5%9E%8B%E5%AA%92%E9%AB%94%E8%88%87%E7%94%9F%E6%B4%BB%E5%AF%A6%E9%A9%97%E5%AE%A4_ALOVAS%20%E6%95%B8%E4%BD%8D%E7%97%85%E7%90%86%E5%88%87%E7%89%87%E5%BD%B1%E5%83%8F%E5%88%86%E6%9E%90%E7%B3%BB%E7%B5%B1.pdf",
    name: (
      <div>
        <h3>國立成功大學 - 智慧型媒體與生活實驗室</h3>{" "}
        <h4>ALOVAS 數位病理切片影像分析系統</h4>
      </div>
    ),
    tracks:
      "   \n  TRACK#1 - 病人基本資料互通\n TRACK#4 - DICOMWeb查詢與調閱 \n TRACK#5 - DICOM數位全幅病理顯微鏡影像查詢與調閱",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "以前病理醫師在做病理診斷的時候，常常需要找一些很小的病灶，以及對疾病嚴重度做分級。\n 此程序常常需要耗費許多的眼力、腦力、以及時間。\n ALOVAS 數位病理切片影像分析系統利用影像處理的方式與AI人工智慧深度學習與分析，可以幫助病理醫師尋找一些小的病灶，避免遺漏和節省時間。\n 另外對於疾病的嚴重度，也可以幫助病理醫師做一些客觀且準確的分級，以期達到精準醫療。\n \n 本系統為跨平台的系統，醫師可以利用平板或是電腦，將病理影像資料傳送到本系統，目標如下： \n 1. 病理影像分析 \n 2. 腫瘤病理分級 \n 3. 提供細胞相關參數 (核質比、細胞大小、密度分布…等) \n 4. 提供影像分析結果瀏覽 \n 5. 提供醫師影像標註功能 ",
  },
  {
    img: G2,
    linkname: "產品介紹",
    link: "https://mitw.dicom.org.tw/pdf/17.CIMS%E5%9C%98%E9%9A%8A_%E8%87%A8%E5%BA%8A%E7%A0%94%E7%A9%B6%E8%B3%87%E8%A8%8A%E7%B3%BB%E7%B5%B1(CSIS)%E8%88%87CSIS-APP.pdf",
    name: (
      <div>
        <h3>CIMS服務團隊</h3> <h4>臨床研究資訊系統(CSIS)與CSIS-APP</h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#3 - 用藥及疫苗接種紀錄 \n TRACK#6 - 基因定序標記",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "臨床研究資訊系統(Clinical Study Information System, CSIS)是一個協助收集臨床研究，或臨床試驗數據與的電子系統。\n 系統具備強大的設計功能，可以設計一般的國際標準問卷，或客製化的電子化個案報告表(eCRF)。\n 若由開放電子化個案報告表(eCRF)資料庫所收集的上萬張表單中，挑選eCRF並存為符合ODM之格式，即可直接上傳到使用，免去自行設計的時間。\n 此外，CSIS亦可設計符合CDISC標準的eCRF，並自動產生註解的個案報告表 (aCRF)以節省人工。\n 試驗計畫(study plan)中可列出受試者每次來訪所需的表單，並以儀表版呈現表單填寫的狀態，方便了解收案進度。\n",
  },
  {
    img: G2,
    linkname: "產品介紹",
    link: "https://mitw.dicom.org.tw/pdf/18.CIMS%E6%9C%8D%E5%8B%99%E5%9C%98%E9%9A%8A_%E8%87%A8%E5%BA%8A%E7%A0%94%E7%A9%B6%E8%B3%87%E8%A8%8A%E7%B3%BB%E7%B5%B1%20(Clinical%20Study%20Information%20System,%20CSIS).pdf",
    name: (
      <div>
        <h3>CIMS服務團隊</h3>{" "}
        <h4>臨床研究資訊系統 (Clinical Study Information System, CSIS)</h4>
      </div>
    ),
    tracks:
      "  \n  TRACK#1 - 病人基本資料互通\n TRACK#3 - 用藥及疫苗接種紀錄 \n TRACK#6 - 基因定序標記",
    trackstitle: "\nTRACK#4\n   TRACK#5\n   TRACK#7",
    tracksname:
      " - DICOMWeb查詢與調閱 \n - DICOM數位全幅病理顯微鏡\n\r\r影像查詢與調閱\n   - 影像檢查流程",
    introduce:
      "在基因體醫學、生技醫藥等國家型計畫的支援下，國立陽明大學由美國國家衛生院導入臨床試驗與管理系統，給計畫及醫院的人體試驗委員會、臨床試驗中心、人體生物資料庫等單位使用。\n 該系統可載入符合CDISC的傳輸標準(ODM)之電子表單，因此可使用上萬種開放(open source)的表單。\n此外也提供問題庫，方便製作符合CDISC標準的電子表單。\n 系統可用網頁或APP方式在行動裝置上填寫問卷，收集患者回饋結果(ePRO)等實境數據(RWD)。\n 系統可使用API界接血壓計等物聯網(IoT)設備、或與核心實驗室、醫院系統等交換數據，適合廠商管理臨床試驗使用。\n",
  },
];

const CrosssystemInform = [
  {
    title: "DICOM互通情境",
    img: [<img src={c1} Width={"100%"} />, <img src={c2} Width={"100%"} />],
  },
  {
    title: "FHIR互通情境",
    img: [<img src={f1} Width={"100%"} />, <img src={f2} Width={"100%"} />],
  },
];
export {
  ListTitle,
  List,
  OpenSourceInform,
  IndustryInform,
  HospitalInform,
  GovernmentInform,
  CrosssystemInform,
};
