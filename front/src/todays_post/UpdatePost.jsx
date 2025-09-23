import { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../globaltool/Container";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE = import.meta.env?.VITE_API_BASE || "http://localhost:8080";

const UpdatePost = () => {
    const [text, setText] = useState("");
    const [file, setFile] = useState(null); // 실제 파일
    const [preview, setPreview] = useState(""); // 미리보기 URL
    const { postId } = useParams();
    const navigate = useNavigate();

    // ✅ 기존 게시글 불러오기
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`${API_BASE}/posts/${postId}`, {
                    credentials: "include",
                });
                if (!res.ok) throw new Error("게시글 불러오기 실패");
                const data = await res.json();

                setText(data.text);
                if (data.image_url) {
                    setPreview(`${API_BASE}/uploads/${data.image_url}`);
                }
            } catch (err) {
                console.error(err);
                alert("게시글 불러오기에 실패했습니다.");
            }
        };
        fetchPost();
    }, [postId]);

    // ✅ 미리보기 URL 정리 (메모리 누수 방지)
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    // ✅ 이미지 선택 시
    const handleImageChange = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        if (preview) URL.revokeObjectURL(preview);
        setFile(f);
        setPreview(URL.createObjectURL(f));
    };

    // ✅ 수정 요청
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fd = new FormData();
            fd.append("text", text);
            if (file) fd.append("file", file);

            const res = await fetch(`${API_BASE}/posts/${postId}`, {
                method: "PUT",
                body: fd,
                credentials: "include",
            });

            if (!res.ok) {
                const msg = await res.text();
                throw new Error(msg || "업데이트 실패");
            }

            alert("게시물이 수정되었습니다!");
            navigate("/postmain");
        } catch (err) {
            console.error(err);
            alert(err.message || "수정 중 오류 발생");
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <HeaderBox>게시글 수정</HeaderBox>
                <hr />
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

                <SubmitBtn type="submit">수정하기</SubmitBtn>
            </Form>
        </Container>
    );
};

export default UpdatePost;

/* ===== styles ===== */
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
`;

const HeaderBox = styled.div`
    color: white;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
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
