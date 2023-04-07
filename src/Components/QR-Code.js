import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import axios from "axios";

function QRCodeGenerator() {
    const [qrCodeValue, setQRCodeValue] = useState("");

    useEffect(() => {
        const source = axios.CancelToken.source();
        axios
            .get("/qr-generator", {
                cancelToken: source.token,
                params: {
                    _: new Date().getTime(),
                },
            })
            .then((response) => {
                setQRCodeValue(response.data);
            })
            .catch((error) => {
                if (!axios.isCancel(error)) {
                    console.log(error);
                }
            });
        return () => {
            source.cancel();
        };
    }, []);

    return (
        <div>
            <QRCode value={qrCodeValue} />
        </div>
    );
}

export default QRCodeGenerator;
