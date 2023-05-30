import WG from "../../assets/collaboration.png"
import Mo from "../../assets/recruitment.png"
const Title=[
    {
    title:"工作小組志工 (Work Group Volunteer)",
    instructions:"邀請國內醫療資訊標準之領域專家(Domain Expert)以及開發IHE Domain專家、業界專家、IT管理者具備技術背景以及具有系統整合實務經驗者、以及DICOM與HL7專家參加工作小組(Work Group)，工作小組根據不同的領域以及應用情境，在面對面聯測活動前，針對不同賽道主題，分成多個標準工作小組，將招募會邀請國內醫療資訊標準專家(Domain Expert)、健康醫療領域專家等，並定期召集會議，確立、產生及公告規範。以下為招募條件以及資訊整理:",
    },
    {
    title:"聯測督察員招募(Monitor)",
    instructions:"邀請國內醫療資訊標準之領域專家(Domain Expert)以及開發IHE Domain專家、非受雇於聯測參加的機構(廠商)、IT管理者具備技術背景以及具有系統整合實務經驗者、以及DICOM與HL7專家擔任聯測督察員工作。主要負責聯測活動期間使用聯測主機與實際查訪提供驗證與測試結果，解析從儀器或系統產生的檔案與log進行除錯與問題排除，並提供聯測參加者(工程師)等排除技術性相關問題。以下為招募條件以及資訊整理:"
    }];


const Subtitle=[
    {li:[<div><h5 style={{borderBottom:"1px solid red"}}>條件</h5><ul><li>醫資標準(技術專家)以及健康醫療(領域專家)專家</li><li>由國內醫學工程/資訊/公衛/醫管等相關公協會推薦</li></ul></div>,
    <div ><h5>工作內容</h5><ul><li>善於溝通協調、定期召集會議(每月一兩次)</li><li>整理會議記錄、規格網頁、測試資料、教材…</li></ul></div>,
    <div><h5>義務</h5><ul><li>定期召開及參與會議</li><li>確立、產生、及公告規範</li><li>協助推廣通過聯測之產品</li></ul></div>,
    <div><h5>權利</h5><ul><li>優惠或免費參與</li><li>教育訓練、證照考試、聯測、交流活動</li><li>輔導及補助提研究計畫</li><li>基於確立之規範，協助提研發及試行計畫</li><li>標準協會協助推廣研發成果，並保護研發單位之智財權</li></ul></div>,
    <div><h5>榮譽</h5><ul><li>具名公告標準規格及範例，有可能多年長期被引用</li></ul></div>]
    },
    {
    li:[<div><h5>條件</h5><ul><li>領域專家(Domain Expert)以及開發IHE Domain專家</li><li>IT 管理者具備技術背景以及具有系統整合實務經驗</li><li>熟悉醫療資訊標準</li><li>對於協助工程師解決問題有興趣</li><li>醫院、工程師、學術單位、志工</li></ul></div>,
    <div><h5>領域</h5><ul><li>標準專家: IHE, DICOM, HL7, HL7 FHIR</li></ul></div>,
    <div><h5>責任與工作</h5><ul><li>需全程參與 (3.5天)</li><li>協助聯測團隊排除問題</li><li>使用工具或自我專業知識提供驗證與測試結果</li><li>大會提供交通、住宿以及餐費</li></ul></div>,
    <div><h5>利益迴避</h5><ul><li style={{color:"#CE2029"}}>督察員不可審核所屬單位與公司之產品</li></ul></div>]
    }
];

