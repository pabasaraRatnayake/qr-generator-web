import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';

const QRCodeGenerator = () => {
    const [qrText, setQRText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/qr-generator');
            setQRText(result.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>QR Code Generator</h1>
            <QRCode value={qrText} />
        </div>
    );
}

export default QRCodeGenerator;
