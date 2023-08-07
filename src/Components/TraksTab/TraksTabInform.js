import logo from "../../assets/Logo.png";

import T1_1 from "../../assets/T1_1.png";
import T1_2 from "../../assets/T1_2.png";
import T1_3 from "../../assets/T1_3.png";
import T1_4 from "../../assets/T1_4.png";
import T1_6 from "../../assets/wg1_6.png";
import T1_7 from "../../assets/wg1_7.png";
import Ts1 from "../../assets/Ts1.png";

import track1_1 from "../../assets/WG1_1.png";
import track1_2 from "../../assets/Ts1.png";
import track1_3 from "../../assets/WG1_3.png";

import track2_1 from "../../assets/WG2_1.png";

import track4_1 from "../../assets/track4_1.png";
import track4_2 from "../../assets/track4_2.png";
import track4_3 from "../../assets/track4_3.png";
import track4_4 from "../../assets/track4_4.png";
import track4_5 from "../../assets/track4_5.png";
import track4_6 from "../../assets/track4_6.png";
import track4_7 from "../../assets/track4_7.png";

import ImgDialog from "../Dialog/Dialog";
//有需要輪播圖的話import後放入Img:[]
// 圖片放入<ImgDialog Img={Ts1} Width={"80%"} />頁面終能放大圖片顯示
// Img={Ts1}裡面引入圖片
// Width={"80%"}一般檢視頁面中的大小

