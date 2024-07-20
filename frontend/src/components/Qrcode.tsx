import { useLocation } from "react-router-dom";
import { Card, Row } from "antd";

const QRCodePage = () => {
  const location = useLocation();
  const qrCodeUrl = location.state?.qrCodeUrl; 
  console.log(qrCodeUrl)

  return (
    <Row style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} justify={"center"} align={"middle"}>
      <Card style={{ width: "50vw" }}>
        <h2>Your QR Code</h2>
        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="User QR Code" />
        ) : (
          <p>No QR code available.</p>
        )}
      </Card>
    </Row>
  );
};

export default QRCodePage;
