import React, { useState, useRef } from 'react';

const Profile = ({ profileImageUrl }) => {//TODO: profileImageUrl props로 받아오기, const Profile = () => { } -> const Profile = ({ profileImageUrl }) => { } :props로 받아온 profileImageUrl이 있으면 그걸 보여주고, 없으면 기본 이미지 보여주기
    const [previewUrl, setPreviewUrl] = useState(null);// 새로 선택한 이미지 미리보기 
    const [, setSelectedImageFile] = useState(null); // 선택한 이미지 파일 
    const fileInputRef = useRef(null);
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];// 파일이 선택되지 않았을 때를 대비
        if (!file) return;// 파일이 없으면 함수 종료
        setSelectedImageFile(file);

        if (previewUrl) URL.revokeObjectURL(previewUrl);// 기존 미리보기 URL이 있으면 해제
        setPreviewUrl(URL.createObjectURL(file));
    };
    const handleClickEditIcon = () => {
        fileInputRef.current?.click();
    };
    const displayImageSrc = previewUrl || profileImageUrl;// 새로 선택한 이미지가 있으면 그걸 보여주고, 없으면 props로 받은 profileImageUrl 보여주기
    const hasImage = !!displayImageSrc;// 이미지 여부
    return (
        <div className="profile-container-wrapper">
            <div className="profile-section">
                <div className="profile-left">
                    <div className="profile-image-container">
                        {hasImage ? (
                            <img src={displayImageSrc} alt="Profile" className="profile-img" />
                        ) : (
                            <div className="profile-img-fallback">🦁</div>
                        )}
                        <button className="edit-icon-btn" onClick={handleClickEditIcon}>
                            ✎
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            accept="image/*"
                        />
                    </div>
                    <h2 className="nickname-display">Likelion#1253</h2>
                </div>
                <button className="save-btn">프로필 저장</button>
            </div>
            <div className="input-section">
                <div className="input-group">
                    <label>한 줄 소개</label>
                    <input type="text" placeholder="안녕하세요" />
                </div>
                <div className="input-group">
                    <label>좋아하는 노래</label>
                    <div className="song-input-wrapper">
                        <input type="text" placeholder="🎵 내꺼하자 - 인피니트" />
                        <span className="search-icon">🔍</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;