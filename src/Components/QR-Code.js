import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
//import QRCode from "qrcode.react";
//import QrCode from "react-qr-svg";

function QRCodeGenerator() {
    const [qrCodeValue, setQRCodeValue] = useState("");

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/qr-generator?_=" + new Date().getTime(), true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                setQRCodeValue(xhr.responseText);
            }
        };
        xhr.send();
    }, []);

    return (
        <div>
            <QRCode value={qrCodeValue} />
        </div>
    );
}

export default QRCodeGenerator;



