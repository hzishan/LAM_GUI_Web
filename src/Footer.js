import './css_styled/App.css';
function Footer() {
  return (
    <div className="footer">
        <p>隱私權保護 | 資訊安全 | 著作權聲明</p>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <p style={{paddingRight:"10px"}}>ncu oolab</p>
            <p>版權所有</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <p>Copyright © 2024 NCU &ensp;</p>
            <p>Artificial Intelligence Innovation & Application Labortory&ensp;</p>
            <p>All rights reserved.</p>
        </div>
    </div>
  );
} 

export default Footer;