export const TraksTabInform = [
  {
    Id: "1",
    TabTitle: "01",
    ContentTitle: "病人基本資料",
    Img: "",
    List: [
      {
        id: "1",
        Sc: "簡介 (Summary)",
        content: (
          <>
            <ul>
              <li>
                病患基本資料為醫療資訊系統中最基本元素，涵蓋所有電子病歷的範疇。本工作小組主要分析台灣病人基本資料之規格，根據國內現況制定出適合台灣病患基本資要用跨系統交換，以達到基本的互通性，並相容台灣核心規範。
              </li>
              <li>
                本工作小組有兩大目標:
                <ol>
                  <li>分析病患基本資料用實際醫療場域提出基本規格。</li>
                  <li
                    class="has-line-data"
                    data-line-start="10"
                    data-line-end="12"
                  >
                    訂立病患基本資料的使用情境用於各種作業流程。
                  </li>
                </ol>
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "2",
        Sc: "效益 (Benefits) ",
        content: (
          <>
            <ul>
              <li class="has-line-data" data-line-start="13" data-line-end="14">
                本工作小組制定醫院內部流程以及跨院交換流程的使用情境，確立病人基本資料通用於機構內健康醫療作業流程、跨機構之資訊互通、以及個人健康紀錄(PHR)之整合。針對特定之應用情境，可選用部分欄位，組合成標準病人基本資料，達到互通整合應用。
              </li>
              <li class="has-line-data" data-line-start="14" data-line-end="16">
                透過提供互通應用情境範例，讓開發者可以模擬實際流程提供發展「機構內系統整合」、「跨機構互通應用」、以及「個人健康紀錄(PHR)之應用」，作為發展標準化醫療資訊系統的核心基礎架構。
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "3",
        Sc: "詳細資訊(Details)",
        content: (
          <>
            <p>本賽道的情境描述如下:</p>
            <ol>
              <li class="has-line-data" data-line-start="18" data-line-end="20">
                <strong>Scenario 1：核心資料交換:</strong>{" "}
                目的在於提供台灣核心-病人規範的格式驗證，以下為核心資料交換的邏輯模型(資料來源:
                <a href="https://twcore.mohw.gov.tw/ig/twcore/StructureDefinition-TWPatient.html">
                  TW Core Patient
                </a>
                )。
              </li>
            </ol>
            <img src={track1_1} Width="100%" />

            <ol start="3">
              <li class="has-line-data" data-line-start="22" data-line-end="28">
                <strong>Scenario 2,3：院內系統:</strong>{" "}
                提供兩個在醫院內部病人資訊交換的情境，包含:
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="23"
                    data-line-end="24"
                  >
                    <strong>Scenario 2：病人身分資料交換:</strong>{" "}
                    執行各項護理技術、檢查、治療、手術等醫療處置前對病人做身分確認，例如：在診療前，醫護人員請病人提供基本資訊如姓名、生日用以核對病人身分是否正確
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="24"
                    data-line-end="25"
                  >
                    <strong>Scenario 3：病人聯絡資訊交換:</strong>{" "}
                    聯絡方式如手機、email…用以聯絡病人，通訊地址如住家地址、工作地址
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="25"
                    data-line-end="28"
                  >
                    兩種用途的病人資料將共用相同的識別碼如身分證、護照、居留證、病歷號
                    <br />
                    <img src={track1_2} Width="100%" />
                  </li>
                </ul>
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "4",
        Sc: "涉及系統(Systems Affected)",
        content: (
          <>
            <p>本規範涉及涉及的系统有：</p>

            <h3>醫院資訊系統(Hosptial Information System, HIS)</h3>
            <h3>FHIR Client</h3>
            <ul>
              <li class="has-line-data" data-line-start="32" data-line-end="33">
                發起處理請求，並能夠執行 Patient Resource
                的新增、查詢、修改、刪除操作 (CRUD Operations)
              </li>
              <li class="has-line-data" data-line-start="33" data-line-end="34">
                必須使用 FHIR 定義的 REST API 來進行上述操作
              </li>
              <li class="has-line-data" data-line-start="34" data-line-end="35">
                必須能針對 FHIR 定義的 Patient Search Parameters 進行搜尋
              </li>
              <li class="has-line-data" data-line-start="35" data-line-end="37">
                必須能使用 FHIR 定義的 history 參數進行歷史記錄調閱
              </li>
            </ul>
            <p class="has-line-data" data-line-start="37" data-line-end="38">
              FHIR Client分成Creator以及Consumer依序說明如下:
            </p>
            <ul>
              <li class="has-line-data" data-line-start="38" data-line-end="45">
                <p
                  class="has-line-data"
                  data-line-start="38"
                  data-line-end="39"
                >
                  <strong>Patient Creator</strong>
                </p>
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="39"
                    data-line-end="40"
                  >
                    發起處理請求，必須使用 FHIR 定義的 REST API新增Patient
                    Resource新增
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="40"
                    data-line-end="41"
                  >
                    檢核基準：成功新增資料後，測試系統要能正確回傳 id 及病人資料
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="41"
                    data-line-end="45"
                  >
                    <strong>檢核基準</strong>
                    <ul>
                      <li
                        class="has-line-data"
                        data-line-start="42"
                        data-line-end="43"
                      >
                        調閱資料後，測試系統要能將回傳的病人資料以自行定義的
                        UI、或以 JSON / XML 等原始文件格式正確呈現
                      </li>
                      <li
                        class="has-line-data"
                        data-line-start="43"
                        data-line-end="45"
                      >
                        編輯資料後，測試系統要能將回傳的病人資料及 History ID
                        以自行定義的 UI、或以 JSON / XML 等原始文件格式正確呈現
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="has-line-data" data-line-start="45" data-line-end="48">
                <p
                  class="has-line-data"
                  data-line-start="45"
                  data-line-end="46"
                >
                  <strong>Patient Consumer</strong>
                </p>
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="46"
                    data-line-end="47"
                  >
                    發起處理請求，必須使用 FHIR 定義的 REST API執行Patient
                    Resource查詢、修改、刪除操作
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="47"
                    data-line-end="48"
                  >
                    查詢功能須能支援
                    <a href="https://twcore.mohw.gov.tw/ig/twcore/CapabilityStatement-CapabilityStatementTWCoreClient.html">
                      臺灣核心-用戶端(TW Core Client)能力聲明
                    </a>
                    中定義的臺灣核心-病人(TW Core
                    Patient)必要查詢參數，包含如下表:
                  </li>
                </ul>
              </li>
              <li class="has-line-data" data-line-start="48" data-line-end="50">
                <p
                  class="has-line-data"
                  data-line-start="48"
                  data-line-end="49"
                >
                  必須(SHALL)符合查詢參數摘要
                </p>
              </li>
            </ul>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <strong>名稱</strong>
                  </th>
                  <th>
                    <strong>參數</strong>
                  </th>
                  <th>
                    <strong>類型</strong>
                  </th>
                  <th>
                    <strong>範例</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>邏輯ID</td>
                  <td>_id</td>
                  <td>token</td>
                  <td>
                    GET [base]/Patient?_id=[id],&lt;br&gt;GET
                    [base]/Patient/[id]
                  </td>
                </tr>
                <tr>
                  <td>出生年月日</td>
                  <td>birthdate</td>
                  <td>date</td>
                  <td>GET [base]/Patient?birthdate=[birthdate]</td>
                </tr>
                <tr>
                  <td>性別</td>
                  <td>gender</td>
                  <td>token</td>
                  <td>GET [base]/Patient?gender=[code]</td>
                </tr>
                <tr>
                  <td>身份識別碼</td>
                  <td>identifier</td>
                  <td>token</td>
                  <td>GET [base]/Patient?identifier=</td>
                </tr>
                <tr>
                  <td>姓名</td>
                  <td>name</td>
                  <td>string</td>
                  <td>GET [base]/Patient?name=[name]</td>
                </tr>
              </tbody>
            </table>
            <ul>
              <li class="has-line-data" data-line-start="58" data-line-end="59">
                需支援history 參數進行歷史記錄調閱
              </li>
              <li class="has-line-data" data-line-start="59" data-line-end="63">
                <strong>檢核基準</strong>
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="60"
                    data-line-end="61"
                  >
                    調閱資料後，測試系統要能將回傳的病人資料以自行定義的
                    UI、或以 JSON / XML 等原始文件格式正確呈現
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="61"
                    data-line-end="63"
                  >
                    編輯資料後，測試系統要能將回傳的病人資料及 History ID
                    以自行定義的 UI、或以 JSON / XML 等原始文件格式正確呈現
                  </li>
                </ul>
              </li>
            </ul>
            <h3 class="code-line" data-line-start="63" data-line-end="64">
              <a id="FHIR_Server_63"></a>FHIR Server
            </h3>
            <ul>
              <li class="has-line-data" data-line-start="64" data-line-end="66">
                實作或提供一個儲存機制 (repository
                storage)，並正確處理所接收的處理請求
                <br />
                接收處理請求，並能夠執行 Patient Resource
                的新增、查詢、修改、刪除操作 (CRUD Operations)
              </li>
              <li class="has-line-data" data-line-start="66" data-line-end="67">
                必須能夠支援 FHIR Client 使用 FHIR 定義的 REST API
                來進行上述操作
              </li>
              <li class="has-line-data" data-line-start="67" data-line-end="68">
                必須能夠支援 FHIR Client 使用 FHIR 定義的查詢參數進行搜尋
              </li>
              <li class="has-line-data" data-line-start="68" data-line-end="70">
                必須能夠支援 FHIR Client使用 FHIR 定義的 history
                參數進行歷史記錄調閱
              </li>
            </ul>
            <p class="has-line-data" data-line-start="70" data-line-end="71">
              FHIR Server由Patient Repository扮演說明如下:
            </p>
            <ul>
              <li class="has-line-data" data-line-start="72" data-line-end="79">
                <strong>Patient Repository</strong>
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="73"
                    data-line-end="74"
                  >
                    實作或提供一個儲存機制 (repository
                    storage)，並正確處理所接收的處理請求
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="74"
                    data-line-end="75"
                  >
                    接收處理請求，並能夠執行 Patient Resource
                    的新增、查詢、修改、刪除操作 (CRUD Operations)
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="75"
                    data-line-end="76"
                  >
                    必須能夠支援 Patient Client 使用 FHIR 定義的 REST API
                    來進行上述操作
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="76"
                    data-line-end="77"
                  >
                    必須能夠支援 Patient Client 使用 FHIR 定義的查詢參數進行搜尋
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="77"
                    data-line-end="79"
                  >
                    必須能夠支援 Patient Client使用 FHIR 定義的 history
                    參數進行歷史記錄調閱
                  </li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "5",
        Sc: "規格(Specification)",
        content: (
          <>
            <p>
              本賽道驗證規格比照國際 FHIR 聯測，將測試項目劃分為若干
              Level，並新增 Bonus Point，依序說明如下:
            </p>
            <h3>Level 1</h3>
            <ul>
              <li>能正確設定Gazelle，並以Gazelle Test Script作為檢核依據</li>
              <li>測試系統完成各情境要求之項目</li>
              <li>能順利完成Create/Read/Update/Delete 等動作</li>
              <li>能順利以 Search Parameters 搜尋指定的 Record</li>
            </ul>
            <h3>Level 1+</h3>
            <ul>
              <li class="has-line-data" data-line-start="87" data-line-end="88">
                完成 Level 1 之檢核項目
              </li>
              <li class="has-line-data" data-line-start="88" data-line-end="89">
                測試系統能以 history 參數調閱單筆 Record 的指定歷史記錄
              </li>
              <li class="has-line-data" data-line-start="89" data-line-end="90">
                <strong>Bonus Point:</strong> 測試系統能正確顯示單筆 Record
                的歷史記錄清單，並能自由調閱歷史記錄
              </li>
              <li class="has-line-data" data-line-start="90" data-line-end="92">
                <strong>Bonus Point:</strong> 測試系統搜尋指定 Record
                時，能同時以多項查詢參數進行多條件搜索
              </li>
            </ul>
            <h3>Level 2</h3>
            <ul>
              <li class="has-line-data" data-line-start="93" data-line-end="97">
                測試系統<code>新增</code> Patient 時，符合以下所有條件
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="94"
                    data-line-end="95"
                  >
                    HTTP Method 必須為 PUT
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="95"
                    data-line-end="96"
                  >
                    HTTP Header Accept 必須為 ‘application/fhir+json’
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="96"
                    data-line-end="97"
                  >
                    HTTP Header Content-Type 必須為 ‘application/fhir+json’
                  </li>
                </ul>
              </li>
              <li
                class="has-line-data"
                data-line-start="97"
                data-line-end="101"
              >
                測試系統<code>編輯</code> Patient 時，符合以下所有條件
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="98"
                    data-line-end="99"
                  >
                    HTTP Method 必須為 PUT
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="99"
                    data-line-end="100"
                  >
                    HTTP Header Accept 必須為 ‘application/fhir+json’
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="100"
                    data-line-end="101"
                  >
                    HTTP Header Content-Type 必須為 ‘application/fhir+json’
                  </li>
                </ul>
              </li>
              <li
                class="has-line-data"
                data-line-start="101"
                data-line-end="105"
              >
                測試系統<code>調閱</code> Patient 時，符合以下所有條件
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="102"
                    data-line-end="103"
                  >
                    HTTP Method 必須為 GET
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="103"
                    data-line-end="104"
                  >
                    HTTP Header Accept 必須為 ‘application/fhir+json’
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="104"
                    data-line-end="105"
                  >
                    HTTP Header Content-Type 必須為 ‘application/fhir+json’
                  </li>
                </ul>
              </li>
              <li
                class="has-line-data"
                data-line-start="105"
                data-line-end="109"
              >
                測試系統<code>調閱 Patient Record 的歷史資料</code>
                時，符合以下所有條件
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="106"
                    data-line-end="107"
                  >
                    HTTP Method 必須為 GET
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="107"
                    data-line-end="108"
                  >
                    HTTP Header Accept 必須為 ‘application/fhir+json’
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="108"
                    data-line-end="109"
                  >
                    HTTP Header Content-Type 不存在
                  </li>
                </ul>
              </li>
              <li
                class="has-line-data"
                data-line-start="109"
                data-line-end="113"
              >
                測試系統以<code>Search Parameters 調閱</code> Patient
                時，符合以下所有條件
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="110"
                    data-line-end="111"
                  >
                    HTTP Method 必須為 GET
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="111"
                    data-line-end="112"
                  >
                    HTTP Header Accept 必須為 ‘application/fhir+json’
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="112"
                    data-line-end="113"
                  >
                    HTTP Header Content-Type 不存在
                  </li>
                </ul>
              </li>
              <li
                class="has-line-data"
                data-line-start="113"
                data-line-end="118"
              >
                測試系統<code>刪除</code> Patient 時，符合以下所有條件
                <ul>
                  <li
                    class="has-line-data"
                    data-line-start="114"
                    data-line-end="115"
                  >
                    HTTP Method 必須為 DELETE
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="115"
                    data-line-end="116"
                  >
                    HTTP Header Accept 必須為 ‘application/fhir+json’
                  </li>
                  <li
                    class="has-line-data"
                    data-line-start="116"
                    data-line-end="118"
                  >
                    HTTP Header Content-Type 不存在
                  </li>
                </ul>
              </li>
            </ul>
            <h3>角色(Actors)</h3>
            <ol>
              <li
                class="has-line-data"
                data-line-start="119"
                data-line-end="121"
              >
                <strong>病人基本資料(PAT)角色整理</strong>
              </li>
            </ol>
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
                  <td>PAT_CREATOR</td>
                  <td>Patient Creator</td>
                  <td>產生病患基本資料角色</td>
                </tr>
                <tr>
                  <td>PAT_CREATOR_SC3</td>
                  <td>Patient Creator SC3</td>
                  <td>情境3產生病患基本資料角色</td>
                </tr>
                <tr>
                  <td>PAT_CONSUMER</td>
                  <td>Patient Consumer</td>
                  <td>查詢/調閱病患基本資料角色</td>
                </tr>
                <tr>
                  <td>PAT_CONSUMER_SC3</td>
                  <td>Patient Consumer SC3</td>
                  <td>情境3查詢/調閱病患基本資料角色</td>
                </tr>
                <tr>
                  <td>PAT_REPOSITORY</td>
                  <td>Patient Repository</td>
                  <td>病患基本資料儲存庫</td>
                </tr>
              </tbody>
            </table>
            <h3>交易(Transactions)</h3>
            <p class="has-line-data" data-line-start="130" data-line-end="131">
              1.<strong>病人基本資料(PAT)交易整理</strong>
            </p>
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
                  <td>MITW-1</td>
                  <td>Patient Create</td>
                  <td>情境1/2 - 新增病患基本資料</td>
                </tr>
                <tr>
                  <td>MITW-2</td>
                  <td>Patient Q/R</td>
                  <td>情境1/2 - 查詢與調閱新增病患基本資料</td>
                </tr>
                <tr>
                  <td>MITW-21</td>
                  <td>Patient Create SC3</td>
                  <td>情境3 - 新增病患基本資料</td>
                </tr>
                <tr>
                  <td>MITW-22</td>
                  <td>Patient Q/R/U SC3</td>
                  <td>情境3 - 查詢與調閱患基本資料</td>
                </tr>
              </tbody>
            </table>
            <h3>角色與交易關係圖</h3>
            <ol>
              <li
                class="has-line-data"
                data-line-start="140"
                data-line-end="143"
              >
                病人基本資料(PAT)之角色與交易關係圖
                <br />
                <img src={track1_3} Width="100%" />
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "6",
        Sc: "其他(See Also)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "7",
        Sc: "作者與貢獻者",
        content: (
          <>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>角色</th>
                  <th>姓名</th>
                  <th>所屬單位</th>
                  <th>貢獻</th>
                  <th>聯絡方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>作者</td>
                  <td>蕭嘉宏</td>
                  <td>慈濟大學 - 醫學資訊學系</td>
                  <td>Profiling, 聯測測試情境設計</td>
                  <td>chhsiao@gms.tcu.edu.tw</td>
                </tr>
                <tr>
                  <td>作者</td>
                  <td>楊宇凡</td>
                  <td>矽塔資訊服務有限公司</td>
                  <td>Profiling, 聯測測試情境設計</td>
                  <td>ceo@sita.tech</td>
                </tr>
                <tr>
                  <td>貢獻者</td>
                  <td>施岳勳</td>
                  <td>國立陽明交通大學 - 生物醫學工程學系</td>
                  <td>聯測測試情境設計</td>
                  <td></td>
                </tr>
                <tr>
                  <td>貢獻者</td>
                  <td>湯士滄</td>
                  <td>銘傳大學 - 生物醫學工程學系</td>
                  <td>聯測測試情境設計</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },
  {
    Id: "2",
    TabTitle: "02",
    ContentTitle: "生理量測數據",
    Img: "",
    List: [
      {
        id: "1",
        Sc: "簡介 (Summary)",
        content: (
          <>
            <p>
              生理量測數據是為了患者監測和識別健康變化或問題而記錄的重要信息。生理量測數據包括身高、體重、體溫、進食後血糖、進食前血糖、體脂率、握力、血壓
              (收縮壓、舒張壓)、心率等數據。生理量測數據通常在各種醫療保健場所定期和常規進行，包括入院檢查、住院監護、術後醫療程序、治療和療法程序以及密切監護。
            </p>
            <p>
              由於這些信息在多個醫療保健場所和部門中使用，有必要對數據進行標準化，以確保一致性、準確的結果、便於比較和分析，並增強生理量測數據的互操作性。
            </p>
            <h3>生理量測數據互通</h3>
            <p>
              測試生理量測數據存儲規範（創建者 -
              Creator）和生理量測數據展示（調閲著 -
              Consumer）。測試是通過按照定義的標準規範存儲生理量測數據，並確保在其他系統上準確顯示。生理量測數據包括身高、體重、體溫、進食後血糖、進食前血糖、體脂率、握力、血壓（收縮壓和舒張壓）以及心率等參數。
            </p>
            <p>
              本工作小組制定台灣的生理量測數據交換標準規範，並鼓勵參與者在開發涉及生理量測數據記錄功能的系統時遵循本規範。
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
              本賽道製定了各種生理監測及骨質密度資料的規範。參考本規範開發系統以便更輕鬆地實現跨系統的整合以及生理監測資料分享。
            </p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "詳細資訊(Details)",
        content: (
          <>
            <p>本賽道的情境描述如下:</p>
            <h3>情境1 - 生命徵象 (Vital signs)</h3>
            <p>
              本賽道會進行驗證生命徵象資料交換規範的格式。 FHIR Observation 的
              “code” 欄位可以根據下面顯示的生命徵象項目代碼進行更改。
            </p>
            <a href="https://mitw.dicom.org.tw/MITW%20WG2%20Vital%20Sign%20Code%20System.xlsx">
              生理信號規格與對應代碼整理表
            </a>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <strong>項目</strong>
                  </th>
                  <th>
                    <strong>類型</strong>
                  </th>
                  <th>
                    <strong>Code system</strong>
                  </th>
                  <th>
                    <strong>Code</strong>
                  </th>
                  <th>
                    <strong>Unit</strong>
                  </th>
                  <th>
                    <strong>Unit Code&lt;br&gt;(UCUM Code)</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>身高</td>
                  <td>Vital Signs</td>
                  <td>LoincCode</td>
                  <td>3137-7</td>
                  <td>cm</td>
                  <td>cm</td>
                </tr>
                <tr>
                  <td>體重</td>
                  <td>Vital Signs</td>
                  <td>LoincCode</td>
                  <td>29463-7</td>
                  <td>kg</td>
                  <td>kg</td>
                </tr>
                <tr>
                  <td>體溫</td>
                  <td>Vital Signs</td>
                  <td>LoincCode</td>
                  <td>8310-5</td>
                  <td>Cel</td>
                  <td>Cel</td>
                </tr>
                <tr>
                  <td>進食後血糖</td>
                  <td>Laboratory Data</td>
                  <td>LoincCode</td>
                  <td>87422-2</td>
                  <td>mg/dL</td>
                  <td>mg/dL</td>
                </tr>
                <tr>
                  <td>進食前血糖</td>
                  <td>Laboratory Data</td>
                  <td>LoincCode</td>
                  <td>88365-2</td>
                  <td>mg/dL</td>
                  <td>mg/dL</td>
                </tr>
                <tr>
                  <td>體脂率</td>
                  <td>Vital Signs</td>
                  <td>LoincCode</td>
                  <td>41982-0</td>
                  <td>%</td>
                  <td>%</td>
                </tr>
                <tr>
                  <td>握力</td>
                  <td>Vital Signs</td>
                  <td>LoincCode</td>
                  <td>83174-3</td>
                  <td>kg</td>
                  <td>kg</td>
                </tr>
              </tbody>
            </table>
            <h4>參考範例</h4>
            <ul>
              <li>身高：</li> <li>體重：</li>
              <li>進食後血糖：</li> <li>進食前血糖：</li>
              <li>體脂率：</li> <li>握力：</li>
            </ul>
            <h3>情境2 -用藥結合血壓與心率量測</h3>
            <p>
              本賽道會進行驗證用藥結合血壓與心率量測資料交換規範的格式。
              <br />
              FHIR Observation 的 “code”
              欄位可以根據下面顯示的生命徵象項目代碼進行更改。
            </p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <strong>血壓</strong>
                  </th>
                  <th>
                    <strong>Vital Signs</strong>
                  </th>
                  <th>
                    <strong>LoincCode</strong>
                  </th>
                  <th>
                    <strong>35094-2</strong>
                  </th>
                  <th>
                    <strong>mmHg</strong>
                  </th>
                  <th>
                    <strong>mmHg&lt;br&gt;(UCUM Code)</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>收縮壓</td>
                  <td>Vital Signs</td>
                  <td>LoincCode</td>
                  <td>8480-6</td>
                  <td>mmHg</td>
                  <td>mmHg</td>
                </tr>
                <tr>
                  <td>舒張壓</td>
                  <td>Vital Signs</td>
                  <td>LoincCode</td>
                  <td>8462-4</td>
                  <td>mmHg</td>
                  <td>mmHg</td>
                </tr>
                <tr>
                  <td>心率</td>
                  <td>Vital Signs</td>
                  <td>LoincCode</td>
                  <td>8867-4</td>
                  <td>{`beats`}/min</td>
                  <td>{`beats`}/min</td>
                </tr>
                <tr>
                  <td>血壓</td>
                  <td>Vital Signs</td>
                  <td>LoincCode</td>
                  <td>35094-2</td>
                  <td>mmHg</td>
                  <td>mmHg</td>
                </tr>
              </tbody>
            </table>
            <h4>參考範例</h4>
            <ul>
              <li>血壓：</li> <li>收縮壓：</li>
              <li>舒張壓：</li> <li>心率：</li>
            </ul>
            <h3>情境3 -骨骼密度</h3>
            <p>
              本賽道會進行驗證骨骼密度資料交換規範的格式。
              <br />
              FHIR Observation 的 “code”
              欄位可以根據下面顯示的生命徵象項目代碼進行更改。
            </p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <strong>股骨骨密度</strong>
                  </th>
                  <th>
                    <strong>Image</strong>
                  </th>
                  <th>
                    <strong>LoincCode</strong>
                  </th>
                  <th>
                    <strong>38263-0</strong>
                  </th>
                  <th>**{`T` - `score`} **</th>
                  <th>
                    <strong>{`T` - `score`}</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>左股骨骨密度</td>
                  <td>Image</td>
                  <td>LoincCode</td>
                  <td>80948-3</td>
                  <td>{`T` - `score`}</td>
                  <td>{`T` - `score`}</td>
                </tr>
                <tr>
                  <td>右股骨骨密度</td>
                  <td>Image</td>
                  <td>LoincCode</td>
                  <td>80947-5</td>
                  <td>{`T` - `score`}</td>
                  <td>{`T` - `score`}</td>
                </tr>
                <tr>
                  <td>腰椎骨密度</td>
                  <td>Image</td>
                  <td>LoincCode</td>
                  <td>38267-1</td>
                  <td>{`T` - `score`}</td>
                  <td>{`T` - `score`}</td>
                </tr>
              </tbody>
            </table>
            <h4>參考範例</h4>
            <ul>
              <li>左股骨骨密度：</li> <li>右股骨骨密度：</li>
              <li>腰椎骨密度：</li>
            </ul>
          </>
        ),
      },
      {
        id: "4",
        Sc: "涉及系統(Systems Affected)",
        content: (
          <>
            {" "}
            <p>本規範涉及涉及的系统有：</p>
            <h3>醫院資訊系統(Hosptial Information System, HIS)</h3>
            <h3>FHIR Client</h3>
            <ul>
              <li>
                發起處理請求，並能夠執行 Patient Resource
                的新增、查詢、修改、刪除操作 (CRUD Operations)
              </li>
              <li>必須使用 FHIR 定義的 REST API 來進行上述操作</li>
              <li>必須能針對 FHIR 定義的 Patient Search Parameters 進行搜尋</li>
              <li>必須能使用 FHIR 定義的 history 參數進行歷史記錄調閱</li>
            </ul>
            <p>FHIR Client分成Creator以及Consumer依序說明如下:</p>
            <ul>
              <li>
                <p>
                  <strong>Patient Creator</strong>
                </p>
                <ul>
                  <li>
                    發起處理請求，必須使用 FHIR 定義的 REST API新增Patient
                    Resource新增
                  </li>
                  <li>
                    檢核基準：成功新增資料後，測試系統要能正確回傳 id 及病人資料
                  </li>
                  <li>
                    檢核基準
                    <ul>
                      <li>
                        調閱資料後，測試系統要能將回傳的病人資料以自行定義的
                        UI、或以 JSON / XML 等原始文件格式正確呈現
                      </li>
                      <li>
                        編輯資料後，測試系統要能將回傳的病人資料及 History ID
                        以自行定義的 UI、或以 JSON / XML 等原始文件格式正確呈現
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Patient Consumer</strong>
                </p>
                <ul>
                  <li>
                    發起處理請求，必須使用 FHIR 定義的 REST API執行Patient
                    Resource查詢、修改、刪除操作
                  </li>
                  <li>
                    查詢功能須能支援臺灣核心-用戶端(TW Core
                    Client)能力聲明中定義的臺灣核心-病人(TW Core
                    Patient)必要查詢參數，包含如下表:
                  </li>
                </ul>
              </li>
              <li>
                <p>必須(SHALL)符合查詢參數摘要</p>
                <table class="table table-striped table-bordered" border="1">
                  <thead>
                    <tr>
                      <th>
                        <strong>名稱</strong>
                      </th>
                      <th>
                        <strong>參數</strong>
                      </th>
                      <th>
                        <strong>類型</strong>
                      </th>
                      <th>
                        <strong>範例</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>邏輯ID</td>
                      <td>_id</td>
                      <td>token</td>
                      <td>
                        GET [base]/Patient?_id=[id],&lt;br&gt;GET
                        [base]/Patient/[id]
                      </td>
                    </tr>
                    <tr>
                      <td>出生年月日</td>
                      <td>birthdate</td>
                      <td>date</td>
                      <td>GET [base]/Patient?birthdate=[birthdate]</td>
                    </tr>
                    <tr>
                      <td>性別</td>
                      <td>gender</td>
                      <td>token</td>
                      <td>GET [base]/Patient?gender=[code]</td>
                    </tr>
                    <tr>
                      <td>身份識別碼</td>
                      <td>identifier</td>
                      <td>token</td>
                      <td>GET [base]/Patient?identifier=</td>
                    </tr>
                    <tr>
                      <td>姓名</td>
                      <td>name</td>
                      <td>string</td>
                      <td>GET [base]/Patient?name=[name]</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <p>需支援history 參數進行歷史記錄調閱</p>
              </li>
              <li>
                <p>
                  <strong>檢核基準</strong>
                  <ul>
                    <li>
                      調閱資料後，測試系統要能將回傳的病人資料以自行定義的
                      UI、或以 JSON / XML 等原始文件格式正確呈現
                    </li>
                    <li>
                      編輯資料後，測試系統要能將回傳的病人資料及 History ID
                      以自行定義的 UI、或以 JSON / XML 等原始文件格式正確呈現
                    </li>
                  </ul>
                </p>
              </li>
            </ul>
            <h3>FHIR Server</h3>
            <ul>
              <li>
                實作或提供一個儲存機制 (repository
                storage)，並正確處理所接收的處理請求 接收處理請求，並能夠執行
                Patient Resource 的新增、查詢、修改、刪除操作 (CRUD Operations)
                必須能夠支援 FHIR Client 使用 FHIR 定義的 REST API
                來進行上述操作 必須能夠支援 FHIR Client 使用 FHIR
                定義的查詢參數進行搜尋 必須能夠支援 FHIR Client使用 FHIR 定義的
                history 參數進行歷史記錄調閱
              </li>
              <li>
                實作或提供一個儲存機制 (repository
                storage)，並正確處理所接收的處理請求 接收處理請求，並能夠執行
                Patient Resource 的新增、查詢、修改、刪除操作 (CRUD Operations)
                必須能夠支援 FHIR Client 使用 FHIR 定義的 REST API
                來進行上述操作 必須能夠支援 FHIR Client 使用 FHIR
                定義的查詢參數進行搜尋 必須能夠支援 FHIR Client使用 FHIR 定義的
                history 參數進行歷史記錄調閱
              </li>
              <li>
                實作或提供一個儲存機制 (repository
                storage)，並正確處理所接收的處理請求 接收處理請求，並能夠執行
                Patient Resource 的新增、查詢、修改、刪除操作 (CRUD Operations)
                必須能夠支援 FHIR Client 使用 FHIR 定義的 REST API
                來進行上述操作 必須能夠支援 FHIR Client 使用 FHIR
                定義的查詢參數進行搜尋 必須能夠支援 FHIR Client使用 FHIR 定義的
                history 參數進行歷史記錄調閱
              </li>
              <li>
                實作或提供一個儲存機制 (repository
                storage)，並正確處理所接收的處理請求 接收處理請求，並能夠執行
                Patient Resource 的新增、查詢、修改、刪除操作 (CRUD Operations)
                必須能夠支援 FHIR Client 使用 FHIR 定義的 REST API
                來進行上述操作 必須能夠支援 FHIR Client 使用 FHIR
                定義的查詢參數進行搜尋 必須能夠支援 FHIR Client使用 FHIR 定義的
                history 參數進行歷史記錄調閱
              </li>
            </ul>
            <p>FHIR Server由Patient Repository扮演說明如下:</p>
            <ul>
              <li>
                Patient Repository
                <ul>
                  <li>
                    實作或提供一個儲存機制 (repository
                    storage)，並正確處理所接收的處理請求
                  </li>
                  <li>
                    接收處理請求，並能夠執行 Patient Resource
                    的新增、查詢、修改、刪除操作 (CRUD Operations)
                  </li>
                  <li>
                    必須能夠支援 Patient Client 使用 FHIR 定義的 REST API
                    來進行上述操作
                  </li>
                  <li>
                    必須能夠支援 Patient Client 使用 FHIR 定義的查詢參數進行搜尋
                  </li>
                  <li>
                    必須能夠支援 Patient Client使用 FHIR 定義的 history
                    參數進行歷史記錄調閱
                  </li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "5",
        Sc: "規格(Specification)",
        content: (
          <>
            <p>
              以下是用於記錄生命徵象的FHIR Observation規格
              <br />
              –Add the specs of fhir observation image
            </p>
            <h3>角色(Actors)</h3>
            <p>1.生理量測數據(VTSIGN)角色整理</p>
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
                  <td>VT_SC1_CREATOR</td>
                  <td>SC1 Vital Sign Creator</td>
                  <td>新增生理量測數據(常用生理信號)</td>
                </tr>
                <tr>
                  <td>VT_SC2_CREATOR</td>
                  <td>SC2 Vital Sign Creator</td>
                  <td>新增生理量測數據(結合用藥)</td>
                </tr>
                <tr>
                  <td>VT_SC3_CREATOR</td>
                  <td>SC3_Vital Sign Creator</td>
                  <td>新增生理量測數據(骨骼密度量測)</td>
                </tr>
                <tr>
                  <td>VT_SC4_CREATOR</td>
                  <td>SC4 Vital Sign Creator</td>
                  <td>新增生理量測數據(12導層心電圖)</td>
                </tr>
                <tr>
                  <td>VT_SC1_CONSUMER</td>
                  <td>SC1 Vital Sign Consumer</td>
                  <td>查詢與調閱生理量測數據(常用生理信號)</td>
                </tr>
                <tr>
                  <td>VT_SC2_CONSUMER</td>
                  <td>SC2 Vital Sign Consumer</td>
                  <td>查詢與調閱生理量測數據(結合用藥)</td>
                </tr>
                <tr>
                  <td>VT_SC3_CONSUMER</td>
                  <td>SC3 Vital Sign Consumer</td>
                  <td>查詢與調閱生理量測數據(骨骼密度量測)</td>
                </tr>
                <tr>
                  <td>VT_SC4_CONSUMER</td>
                  <td>SC4 Vital Sign Consumer</td>
                  <td>查詢與調閱生理量測數據(12導層心電圖)</td>
                </tr>
                <tr>
                  <td>VT_REPOSITORY</td>
                  <td>Vital Sign Repository</td>
                  <td>生理量測數據儲存庫</td>
                </tr>
              </tbody>
            </table>

            <h3>交易(Transactions)</h3>
            <p>1.生理量測數據(VTSIGN)交易整理</p>
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
                  <td>MITW-3</td>
                  <td>Vital signs create</td>
                  <td>產生生理信號(常用生理信號)</td>
                </tr>
                <tr>
                  <td>MITW-4</td>
                  <td>Vital signs query/retrieve</td>
                  <td>查詢與調閱生理量測數據(常用生理信號)</td>
                </tr>
                <tr>
                  <td>MITW-15</td>
                  <td>BMD create for scenario 3</td>
                  <td>新增生理量測數據(骨骼密度量測)</td>
                </tr>
                <tr>
                  <td>MITW-16</td>
                  <td>BMD query &amp; retrieve for scenario 3</td>
                  <td>查詢與調閱生理量測數據(骨骼密度量測)</td>
                </tr>
                <tr>
                  <td>MITW-13</td>
                  <td>Create vital signs with medication for scenario 2</td>
                  <td>新增生理量測數據(結合用藥)</td>
                </tr>
                <tr>
                  <td>MITW-14</td>
                  <td>
                    query &amp; retrieve create vital signs with medication for
                    scenario 2
                  </td>
                  <td>查詢與調閱生理量測數據(結合用藥)</td>
                </tr>
                <tr>
                  <td>MITW-17</td>
                  <td>12-lead ECG create for scenario 4</td>
                  <td>新增生理量測數據(12導層心電圖)</td>
                </tr>
                <tr>
                  <td>MITW-18</td>
                  <td>12-lead ECG query &amp; retrieve for scenario 4</td>
                  <td>查詢與調閱生理量測數據(12導層心電圖)</td>
                </tr>
              </tbody>
            </table>

            <h3>角色與交易關係圖</h3>
            <p>
              1.生理量測數據(VTSIGN)之角色與交易關係圖
              <img src={track2_1} Width="100%" />
            </p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "其他(See Also)",
        content: <></>,
      },
      {
        id: "7",
        Sc: "作者與貢獻者",
        content: (
          <>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>角色</th>
                  <th>姓名</th>
                  <th>所屬單位</th>
                  <th>貢獻</th>
                  <th>聯絡方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>作者</td>
                  <td>蕭嘉宏</td>
                  <td>慈濟大學 - 醫學資訊學系</td>
                  <td>Profiling, 聯測測試情境設計</td>
                  <td></td>
                </tr>
                <tr>
                  <td>作者</td>
                  <td>洪苑容</td>
                  <td>馬雅資訊股份有限公司軟體工程師</td>
                  <td>profiling, 測試工具開發, 聯測測試情境設計</td>
                  <td></td>
                </tr>
                <tr>
                  <td>作者</td>
                  <td>湯士滄</td>
                  <td>銘傳大學 - 生物醫學工程學系</td>
                  <td>聯測測試情境設計</td>
                  <td></td>
                </tr>
                <tr>
                  <td>貢獻者</td>
                  <td>林欣怡</td>
                  <td></td>
                  <td>Profiling</td>
                  <td></td>
                </tr>
                <tr>
                  <td>貢獻者</td>
                  <td>莊舒雅</td>
                  <td>慈濟大學 - 醫學資訊學系</td>
                  <td>測試支援</td>
                  <td></td>
                </tr>
                <tr>
                  <td>貢獻者</td>
                  <td>洪彬彬</td>
                  <td>慈濟大學 - 醫學資訊學系</td>
                  <td>測試支援</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },
  {
    Id: "3",
    TabTitle: "03",
    ContentTitle: "用藥、文件打包及服務請求",
    Img: [],
    List: [
      {
        id: "1",
        Sc: "簡介 (Summary)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "效益 (Benefits) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "詳細資訊(Details)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "涉及系統(Systems Affected)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "規格(Specification)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "其他(See Also)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
  },
  {
    Id: "4",
    TabTitle: "04",
    ContentTitle: "醫學影像與病理",
    Img: [],
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
            </p>{" "}
            <center>
              {" "}
              <ImgDialog Img={track4_1} Width={"50%"} />
            </center>{" "}
            <p style={{ fontWeight: "bold" }}>
              影像索引(FHIR ImagingStudy)設計結構示意圖
            </p>
            <center>
              <ImgDialog Img={track4_2} Width={"50%"} />
            </center>
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
            <center>
              <ImgDialog Img={track4_3} Width={"50%"} />
            </center>
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
              <li>醫學影像與DICOM標記互通之角色與交易關係圖</li>{" "}
              <center>
                {" "}
                <ImgDialog Img={track4_4} Width={"50%"} />
              </center>
              <li>影像、結構化影像報告(IMAGE)、FHIR標記之角色與交易關係圖</li>{" "}
              <center>
                <ImgDialog Img={track4_5} Width={"80%"} />
              </center>{" "}
              <li>數位病理影像存取(PATH)之角色與交易關係圖 </li>{" "}
              <center>
                {" "}
                <ImgDialog Img={track4_6} Width={"50%"} />
              </center>
              <li>影像檢查流程之角色與交易關係圖</li>{" "}
              <center>
                {" "}
                <ImgDialog Img={track4_7} Width={"50%"} />
              </center>
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
  },
  {
    Id: "5",
    TabTitle: "05",
    ContentTitle: "照護協調",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "簡介 (Summary)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "效益 (Benefits) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "詳細資訊(Details)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "涉及系統(Systems Affected)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "規格(Specification)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "其他(See Also)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
  },
  {
    Id: "6",
    TabTitle: "06",
    ContentTitle: "基因體標記",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "簡介 (Summary)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "效益 (Benefits) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "詳細資訊(Details)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "涉及系統(Systems Affected)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "規格(Specification)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "其他(See Also)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
  },
  {
    Id: "7",
    TabTitle: "07",
    ContentTitle: "緊急醫療救護",
    Img: [],
    List: [
      {
        id: "1",
        Sc: "說明",
        content: (
          <>
            <ul style={{ margin: 0 }}>
              <li>
                <strong>說明:</strong>
              </li>
              <p>
                本賽道主要目的在於測試緊急醫療救護情境中，跨系統間的資料交換。生理量測儀器可透過此賽道規範的情境回傳標準化的資料至急救端系統、救護車或責任醫院系統，透過將救護紀錄表及四大急重症表單標準化以解決急救資料互通性的問題。本賽道主要針對上述救護紀錄表與四大急重症表單／病摘使用的
                Resource 進行驗證，並確保未來與電子病歷（TW Core
                IG）進行資料互通的能力。
              </p>
              <li>
                <strong>預期效益:</strong>
              </li>
              <p>
                隨著智慧醫療的快速發展，及緊急醫療救護業務的規模增長，需要加快以標準化方式進行各系統與儀器間資料交換，縮短急救反應時間，以提升整體緊急照護醫療品質。參加單位可使用實際或是產品雛形參加此賽道，由於這是較新的賽道，並需要跨多個
                Resource 進行資料交換，因此參加者須要具備較高的技術門檻。MISAT
                鼓勵急救場域相關工作者（醫院急診單位、急重症醫師、EMT）、軟體工程師、開源工作者、儀器開發廠商、系統整合廠商參加，透過早期布局方式建構場域實證以完善本標準，並建立急救照護場域的產品概念驗證（Proof
                of Concept）與服務驗證（Proof of Service）。
              </p>
              <li>
                <strong>近期規劃:</strong>
              </li>
              <p>1.徵求工作小組成員（討論與制定 Profile、撰寫實作指引</p>
              <p>2.徵求督察員 </p>
              <p>3.徵求參測單位</p>
              <li>
                <strong>目標:</strong>
                <p>
                  <strong> 資料互通機制：</strong>
                  整合現行急就照護情境中，包含消防局、醫院、醫療救護體系中的各單位，建立到院前的資料互通機制。
                  跨單位系統介接：基於上述互通機制，介接各單位系統，達成資料互通。
                </p>
                <p>
                  <strong>資料交換與整合：</strong>
                  項目包括現場傷病患生命徵象與其他相關量測資料，並具備與電子病歷（臺灣核心規範，TW
                  Core IG）進行資料互通的能力。
                </p>
                <p>
                  <strong> 資料安全：</strong>
                  因應存取傷病患個人資料，需要一個標準化認證授權機制，確保資料交換安全性（Security）。
                </p>
                <p>
                  <strong> 院內外連線遠距醫療：</strong>
                  若情況允許的話，支援現場與醫院連線實施遠距醫療。
                </p>
              </li>
            </ul>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "測試情境(Scenarios)",
        content: (
          <>
            <ul>
              <li>
                <strong>Scenario 1：核心資料交換(Core Resource)</strong>
              </li>
              救護紀錄表 FHIR 標準化，並整合核心救護流程
              <li>
                <strong>Scenario 2：重大傷病資料交換</strong>
              </li>
              四大急重症表單 FHIR 標準化（OHCA、Trauma、CVA、ACS）
              <li>
                <strong>Scenario 3：生理量測資料交換</strong>
              </li>
              救護車上儀器的生理量測資料
            </ul>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "聯測範圍",
        content: (
          <>
            <h3>Scenario 1：核心資料交換</h3>
            <p>
              <strong>說明：</strong>
              本情境參照內政部消防機關救護紀錄表欄位進行定義，可與 SC2、SC3
              等應用情境進行連結，並保留對 TW Core IG 的相容性。
            </p>
            <img />
            <ul style={{ margin: 0 }}>
              <li>調閱傷病患資料與派遣任務，並顯示於畫面上</li>
              <li>
                新增救護紀錄表（以 Composition 表示），其中各 Resource
                必須分別上傳至 FHIR Server 後，以 Reference
                進行聯結，救護紀錄表須包含以下各部資料（R 為必填、O 為選擇性）：
                <ul style={{ margin: 0 }}>
                  <li>
                    R: 派遣資料（Encounter)
                    <ul>
                      <li>R: 各流程時間</li>
                      <li>O: 送往醫院或地點</li>
                    </ul>
                  </li>
                  <li>
                    R: 傷病患資料（Patient)
                    <ul>
                      <li>
                        可引用 Track#1 SC3 建立的 Patient
                        資料，惟須補上本情境要求的 Patient 必填欄位
                      </li>
                    </ul>
                  </li>
                  <li>R: 現場狀況 (Condition)</li>
                  <li>O: 傷病患主訴（QuestionnaireResponse）</li>
                  <li>R: 過去病史（Condition）</li>
                  <li>R: 過敏史（AllergyIntolerance）</li>
                  <li>O: 處置項目（Procedure）</li>
                  <li>O: ALS 處置（Procedure）</li>
                  <li>O: 給藥（MedicationAdministration）</li>
                  <li>R: 生命跡象（Observation）</li>
                  <li>
                    急重症登錄
                    <ul style={{ margin: 0 }}>
                      <li>R: 心肺功能停止登錄（Observation）</li>
                      <li>O: OHCA 事故地點型態（Observation）</li>
                      <li>O: 疑似心肌梗塞登錄（Observation）</li>
                      <li>O: 符合疑似腦中風指標（Observation）</li>
                    </ul>
                  </li>
                  <li>O: 補述（Narrative）</li>
                  <li>R: 檢傷分級（RiskAssessment）</li>
                  <li>
                    <strike>O: 簽名（Consent &amp; Provenance）</strike>2022
                    不定義
                    <ul>
                      <li>僅記錄救護紀錄表填寫人員（Practitioner.name）</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                調閱救護紀錄表，並顯示於畫面上
                <ul style={{ margin: 0 }}>
                  <li>
                    以傷病患名稱（Patient.name）或唯一識別碼（Patient.Identifier）調閱
                  </li>
                  <li>以救護紀錄表唯一識別碼（Composition.id）調閱</li>
                </ul>
              </li>
            </ul>

            <h3>Scenario 2：重大傷病資料交換</h3>
            <p>
              <strong>說明：</strong>
              本情境今年度以 OHCA 及 Trauma
              資料交換為主，參考衛福部公告的重大創傷病摘與到院前心跳停止病摘欄位定義聯測項目。其餘
              ACS 與 CVA/Stroke
              兩項待標準公告後納入聯測項目。病摘定義的是到院後針對四大急重症的資料交換，並保留對
              TW Core IG 的相容性。參測單位須在 SC1
              建立救護紀錄表後，方可在本情境單獨進行生理量測資料交換。若參測單位單獨參加本項情境者，也可以使用大會事先建立的範例救護紀錄表進行聯結。
            </p>
            <ul style={{ margin: 0 }}>
              <li>
                調閱救護紀錄表，並顯示於畫面上
                <ul style={{ margin: 0 }}>
                  <li>
                    有參測 SC1 的單位，須先在 SC1 新增救護紀錄表後調閱該筆資料
                  </li>
                  <li>
                    沒有參測 SC1 的單位，須調閱大會事先建立的範例救護紀錄表資料
                  </li>
                </ul>
              </li>
              <li>
                新增重大傷病資料病摘（Composition），其中各 Resource
                必須分別上傳至 FHIR Server 後以 Reference
                進行聯結，下列至少須完成一項：
                <ul style={{ margin: 0 }}>
                  <li>到院前心跳停止病摘（OHCA）</li>
                  <li>重大創傷病摘（Trauma）</li>
                </ul>
              </li>
              <li>
                調閱重大傷病資料表單，並顯示於畫面上
                <ul style={{ margin: 0 }}>
                  <li>
                    以傷病患名稱（Patient.name）或唯一識別碼（Patient.Identifier）調閱
                  </li>
                  <li>以表單 id 調閱</li>
                </ul>
              </li>
            </ul>

            <h3>Scenario 3：生理量測資料交換</h3>
            <p>
              <strong>說明：</strong>
              本情境適用於儀器／設備廠商，主要針對救護車上的生理量測數據定義聯測項目。儀器經完成量測後直接上傳至
              FHIR Server 並與派遣案件（救護紀錄表）聯結，後續可應用於與 EEC
              進行資料交換的情境。參測單位須在 SC1
              建立救護紀錄表後，方可在本情境單獨進行生理量測資料交換。若參測單位單獨參加本項情境者，也可以使用大會事先建立的範例救護紀錄表進行聯結。
            </p>
            <ul style={{ margin: 0 }}>
              <li>
                調閱救護紀錄表，並顯示於畫面上
                <ul style={{ margin: 0 }}>
                  <li>
                    有參測 SC1 的單位，須先在 SC1 新增救護紀錄表後調閱該筆資料
                  </li>
                  <li>
                    沒有參測 SC1 的單位，須調閱大會事先建立的範例救護紀錄表資料
                  </li>
                </ul>
              </li>
              <li>
                新增生理量測資料（Observation），並至少須要完成以下其中一項：
                <ul style={{ margin: 0 }}>
                  <li>12 Leads ECG</li>
                  <li>Body Temperature</li>
                  <li>Respiratory Rate</li>
                  <li>Oxygen saturation in Arterial blood by Pulse oximetry</li>
                  <li>Capillary refill[Time] of Nail bed</li>
                  <li>Glucose [Mass/volume] in Blood</li>
                  <li>Heart rate by Pulse oximetry</li>
                  <li>Blood Pressure Panel</li>
                </ul>
              </li>
              <li>
                調閱傷病患在單一救護紀錄表上的所有量測資料，並顯示於畫面上
                <ul style={{ margin: 0 }}>
                  <li>
                    以傷病患名稱（Patient.name）或唯一識別碼（Patient.Identifier）調閱
                  </li>
                  <li>以表單 id 調閱</li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "4",
        Sc: "賽道通過基準",
        content: (
          <>
            <ul>
              <li>
                本賽道各情境（Scenario）的通過基準為獨立判斷，參測單位完成所有標記為
                R（必須）的聯測步驟時，才算完成該情境。
              </li>
              <li>
                參測單位通過一情境時，將會於核發的通過證明上註記通過的情境。
              </li>
              <li>
                僅完成部分項目者，核發的通過證明將註記「部分通過」與其通過項目，並於官網聯測松結果（Matrix）公告通過的項目。
              </li>
              <li>
                例如 A 廠商通過 SC1（所有交換項目）、SC3（僅有 12 Leads
                ECG），核發的通過證明將會如下註記：
              </li>
              <ul style={{ margin: 0 }}>
                <li>參測單位： A 廠商</li>
                <li>參測賽道： Track #7 緊急醫療救護情境賽道</li>
                <li>
                  通過項目： <br />
                  Scenario 1（完全通過）：通過所有流程，及所有資料交換項目。{" "}
                  <br />
                  Scenario 3（部分通過）：通過所有流程，及以下資料交換項目： 12
                  Leads ECG
                </li>
              </ul>
            </ul>
          </>
        ),
      },
      {
        id: "5",
        Sc: "參考標準",
        content: (
          <>
            <ol>
              <li>
                <a
                  style={{ textDecoration: "none", color: "#6d6875" }}
                  href="https://www.nfa.gov.tw/pro/index.php?code=list&amp;flag=detail&amp;ids=115&amp;article_id=6639"
                >
                  內政部消防署－消防機關救護紀錄表
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none", color: "#6d6875" }}
                  target="_blank"
                  href="https://emr.mohw.gov.tw/emr/doc/110/%E5%88%B0%E9%99%A2%E5%89%8D%E5%BF%83%E8%B7%B3%E5%81%9C%E6%AD%A2(OHCA)%E7%97%85%E6%91%98%E4%BA%A4%E6%8F%9B%E6%AC%84%E4%BD%8D%E8%88%87%E6%A0%BC%E5%BC%8F%E4%B9%8B%E6%A8%99%E6%BA%96%E8%A6%8F%E7%AF%84_1101213.pdf"
                >
                  EEC 到院前心跳停止病摘交換欄位與格式之標準規範
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none", color: "#6d6875" }}
                  target="_blank"
                  href="https://emr.mohw.gov.tw/emr/doc/110/%E9%87%8D%E5%A4%A7%E5%89%B5%E5%82%B7(TRAUMA)%E7%97%85%E6%91%98%E4%BA%A4%E6%8F%9B%E6%AC%84%E4%BD%8D%E8%88%87%E6%A0%BC%E5%BC%8F%E4%B9%8B%E6%A8%99%E6%BA%96%E8%A6%8F%E7%AF%84_1101213.pdf"
                >
                  EEC 重大創傷病摘交換欄位與格式之標準規範
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none", color: "#6d6875" }}
                  target="_blank"
                  href="https://emr.mohw.gov.tw/emr/doc/110/%E6%80%A5%E8%A8%BA%E7%97%85%E6%91%98%E4%BA%A4%E6%8F%9B%E6%AC%84%E4%BD%8D%E8%88%87%E6%A0%BC%E5%BC%8F%E4%B9%8B%E6%A8%99%E6%BA%96%E8%A6%8F%E7%AF%84_1101116.pdf"
                >
                  EEC 急診病摘交換欄位與格式之標準規範
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none", color: "#6d6875" }}
                  target="_blank"
                  href="https://fhir.ch/ig/ch-ems/index.html"
                >
                  瑞士緊急醫療實作指引 CH.EMS.IG
                </a>
              </li>
              <li>
                <a
                  style={{ textDecoration: "none", color: "#6d6875" }}
                  target="_blank"
                  href="https://build.fhir.org/ig/HL7/fhir-ips/"
                >
                  FHIR IPS 實作指引
                </a>
              </li>
              <li>臺灣核心規範實作指引</li>
            </ol>
          </>
        ),
      },
    ],
  },
  {
    Id: "8",
    TabTitle: "08",
    ContentTitle: "醫療保險理賠",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "簡介 (Summary)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "效益 (Benefits) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "詳細資訊(Details)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "涉及系統(Systems Affected)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "規格(Specification)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "其他(See Also)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
  },
  {
    Id: "9",
    TabTitle: "09",
    ContentTitle: "遠距醫療",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "簡介 (Summary)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "效益 (Benefits) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "詳細資訊(Details)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "涉及系統(Systems Affected)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "規格(Specification)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "其他(See Also)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
  },
  {
    Id: "10",
    TabTitle: "10",
    ContentTitle: "癌症登記",
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: "1",
        Sc: "簡介 (Summary)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "2",
        Sc: "效益 (Benefits) ",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "3",
        Sc: "詳細資訊(Details)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "4",
        Sc: "涉及系統(Systems Affected)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "規格(Specification)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: "6",
        Sc: "其他(See Also)",
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
    ],
  },
];
