import T1_1 from "../../assets/T1_1.png";
import T1_2 from "../../assets/T1_2.png";
import T1_3 from "../../assets/T1_3.png";
import T1_4 from "../../assets/T1_4.png";
import Ts1 from "../../assets/Ts1.png";
import logo from "../../assets/Logo.png";
export const TraksTabInform = [
  {
    Id: "1",
    TabTitle: "01",
    ContentTitle: "病人基本資料",
    Img: [{ img: T1_1 }, { img: T1_2 }, { img: T1_3 }, { img: T1_4 }],
    List: [
      {
        id: "1",
        Sc: "Scenario 1 病人身分確認用",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "Scenario 2 聯繫病人用 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "Scenario 3：院外系統 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
    Sc1: (
      <div>
        <img src={logo} />
      </div>
    ),
  },
  {
    Id: "2",
    TabTitle: "02",
    ContentTitle: "生理量測資訊",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "Scenario 1 病人身分確認用",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "Scenario 2 聯繫病人用 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "Scenario 3：院外系統 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
    Sc1: (
      <div>
        <img src={logo} />
      </div>
    ),
  },
  {
    Id: "3",
    TabTitle: "03",
    ContentTitle: "處方用藥及文件打包",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "Scenario 1 病人身分確認用",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "Scenario 2 聯繫病人用 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "Scenario 3：院外系統 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
    Sc1: (
      <div>
        <img src={logo} />
      </div>
    ),
  },
  {
    Id: "4",
    TabTitle: "04",
    ContentTitle: "醫學影像與病理",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "簡介 (Summary)",
        content: (
          <>
            {" "}
            <h3>影像與標記互通 </h3>
            <p>
              測試醫學影像以及數位病理影像儲存管理主機 (Source)以及顯示端
              (Consumer)能依照DICOM或DICOMweb標準查詢與調閱DICOM影像以及能正確顯示影像以及標記，已達到影像顯示一致性(Display
              Consistency)。影像包含:
              (1)一般醫學影像如:X光、磁振造影、電腦斷層、超音波等、以及(2)超大尺寸數位病理影像(Whole
              Slide
              Image)。在影像標記註解部分，透過影像與標記標準化，用來解決影像與標記異質性系統之互通性。標註格式可能是影像分割形式的點陣圖型、透過座標定義輪廓之向量圖型等，本賽道主要針對註解標示影像的關注區(regions
              of interest,
              ROIs)的標準化進行驗證。亦希望參加者能提供簡單的標記，作為標準化影像的示範案例，提供異質性系統互通，作為加速影像標準化。
            </p>
            <h3>影像報告與影像整合 </h3>
            <p>
              本工作小組提出一個基礎文字(Basic
              Text)的影像報告格式，結合此報告有關的資訊，包含:
              病患、檢查資訊、影像連結等，以此來產生一個可交換的影像報告格式，作為電子病歷交換需求。本賽道將以HL7
              FHIR為核心架構設計不同的Profile，並以FHIR
              IG方式呈現。本賽以臺灣核心實作指引 (TW core
              IG)為基礎向上設計，透過HL7 FHIR格式設計醫學影像(包含content:
              放射影像以及數位病理影像)之影像索以及影像報告(包含:
              放射影像以及數位病理影像)並上傳至影像報告儲存中心 (Report
              Repository)，結合影像報告與DICOM影像之整合情境，建構電子病歷交換中心(EEC)之跨院調閱單張「醫療影像及報告」設計案例，作為FHIR以及DICOM整合的使用情境。{" "}
            </p>
            <h3>影像檢查流程 </h3>{" "}
            <p>
              提供場域針對DICOM相關的醫療儀器與HIS、PACS互通之應用驗證。例如:
              國內廠商自行研發超音波儀器，但苦於現有PACS與HIS廠商進行驗證，每次需要都需要在個別的醫院進行介接測試，本情境提供一個良好的技術交流場域，讓國內外多家廠商聯合測試，已證明產品符合國際醫學資訊標準規範。聯測驗證標準比照國際IHE聯測規格，提供測試IHE
              SWF(Scheduled Worflow)規範，讓國內業者能依據IHE
              SWF實作產品作為開拓國際市場前的產品標準化驗證。
            </p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "效益 (Benefits) ",
        content: (
          <>
            <p>
              隨著人工智慧與機器學習(AI/ML)的快速發展，需要加快標準化的醫學影像分析工作流程的軟體開發流程(SDLC)，以及採取更加敏捷的開發方法。參加單位可使用實際或是產品雛型參加此賽道，由於這需要大量的前期開發工作，因此參加者需要具備較高的技術門檻。這也鼓勵參加單位早期投資，希望此標準足夠成熟，進而早期布局，以證明投資的合理性。早日切入醫學影像市場。為了簡化標準化開發流程並鼓勵產業早期實施和測試。透過聯測提供實證場域，鼓勵醫學影像分析專家、軟體工程師、開源工作者參加，並投入開發開源試驗，建立提供醫學影像標準化系統的產品概念驗證(Proof
              of Concept)。
              透過自動化排程檢查確保特定數據僅輸入一次來防止手動數據輸入錯誤，用來
              <span style={{ fontWeight: "bold", margin: 0 }}>
                減少錯誤並增加醫護人員效率
              </span>
              ，且自動化排程可由統一的檢查單號(申請序號)，可作為檢查流程中的追蹤與識別目前檢查的狀態，減少操作人員在跨系統之間的溝通成本的時間，且能減少病人丟失、或是檢查漏失等情況發生，來
              <span style={{ fontWeight: "bold" }}>提高檢查量。</span>
            </p>
            <p>
              透過導入標準作業流程以及病歷格式導入國際標準，避免業者與醫院資訊系統進行系統整合時，採用自訂的界接規格，減少自訂規格的時間與成本以及減少測試的時間以及因為跨系統之間的整合產生的費用，例如:維護費、界接費、系統修改等。透過此賽道的驗測，提供一個良好的實證場域，讓業者在產品與系統導入到醫院之前，能有效地域同業進行實際系統驗證，可大幅
              <span style={{ fontWeight: "bold" }}>降低部屬的成本與時間。</span>{" "}
            </p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "詳細資訊(Details) ",
        content: (
          <>
            <ul style={{ listStyleType: "decimal", margin: 0 }}>
              本賽道的情境描述如下:
              <li>
                <span style={{ fontWeight: "bold" }}>影像與標記互通:</span>
                目的在於驗證DICOM格式之醫學影像以及數位病理影像以及人工智慧標記與註解之呈現，利用DICOM與FHIR的傳輸協定進行跨系統間的查詢與調閱，並能夠在不同的系統重呈現影像與標記註解顯示的一致性。影像的標記註解支援ICOM以及FHIR
                SVG格式，使用者可透過自選的格式來驗證影像與標記註解的互通性。
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>影像報告與影像整合:</span>
                提供一個影像與報告交換情境，從製作FHIR放射影像索引及放射報告並上傳至影像報告儲存中心
                (Report Repository)
                結合影像報告與DICOM影像整合情境，以FHIR以及DICOMweb機制作為傳輸協定。採用以臺灣核心實作指引
                (TW core
                IG)為基礎向上設計，設計成電子病歷交換中心(EEC)之跨院調閱單張
                「醫療影像及報告」 設計案例。
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>影像檢查流程:</span>
                影像檢查流程情境為提供場域針對DICOM相關的醫療儀器與HIS、PACS互通之應用驗證。
                例:
                國內廠商自行研發超音波儀器，但苦於現有PACS與HIS廠商進行驗證，每次需要都需要在個別的醫院進行介接測試。此情境提供提供一個良好的實證場域，讓國內外多家廠商聯合測試，已證明產品符合國際醫學資訊標準規範。此項目將與影像與AI結果結合，提供HIS、儀器製造商以及PACS互通之應用驗證。
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "4",
        Sc: "涉及系統(Systems Affected)",
        content: (
          <>
            <p> 本規範涉及涉及的系统有：</p>
            <ul style={{ margin: 0 }}>
              <li style={{ fontWeight: "bold" }}>
                醫院資訊系統(Hosptial Information System, HIS)
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                針對HIS開立影像檢查單，以HL7 v2訊息(HL7
                message)標準提供造影工作清單(Modality
                Worklist)上的造影檢查單之新增、刪除、修改等功能。影像調閱至門診或是HIS系統，以DICOMweb方式調閱影像並呈現在HIS系統。
              </li>
              <li style={{ fontWeight: "bold" }}>
                放射科資訊系統(Radiology Information Systm, RIS)
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                用於放射科檢查流程管理，包含: 造影檢查排程管理(DICOM Modality
                Performed Procedure Step
                (MPPS)、造影工作清單(Worklist)主機、影像傳輸確認機制(Storage
                Commitment)、{" "}
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                針對PACS產品包含: Modality Worklist, Image Manager, Image
                Archive, Image
                Display等功能進行驗證，與醫療儀器廠商針對影像上傳，例如:
                C-STORE, STOW, 等方式進行介接測試驗證。
              </li>
              <li style={{ fontWeight: "bold" }}>
                報告儲存系統(Report Repository)
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                用於儲存與管理影像報告的資料庫，支援標準化FHIR
                DiagnosticReport以及ImagingStudy查詢與調閱。
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                亦可支援FHIR格式之影像發現以及影像標記註。
              </li>
              <li style={{ fontWeight: "bold" }}>
                報告顯示/編輯系統(Reporting System)
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                用於顯示以及編影像報告，可支援標準化FHIR
                診斷報告(DiagnosticReport)以及影像索引(ImagingStudy)的查詢與調閱以及上傳，影像整合報告部分，可透過影像索引(ImagingStudy)組合影像對應的WADO連結，並可向影像儲存系統以DICOM/DICOMweb的方式調閱影像以及影像的標記註解至影像顯示系統顯示。
                影像發現以及影像標記註解亦可支援FHIR格式儲存，可從報告儲存系統中調閱影像發現以及影像標記並顯示在影像顯示系統中。
              </li>
              <li style={{ fontWeight: "bold" }}>
                影像儲存系統(Image Manager/Archive, IM)
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                {" "}
                此系統也稱為PACS
                Server，用於符合DICOM標準格式之影像、波型、結構化報告、標記註解等類型的儲存與管理，並支援標準化DICOM、DICOMweb查詢與調閱協定。DICOM協定常用支援為C-STORE,
                C-FIND, C-MOVE,
                C-GET等；DICOMweb支援QIDO-RS、WADO-RS/WAOD-URI、STOW-RS等。
              </li>
              <li style={{ fontWeight: "bold" }}>
                (數位病理)影像顯示系統(Image Display, ID)
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                {" "}
                提供DICOM數位病理影像或一般醫學影像之顯示、影像處理，標記註解等功能，此系統通常結合影像報告系統，影像從影像儲存系統調閱後，用來提供病理科醫師或是臨床醫師查看影像以及對應報告。
              </li>
              <li style={{ fontWeight: "bold" }}>
                證據產生系統(Evidence Creator, EC)
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                在醫學資訊整合系統中，產生已完成檢查的相關影像、關鍵影像(key
                Image
                Noate)、標記註解、結構化報告等，並可將結果傳送至影像儲存系統。此系統大多由輔助決策系統或是人工智慧模型產生標準化之DICOM
                AI結果(AI Resutls)，例如: GSPS, RTSS,
                SEG等，上傳至影像儲存系統，並提供影像檢視器之顯示。其驗證包含:
                格式驗證以及傳輸協定驗證(請參考 醫療儀器設備說明)
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                {" "}
                影像標記註解亦可支援FHIR格式儲存，可將結果以FHIR方式上傳報告儲存系統中。
              </li>
              <li style={{ fontWeight: "bold" }}>
                醫療儀器設備(Modality, MOD)
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                參加對象以國內外醫療儀器製造商在台灣銷售為主，包含:
                超音波、心電圖、X光機、內視鏡等。主要驗證儀器是否符合DICOM以下規格
              </li>
              <li style={{ marginLeft: "30px" }}>
                影像格式驗證: 針對儀器製造商提供之符合性宣稱(Conformance
                Statement)，針對儀器端產生之DICOM物件進行格式驗證，以符合DICOM
                PS 3.3 SOP Class
                UID定義的格式規範。例如:產生的超音波影像是否符合DICOM格式、具備必要欄位、儲存的數值符合欄位規範、OID與UID之正確性等。
              </li>
              <li style={{ marginLeft: "30px" }}>
                {" "}
                傳輸協定驗證: 針對儀器製造商提供之符合性宣稱(Conformance
                Statement)，驗證傳輸功能是否符合DICOM規範，例如: C-STORE,
                Storage Commitment, MPPS, C-FIND-MWL等功能。
              </li>
            </ul>
            <p>本工作小組制定的使用情境依序說明如下:</p>
            <h5 style={{ fontWeight: "bold" }}>情境1:影像與標記互通</h5>
            <ul style={{ margin: 0 }}>
              {/*  */}

              <li>
                測試一般影像以及病理影像儲存管理主機(Source)以及顯示端(Consumer)能依照DICOMweb標準查詢與調閱。能夠正確顯示影像以及標記註解，根據測試腳本完成基本功能的操作(移動到特定位置、縮放、切換不同Layer層等)，確保相同影像在不同系統中能呈顯一致(Dispaly
                Consistency)。
              </li>
              <li>
                使用DICOM/DICOMweb階層式查詢方式查詢影像儲存系統，依照DICOM階層式架構回傳結果。可選擇使用DICOM(C-STORE)或是使用WADO-URI或WADO-RS調閱影像，並顯示結果。
              </li>
              <li>
                影像標記與註解格式可能是影像分割形式的點陣圖型、透過座標定義輪廓之向量圖型等，本情境主要針對註解標示影像的關注區(regions
                of interest,
                ROIs)的標準化進行驗證。亦希望參加者能提供簡單的標記，作為標準化醫學影像以及病理影像的示範案例，提供異質性系統互通。
              </li>
              <li>
                影像標記註解部分，DICOM支援標記規格，例如: GSPS, RTSS,
                SEG等。FHIR標記註解部分支援SVG格式。
              </li>
              <li>
                病理影像部分能夠支援顯示DICOM Supplement
                145定義的超大尺寸數位病理影像(Whole Slide Image,
                WSI)，並能正確顯示。
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                使用DICOMweb階層式查詢方式查詢DICOMweb主機，依照DICOM階層式架構回傳結果。使用WADO-URI或WADO-RS調閱影像。
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                產生DICOM數位病理影像並透過DICOM標準協定上傳至PACS Servers
              </li>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                產生TID 1500結構化報告或是DIOCM ANN (DICOM Supplement 222: Whole
                Slide Microscopy Bulk Annotations Storage SOP
                Class格式作為標記註解格式
              </li>
              <li style={{ fontWeight: "bold" }}>
                情境1-1: 醫學影像及DICOM標記呈現
              </li>
              <p>
                使用DICOM/DICOMweb階層式查詢方式查詢影像儲存系統，並將回傳影像以及標記註解，且能正確顯示。根據測試腳本完成基本功能的操作(移動到特定位置、縮放、切換不同Layer層等)，確保相同影像在不同系統中能呈顯一致(Dispaly
                Consistency)。
              </p>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                使用資料:
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  醫學影像(DICOM)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  影像標記與註解(FHIR Observation)
                </li>
              </li>
              <li style={{ fontWeight: "bold" }}>
                情境1-2: 醫學影像及FHIR標記呈現
              </li>
              <p>
                使用DICOM/DICOMweb階層式查詢方式查詢影像儲存系統，並將回傳影像，且能從FHIR影像報告儲存中心
                (Report
                Repository)調閱FHIR標記且能正確顯示。根據測試腳本完成基本功能的操作(移動到特定位置、縮放、切換不同Layer層等)，確保相同影像在不同系統中能呈顯一致(Dispaly
                Consistency)。
              </p>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                使用資料:
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  醫學影像(DICOM)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  影像標記與註解(FHIR Observation)
                </li>
              </li>
            </ul>
            {/*  */}
            <h5 style={{ fontWeight: "bold" }}>情境2:報告及影像整合</h5>
            <p>
              製作FHIR放射影像索引及放射報告並上傳至影像報告儲存中心 (Report
              Repository) 結合影像報告與DICOM影像整合情境，以臺灣核心實作指引
              (TW core
              IG)為基礎向上設計，成為電子病歷交換中心(EEC)之跨院調閱單張「醫療影像及報告」設計案例。
            </p>
            <ul style={{ margin: 0 }}>
              <li>
                針對影像報告以及對應的DICOM影像、DICOM標記註解解進行存取調閱、並能正確顯示。
              </li>
              <li>
                產生FHIR
                診斷報告(DiagnosticReport)以及影像索引(ImagingStudy)並以FHIR方式上傳至報告儲存系統。
              </li>
              <li>
                使用FHIR方式用於查尋與調閱診斷報告(DiagnosticReport)以及影像索引(ImagingStudy)，並能整合報告對應的影像，且適當使用影像檢視器開啟影像與標記。
              </li>
              <li style={{ fontWeight: "bold" }}>
                情境2-1: 醫學影像報告及影像整合
              </li>
              <p>
                製作FHIR放射影像索引及放射報告並上傳至影像報告儲存中心 (Report
                Repository) 結合影像報告與DICOM影像整合情境
              </p>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                使用資料:
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  放射影像報告 (FHIR DiagnosticReport)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  影像索引(FHIR ImagingStudy)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  醫學影像(DICOM)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  影像標記與註解(DICOM SR, GSPS, RTSS, SEG, etc)
                </li>
              </li>
              <li style={{ fontWeight: "bold" }}>
                情境2-2: 數位病理影像報告及影像整合
              </li>
              <p>
                製作FHIR病理影像索引及病理報告並上傳至影像報告儲存中心 (Report
                Repository) 結合影像報告與DICOM WSI影像整合情境
              </p>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                使用資料:
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  病理影像報告 (FHIR DiagnosticReport)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  影像索引(FHIR ImagingStudy)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  WSI影像(DICOM)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  WSI影像標記與註解(DICOM ANN, DICOM SR)
                </li>
              </li>
              <li style={{ fontWeight: "bold" }}>
                情境2-3: 影像、標記與影像發現整合
              </li>
              <p>
                製作FHIR影像索引及影像報告並上傳至影像報告儲存中心 (Report
                Repository) 結合影像報告與影像發現與標記註解整合情境
              </p>
              <li style={{ listStyleType: "circle", marginLeft: "15px" }}>
                使用資料:
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  病理影像報告 (FHIR DiagnosticReport)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  影像索引(FHIR ImagingStudy)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  醫學影像(DICOM)
                </li>
                <li style={{ listStyleType: "disc", marginLeft: "15px" }}>
                  影像發現與標記(FHIR Observation)
                </li>
              </li>
            </ul>

            <p>
              下圖為影像報告的Profile設計結構，包含: (1)
              放射影像報告/病理影像報告 (FHIR
              DiagnosticReport)、(2)影像索引(FHIR ImagingStudy)。
            </p>
            <p style={{ fontWeight: "bold" }}>
              放射影像報告/病理影像報告 (FHIR DiagnosticReport)設計結構示意圖
            </p>
            <img />
            <p style={{ fontWeight: "bold" }}>
              影像索引(FHIR ImagingStudy)設計結構示意圖
            </p>
            <img />
            <li>
              {" "}
              <a
                target="_blank"
                href="https://build.fhir.org/imagingstudy-mappings.html"
              >
                DICOM TAG與FHIR對照表
              </a>
            </li>
            <h5 style={{ fontWeight: "bold" }}>情境1與情境2角色與交易關係圖</h5>
            <img />
            <div>
              <h5 style={{ fontWeight: "bold" }}>情境3:影像檢查流程(SWF)</h5>
              <span>
                此情境為建立一個醫學影像的造影檢查流程，此情境完全依照
              </span>
              <a
                target="_blank"
                href="https://wiki.ihe.net/index.php/Scheduled_Workflow"
              >
                IHE Scheduled Workflow Profile
              </a>
              <span>的聯測規範提供參加者驗證系統與產品。</span>
              <ul style={{ margin: 0, listStyleType: "disc" }}>
                <li>ADT</li>
                <li>Order Palcer</li>
                <li>DDS/Order Filler</li>
                <li>Acquisition Modality</li>
                <li>Image Manager/Image Archive</li>
                <li>Image Display</li>
                <li>Performed Procedure Step Manage</li>
                <li>Evidence Creator</li>
              </ul>
              <p>
                備註:
                此情境採用互通性聯測機制，同一情境測試項目需滿足IHE聯測規範，即需三家不同公司或是機構進行交互驗證方可通過聯測。
              </p>
            </div>
          </>
        ),
      },
      {
        id: "5",
        Sc: "規格(Specification)",
        content: (
          <>
            <p>涉及到的角色 (Actors)以及交易(Transactions)，說明如下:</p>
            <h4 style={{ fontWeight: "bold" }}>角色(Actors)</h4>
            <p>1.影像、結構化影像報告(IMAGE)角色整理</p>
            <table border="1" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>
                    <strong>編號</strong>
                  </th>
                  <th>
                    <strong>名稱</strong>
                  </th>
                  <th>
                    <strong>描述</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RAD-18</td>
                  <td>Creator Images Stored</td>
                  <td>產生影像儲存至影像儲存庫</td>
                </tr>
                <tr>
                  <td>RAD-16</td>
                  <td>Retrieves Images</td>
                  <td>從影像檢索資料提供者與影像儲存庫查詢與調閱影像</td>
                </tr>
                <tr>
                  <td>RAD-107</td>
                  <td>WADO-RS Retrieve</td>
                  <td>使用WADO-RS調閱DICOM SOP實例</td>
                </tr>
                <tr>
                  <td>MITW-29</td>
                  <td>ImagingStudy Create</td>
                  <td>新增影像索引</td>
                </tr>
                <tr>
                  <td>MITW-30</td>
                  <td>ImagingStudy Query/Retrieve</td>
                  <td>查詢與調閱影像索引</td>
                </tr>
                <tr>
                  <td>MITW-31</td>
                  <td>Image Report Create</td>
                  <td>新增影像報告</td>
                </tr>
                <tr>
                  <td>MITW-32</td>
                  <td>Image Report Query/Retrieve</td>
                  <td>查詢與調閱影像報告</td>
                </tr>
                <tr>
                  <td>MITW-35</td>
                  <td>Observation-Annotation Create</td>
                  <td>新增影像標記(FHIR)</td>
                </tr>
                <tr>
                  <td>MITW-36</td>
                  <td>Observation-annotation Query/Retrieve</td>
                  <td>查詢與調閱影像標記(FHIR)</td>
                </tr>
              </tbody>
            </table>
            <p>2.數位病理影像存取(PATH)角色整理</p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <strong>Keyword</strong>
                  </th>
                  <th>
                    <strong>名稱</strong>
                  </th>
                  <th>
                    <strong>描述</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>WSI_ANN_CREATOR</td>
                  <td>WSI Annotation Creator</td>
                  <td>新增影像標記角色</td>
                </tr>
                <tr>
                  <td>WSI_CONSUMER</td>
                  <td>WSI Consumer</td>
                  <td>查詢與調閱影像角色</td>
                </tr>
                <tr>
                  <td>WSI_ANN_CONSUMER</td>
                  <td>WSI ANN Consumer</td>
                  <td>查詢與調閱影像標記(DICOM ANN)角色</td>
                </tr>
                <tr>
                  <td>WSI_REPOSITORY</td>
                  <td>WSI Repository</td>
                  <td>影像與標記儲存庫</td>
                </tr>
              </tbody>
            </table>
            <h4 style={{ fontWeight: "bold" }}>交易(Transactions)</h4>
            <p>1.影像、結構化影像報告(IMAGE)交易整理</p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <strong>編號</strong>
                  </th>
                  <th>
                    <strong>名稱</strong>
                  </th>
                  <th>
                    <strong>描述</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RAD-18</td>
                  <td>Creator Images Stored</td>
                  <td>產生影像儲存至影像儲存庫</td>
                </tr>
                <tr>
                  <td>RAD-16</td>
                  <td>Retrieves Images</td>
                  <td>從影像檢索資料提供者與影像儲存庫查詢與調閱影像</td>
                </tr>
                <tr>
                  <td>RAD-107</td>
                  <td>WADO-RS Retrieve</td>
                  <td>使用WADO-RS調閱DICOM SOP實例</td>
                </tr>
                <tr>
                  <td>MITW-29</td>
                  <td>ImagingStudy Create</td>
                  <td>新增影像索引</td>
                </tr>
                <tr>
                  <td>MITW-30</td>
                  <td>ImagingStudy Query/Retrieve</td>
                  <td>查詢與調閱影像索引</td>
                </tr>
                <tr>
                  <td>MITW-31</td>
                  <td>Image Report Create</td>
                  <td>新增影像報告</td>
                </tr>
                <tr>
                  <td>MITW-32</td>
                  <td>Image Report Query/Retrieve</td>
                  <td>查詢與調閱影像報告</td>
                </tr>
                <tr>
                  <td>MITW-35</td>
                  <td>Observation-Annotation Create</td>
                  <td>新增影像標記(FHIR)</td>
                </tr>
                <tr>
                  <td>MITW-36</td>
                  <td>Observation-annotation Query/Retrieve</td>
                  <td>查詢與調閱影像標記(FHIR)</td>
                </tr>
              </tbody>
            </table>
            <p>2.影像、結構化影像報告(IMAGE)交易整理</p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <strong>編號</strong>
                  </th>
                  <th>
                    <strong>名稱</strong>
                  </th>
                  <th>
                    <strong>描述</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RAD-129</td>
                  <td>QIDO-RS Query</td>
                  <td>使用QIDO-RS查詢DICOM SOP實例</td>
                </tr>
                <tr>
                  <td>RAD-107</td>
                  <td>WADO-RS Retrieve</td>
                  <td>使用WADO-RS調閱DICOM SOP實例</td>
                </tr>
                <tr>
                  <td>RAD-108</td>
                  <td>Store Instances over the Web</td>
                  <td>使用STOW-RS傳輸DICOM SOP實例</td>
                </tr>
              </tbody>
            </table>
            <h4 style={{ fontWeight: "bold" }}>角色與交易關係圖</h4>
            <ul>
              <li>
                醫學影像與DICOM標記互通之角色與交易關係圖
                <img />
              </li>
              <li>
                影像、結構化影像報告(IMAGE)、FHIR標記之角色與交易關係圖
                <img />
              </li>
              <li>
                數位病理影像存取(PATH)之角色與交易關係圖 <img />
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "6",
        Sc: "其他(See Also)",
        content: (
          <>
            <ul>
              <li>
                相關標準
                <ul>
                  <li>
                    <a href="https://twcore.mohw.gov.tw/ig/">
                      臺灣核心實作指引
                    </a>
                  </li>
                  <li>
                    <a href="https://wiki.ihe.net/index.php/Scheduled_Workflow">
                      IHE Scheduled Workflow Profle
                    </a>
                  </li>
                  <li>
                    <a href="https://wiki.ihe.net/index.php/Web-based_Image_Access">
                      IHE Web-based Image Access Profle
                    </a>
                  </li>
                  <li>
                    <a href="https://wiki.ihe.net/index.php/Digital_Pathology_Workflow_-_Image_Acquisition">
                      Digital Pathology Workflow - Image Acquisition
                    </a>
                  </li>
                  <li>
                    <a href="https://mitw.dicom.org.tw/IG/NSCLC/Imageprofiles.html">
                      醫療影像及報告實作指引
                    </a>
                  </li>
                </ul>
              </li>
              <li>常見問題</li>
              <li>
                參考文章
                <ul>
                  <li>
                    <a href="https://news.gbimonthly.com/tw/celebrity/show.php?num=37353">
                      善用健保制定資料儲存標準，建置差異化影像資料庫
                    </a>
                  </li>
                </ul>
              </li>
              <li>參考網址</li>
            </ul>
          </>
        ),
      },
    ],
    Sc1: (
      <div>
        <img src={logo} />
      </div>
    ),
  },
  {
    Id: "5",
    TabTitle: "05",
    ContentTitle: "偕同照護",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "Scenario 1 病人身分確認用",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "Scenario 2 聯繫病人用 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "Scenario 3：院外系統 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
    Sc1: (
      <div>
        <img src={logo} />
      </div>
    ),
  },
  {
    Id: "6",
    TabTitle: "06",
    ContentTitle: "基因體標記",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "Scenario 1 病人身分確認用",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "Scenario 2 聯繫病人用 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "Scenario 3：院外系統 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
    Sc1: (
      <div>
        <img src={logo} />
      </div>
    ),
  },
  {
    Id: "7",
    TabTitle: "07",
    ContentTitle: "緊急醫療救護",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "Scenario 1 病人身分確認用",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "Scenario 2 聯繫病人用 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "Scenario 3：院外系統 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
    Sc1: (
      <div>
        <img src={logo} />
      </div>
    ),
  },
  {
    Id: "8",
    TabTitle: "08",
    ContentTitle: "醫療保險",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "Scenario 1 病人身分確認用",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "Scenario 2 聯繫病人用 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "Scenario 3：院外系統 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
    Sc1: (
      <div>
        <img src={logo} />
      </div>
    ),
  },
  {
    Id: "9",
    TabTitle: "09",
    ContentTitle: "遠距醫療",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "Scenario 1 病人身分確認用",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "Scenario 2 聯繫病人用 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "Scenario 3：院外系統 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
    Sc1: (
      <div>
        <img src={logo} />
      </div>
    ),
  },
  {
    Id: "10",
    TabTitle: "10",
    ContentTitle: "癌症登記",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "Scenario 1 病人身分確認用",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "Scenario 2 聯繫病人用 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "Scenario 3：院外系統 ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
    Sc1: (
      <div>
        <img src={logo} />
      </div>
    ),
  },
];

const Scenarios = [
  {
    Id: "1",
    S1: (
      <>
        <img src={Ts1} />
        <h4>Scenario 1 病人身分確認用</h4>
        <ul>
          <li>
            執行各項護理技術、檢查、治療、手術等醫療處置前對病人做身分確認
          </li>
          <li>
            例如：在診療前，醫護人員請病人提供基本資訊如姓名、生日用以核對病人身分是否正確
          </li>
        </ul>
      </>
    ),
    S2: (
      <>
        <h4>Scenario 2 聯繫病人用</h4>
        <ul>
          <li>聯絡方式如手機、email…用以聯絡病人</li>
          <li>通訊地址如住家地址、工作地址</li>
        </ul>
        <h4>
          兩種用途的病人資料將共用相同的識別碼如身分證、護照、居留證、病歷號
        </h4>
      </>
    ),
    S3: (
      <>
        <h4>院外系統</h4>
        <h5>情境</h5>
        <ul>
          <li>Patient ID 串接其他兩種 Resource 資料並適當呈現</li>
          <li>
            病人保有自己的PHR Patient
            ID，可透過PHR的授權機制授權醫護人員調用個人的健康資訊
          </li>
        </ul>
        <h5>範例</h5>
        <ul>
          <li>
            病人就醫時提供個人的PHR Patient
            ID，並授權醫護人員可對此ID對應的PHR個案資料調用和操作
          </li>
        </ul>
        <h5>注意</h5>
        <ul>
          <li>
            參加 SC3 聯測時，產品必須同時通過 Track Observation(WG2) 或 Track
            Medication(WG3) 才算通過
          </li>
          <li>範例：通過 WG1/SC3 + WG2 任一 SC、或 WG1/SC3 + WG3 任一 SC</li>
        </ul>
      </>
    ),
    S4: <></>,
  },
  { Id: "2", S1: <></> },
  { Id: "3", S1: <></> },
  { Id: "4", S1: <></> },
  { Id: "5", S1: <></> },
  { Id: "6", S1: <></> },
  { Id: "7", S1: <></> },
  { Id: "8", S1: <></> },
  { Id: "9", S1: <></> },
  { Id: "10", S1: <></> },
];
