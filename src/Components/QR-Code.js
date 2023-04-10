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
            <QRCode value={qrText} />
        </div>
    );
}

export default QRCodeGenerator;


// import React from "react";
// import QRCode from "qrcode.react";
//
// function QRCodeComponent(props) {
//     return (
//         <QRCode
//             value={props.text}
//             size={props.size || 256} // default size is 256
//             bgColor={props.bgColor || "#FFFFFF"} // default background color is white
//             fgColor={props.fgColor || "#000000"} // default foreground color is black
//         />
//     );
// }
//
// export default QRCodeComponent;
