// AddPost.jsx
import { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../globaltool/Container";

const API_BASE = import.meta.env?.VITE_API_BASE || "http://localhost:8080";

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [file, setFile] = useState(null); // 실제 파일
    const [preview, setPreview] = useState(""); // 미리보기 URL

    // 미리보기 URL 정리 (메모리 누수 방지)
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleImageChange = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        if (preview) URL.revokeObjectURL(preview);
        setFile(f);
        setPreview(URL.createObjectURL(f));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const fd = new FormData();
            fd.append("title", title);
            fd.append("body", text); // 백엔드 @RequestPart("body")
            if (file) fd.append("file", file);

            const res = await fetch(`${API_BASE}/posts`, {
                method: "POST",
                body: fd,
                // 인증이 쿠키 기반이면: credentials: "include",
            });

            const contentType = res.headers.get("content-type") || "";
            const payload = contentType.includes("application/json")
                ? await res.json()
                : await res.text();

            if (!res.ok) {
                console.error("Upload failed:", res.status, payload);
                alert("업로드 실패");
                return;
            }

            alert(`게시물이 등록되었습니다! #${payload?.id ?? ""}`);

            // 폼 초기화
            setTitle("");
            setText("");
            setFile(null);
            if (preview) URL.revokeObjectURL(preview);
            setPreview("");
        } catch (err) {
            console.error(err);
            alert(err.message || "에러가 발생했습니다.");
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <TitleInput
                    type="text"
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <ImageBox>
                    {preview ? (
                        <Preview src={preview} alt="preview" />
                    ) : (
                        <Placeholder>사진을 선택하세요</Placeholder>
                    )}
                    <FileInput
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </ImageBox>

                <TextArea
                    placeholder="내용을 입력하세요..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <SubmitBtn type="submit">등록하기</SubmitBtn>
            </Form>
        </Container>
    );
};

export default AddPost;

/* ===== styles ===== */
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
`;

const TitleInput = styled.input`
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const ImageBox = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    border: 2px dashed #aaa;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Preview = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Placeholder = styled.span`
    color: #888;
    font-size: 16px;
`;

const FileInput = styled.input`
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
`;

const TextArea = styled.textarea`
    min-height: 120px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    resize: vertical;
`;

const SubmitBtn = styled.button`
    padding: 14px;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;
