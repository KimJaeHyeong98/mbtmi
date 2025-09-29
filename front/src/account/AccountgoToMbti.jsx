import { useState } from "react";
import styled from "styled-components";
import Tesseract from "tesseract.js";

const MBTIOCR = ({ setMbti }) => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [filePreview, setFilePreview] = useState(null);

    // 이미지 전처리
    const preprocessImage = (file) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = img.width * 2;
                canvas.height = img.height * 2;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                const imageData = ctx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    const value = avg > 128 ? 255 : 0;
                    data[i] = data[i + 1] = data[i + 2] = value;
                }
                ctx.putImageData(imageData, 0, 0);
                canvas.toBlob((blob) => resolve(blob), "image/png");
            };
        });
    };

    // 파일 업로드 처리
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setFilePreview(URL.createObjectURL(file));

        setLoading(true);
        try {
            const processedBlob = await preprocessImage(file);
            const {
                data: { text },
            } = await Tesseract.recognize(processedBlob, "eng", {
                tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ-",
            });

            // MBTI 추출
            const cleanedText = text.replace(/-?[AT]\b/gi, "").toUpperCase();
            const mbtiMatch = cleanedText.match(/\b[EI][NS][FT][JP]\b/gi);
            const mbtiResult = mbtiMatch ? mbtiMatch[0] : null;

            setResult(mbtiResult || "결과를 찾을 수 없음");

            // 부모 함수로 전달
            if (mbtiResult && setMbti) {
                setMbti(mbtiResult);
            }
        } catch (error) {
            console.error(error);
            setResult("OCR 실패");
        } finally {
            setLoading(false);
        }
    };

    // 파일 제거
    const removeFile = () => {
        setFilePreview(null);
        setResult("");
    };

    return (
        <Container>
            <Title>사진으로 MBTI 추출하기</Title>

            <UploadWrapper>
                {filePreview ? (
                    <PreviewCard>
                        <img src={filePreview} alt="preview" />
                        <RemoveButton onClick={removeFile}>X</RemoveButton>
                    </PreviewCard>
                ) : (
                    <UploadLabel>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        클릭 또는 드래그하여 사진 업로드
                    </UploadLabel>
                )}
            </UploadWrapper>

            {loading && <StatusText>분석 중...</StatusText>}
            {result && <ResultText>MBTI 결과: {result}</ResultText>}
        </Container>
    );
};

export default MBTIOCR;

/* ------------------- styled-components ------------------- */

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    background: transparent;
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 30px;
    color: #333;
`;

const UploadWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const UploadLabel = styled.label`
    width: 250px;
    height: 250px;
    border: 2px dashed #aaa;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    font-weight: bold;
    color: #555;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.1),
        -6px -6px 15px rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;

    input {
        display: none;
    }

    &:hover {
        border-color: #888;
        background: rgba(255, 255, 255, 0.3);
    }
`;

const PreviewCard = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.1),
        -6px -6px 15px rgba(255, 255, 255, 0.3);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const RemoveButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(255, 0, 0, 0.7);
    border: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 50%;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: rgba(255, 0, 0, 0.9);
    }
`;

const StatusText = styled.p`
    margin-top: 10px;
    font-size: 16px;
    color: #666;
`;

const ResultText = styled.p`
    margin-top: 15px;
    font-size: 18px;
    font-weight: bold;
    color: #222;
`;
