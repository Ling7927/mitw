import logo from "../../assets/Logo.png"
import Ts1 from "../../assets/Ts1.png"
export const TraksTabInform=[
    {id:"1" ,TabTitle:"#01",ContentTitle:"TRACK#1 - 病人基本資料",Img:[{"img":logo},{"img":logo},{"img":logo}],List:[{"id":"1","Sc":"Scenario 1 病人身分確認用"}, {"id":"2","Sc":"Scenario 2 聯繫病人用 "},{"id":"3","Sc":"Scenario 3：院外系統 "},{"id":"4","Sc":"Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) "}],Sc1:<div><img src={logo}/></div>,},
    {id:"2" ,TabTitle:"#02",ContentTitle:"TRACK#2 - 生理量測資訊",Img:[{"img":logo},{"img":logo},{"img":logo}],List:[{"id":"1","Sc":"Scenario 1 病人身分確認用"}, {"id":"2","Sc":"Scenario 2 聯繫病人用 "},{"id":"3","Sc":"Scenario 3：院外系統 "},{"id":"4","Sc":"Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) "}],Sc1:<div><img src={logo}/></div>,},
    {id:"3" ,TabTitle:"#03",ContentTitle:"TRACK#3 - 處方用藥及文件打包",Img:[{"img":logo},{"img":logo},{"img":logo}],List:[{"id":"1","Sc":"Scenario 1 病人身分確認用"}, {"id":"2","Sc":"Scenario 2 聯繫病人用 "},{"id":"3","Sc":"Scenario 3：院外系統 "},{"id":"4","Sc":"Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) "}],Sc1:<div><img src={logo}/></div>,},
    {id:"4" ,TabTitle:"#04",ContentTitle:"TRACK#4 - 醫學影像與病理",Img:[{"img":logo},{"img":logo},{"img":logo}],List:[{"id":"1","Sc":"Scenario 1 病人身分確認用"}, {"id":"2","Sc":"Scenario 2 聯繫病人用 "},{"id":"3","Sc":"Scenario 3：院外系統 "},{"id":"4","Sc":"Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) "}],Sc1:<div><img src={logo}/></div>,},
    {id:"5" ,TabTitle:"#05",ContentTitle:"TRACK#5 - 偕同照護",Img:[{"img":logo},{"img":logo},{"img":logo}],List:[{"id":"1","Sc":"Scenario 1 病人身分確認用"}, {"id":"2","Sc":"Scenario 2 聯繫病人用 "},{"id":"3","Sc":"Scenario 3：院外系統 "},{"id":"4","Sc":"Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) "}],Sc1:<div><img src={logo}/></div>,},
    {id:"6" ,TabTitle:"#06",ContentTitle:"TRACK#6 - 基因體標記",Img:[{"img":logo},{"img":logo},{"img":logo}],List:[{"id":"1","Sc":"Scenario 1 病人身分確認用"}, {"id":"2","Sc":"Scenario 2 聯繫病人用 "},{"id":"3","Sc":"Scenario 3：院外系統 "},{"id":"4","Sc":"Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) "}],Sc1:<div><img src={logo}/></div>,},
    {id:"7" ,TabTitle:"#07",ContentTitle:"TRACK#7 - 緊急醫療救護",Img:[{"img":logo},{"img":logo},{"img":logo}],List:[{"id":"1","Sc":"Scenario 1 病人身分確認用"}, {"id":"2","Sc":"Scenario 2 聯繫病人用 "},{"id":"3","Sc":"Scenario 3：院外系統 "},{"id":"4","Sc":"Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) "}],Sc1:<div><img src={logo}/></div>,},
    {id:"8" ,TabTitle:"#08",ContentTitle:"TRACK#8 - 醫療保險",Img:[{"img":logo},{"img":logo},{"img":logo}],List:[{"id":"1","Sc":"Scenario 1 病人身分確認用"}, {"id":"2","Sc":"Scenario 2 聯繫病人用 "},{"id":"3","Sc":"Scenario 3：院外系統 "},{"id":"4","Sc":"Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) "}],Sc1:<div><img src={logo}/></div>,},
    {id:"9" ,TabTitle:"#09",ContentTitle:"TRACK#9 - 遠距醫療",Img:[{"img":logo},{"img":logo},{"img":logo}],List:[{"id":"1","Sc":"Scenario 1 病人身分確認用"}, {"id":"2","Sc":"Scenario 2 聯繫病人用 "},{"id":"3","Sc":"Scenario 3：院外系統 "},{"id":"4","Sc":"Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) "}],Sc1:<div><img src={logo}/></div>,},
    {id:"10" ,TabTitle:"#10",ContentTitle:"TRACK#10 - 癌症登記",Img:[{"img":logo},{"img":logo},{"img":logo}],List:[{"id":"1","Sc":"Scenario 1 病人身分確認用"}, {"id":"2","Sc":"Scenario 2 聯繫病人用 "},{"id":"3","Sc":"Scenario 3：院外系統 "},{"id":"4","Sc":"Scenario 4 (2022已移除，整併進Track #7緊急醫療救護) "}],Sc1:<div><img src={logo}/></div>,},
];

const Scenarios=[
    {S1:<><img src={Ts1}/><h4>Scenario 1 病人身分確認用</h4><ul><li>執行各項護理技術、檢查、治療、手術等醫療處置前對病人做身分確認</li><li>例如：在診療前，醫護人員請病人提供基本資訊如姓名、生日用以核對病人身分是否正確</li></ul></>,
    S2:<><h4>Scenario 2 聯繫病人用</h4><ul><li>聯絡方式如手機、email…用以聯絡病人</li><li>通訊地址如住家地址、工作地址</li></ul><h4>兩種用途的病人資料將共用相同的識別碼如身分證、護照、居留證、病歷號</h4></>,
    S3:<><h4>院外系統</h4><h5>情境</h5><ul><li>Patient ID 串接其他兩種 Resource 資料並適當呈現</li><li>病人保有自己的PHR Patient ID，可透過PHR的授權機制授權醫護人員調用個人的健康資訊</li></ul><h5>範例</h5><ul><li>病人就醫時提供個人的PHR Patient ID，並授權醫護人員可對此ID對應的PHR個案資料調用和操作</li></ul><h5>注意</h5><ul><li>參加 SC3 聯測時，產品必須同時通過 Track Observation(WG2) 或 Track Medication(WG3) 才算通過</li><li>範例：通過 WG1/SC3 + WG2 任一 SC、或 WG1/SC3 + WG3 任一 SC</li></ul></>,
    S4:<></>},
    {S1:<></>}
]