const WorkGrop=[ {
    title:"工作小組志工 (Work Group Volunteer)",
    instructions:"邀請國內醫療資訊標準之領域專家(Domain Expert)以及開發IHE Domain專家、業界專家、IT管理者具備技術背景以及具有系統整合實務經驗者、以及DICOM與HL7專家參加工作小組(Work Group)，工作小組根據不同的領域以及應用情境，在面對面聯測活動前，針對不同賽道主題，分成多個標準工作小組，將招募會邀請國內醫療資訊標準專家(Domain Expert)、健康醫療領域專家等，並定期召集會議，確立、產生及公告規範。",
    li:[<p>以下為招募條件以及資訊整理:</p>,
    <div style={{marginTop:"2rem"}}><h5 style={{borderBottom:"3px solid #257FDA"}}>條件</h5><ul style={{margin:0}}><li>醫資標準(技術專家)以及健康醫療(領域專家)專家</li><li>由國內醫學工程/資訊/公衛/醫管等相關公協會推薦</li></ul></div>,
    <div style={{marginTop:"2rem"}}><h5 style={{borderBottom:"3px solid #3E8EDE"}}>工作內容</h5><ul style={{margin:0}}><li>善於溝通協調、定期召集會議(每月一兩次)</li><li>整理會議記錄、規格網頁、測試資料、教材…</li></ul></div>,
    <div style={{marginTop:"2rem"}}><h5 style={{borderBottom:"3px solid #5199E1"}}>義務</h5><ul style={{margin:0}}><li>定期召開及參與會議</li><li>確立、產生、及公告規範</li><li>協助推廣通過聯測之產品</li></ul></div>,
    <div style={{marginTop:"2rem"}}><h5 style={{borderBottom:"3px solid #7CB2E9"}}>權利</h5><ul style={{margin:0}}><li>優惠或免費參與</li><li>教育訓練、證照考試、聯測、交流活動</li><li>輔導及補助提研究計畫</li><li>基於確立之規範，協助提研發及試行計畫</li><li>標準協會協助推廣研發成果，並保護研發單位之智財權</li></ul></div>,
    <div style={{marginTop:"2rem"}}><h5 style={{borderBottom:"3px solid #BED9F4"}}>榮譽</h5><ul style={{margin:0}}><li>具名公告標準規格及範例，有可能多年長期被引用</li></ul></div>],
    img:WG,
    
},
{
    title:"聯測督察員招募(Monitor)",
    instructions:"邀請國內醫療資訊標準之領域專家(Domain Expert)以及開發IHE Domain專家、非受雇於聯測參加的機構(廠商)、IT管理者具備技術背景以及具有系統整合實務經驗者、以及DICOM與HL7專家擔任聯測督察員工作。主要負責聯測活動期間使用聯測主機與實際查訪提供驗證與測試結果，解析從儀器或系統產生的檔案與log進行除錯與問題排除，並提供聯測參加者(工程師)等排除技術性相關問題。",
    li:[<p>以下為招募條件以及資訊整理:</p>,
    <div style={{marginTop:"2rem"}}><h5 style={{borderBottom:"3px solid #FF8C00" }}>條件</h5><ul style={{margin:0}}><li>領域專家(Domain Expert)以及開發IHE Domain專家</li><li>IT 管理者具備技術背景以及具有系統整合實務經驗</li><li>熟悉醫療資訊標準</li><li>對於協助工程師解決問題有興趣</li><li>醫院、工程師、學術單位、志工</li></ul></div>,
    <div style={{marginTop:"2rem"}}><h5 style={{borderBottom:"3px solid #FF9D24"}}>領域</h5><ul style={{margin:0}}><li>標準專家: IHE, DICOM, HL7, HL7 FHIR</li></ul></div>,
    <div style={{marginTop:"2rem"}}><h5 style={{borderBottom:"3px solid #FFAD49"}}>責任與工作</h5><ul style={{margin:0}}><li>需全程參與 (3.5天)</li><li>協助聯測團隊排除問題</li><li>使用工具或自我專業知識提供驗證與測試結果</li><li>大會提供交通、住宿以及餐費</li></ul></div>,
    <div style={{marginTop:"2rem"}}><h5 style={{borderBottom:"3px solid #FFC680"}}>利益迴避</h5><ul style={{margin:0}}><li style={{color:"#CE2029"}}>督察員不可審核所屬單位與公司之產品</li></ul></div>],
    img:Mo,
   
    }
];

export {Title,Subtitle,WorkGrop}