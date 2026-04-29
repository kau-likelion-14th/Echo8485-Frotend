import React, { useEffect, useState } from "react";
import "../../styles/Todo.css";
import "../../styles/RoutineModal.css";

const Days = ["월", "화", "수", "목", "금", "토", "일"];

const RoutineModal = ({
    isOpen,
    onClose,
    onSave,
    initialRoutine,
}) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [repeatDays, setRepeatDays] = useState([]);

    useEffect(() => {
        if (!isOpen) return;

        setStartDate(initialRoutine?.startDate || "");
        setEndDate(initialRoutine?.endDate || "");
        setRepeatDays(initialRoutine?.repeatDays || []);
    }, [isOpen, initialRoutine]);

    const handleDayToggle = (idx) => {
        setRepeatDays((prev) => {
            if (prev.includes(idx)) {
                return prev.filter((day) => day !== idx);
            }

            return [...prev, idx];
        });
    };

    const handleSave = () => {
        if (repeatDays.length === 0) {
            alert("반복 요일을 선택해주세요.");
            return;
        }

        onSave({
            startDate,
            endDate,
            repeatDays,
        });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="routine-header">
                    <div
                        className="routine-close"
                        onClick={onClose}
                    >
                        {"‹"}
                    </div>

                    <div className="routine-title">
                        루틴 등록하기
                    </div>
                </div>

                <div className="modal-section">
                    <div className="modal-label">
                        시작 날짜
                    </div>

                    <div className="date-wrapper">
                        <input
                            type="date"
                            className="date-input"
                            value={startDate}
                            onChange={(e) =>
                                setStartDate(e.target.value)
                            }
                        />

                        <div className="date-initial">
                            {startDate || "없음"}
                        </div>
                    </div>
                </div>

                <div className="modal-section">
                    <div className="modal-label">
                        종료 날짜
                    </div>

                    <div className="date-wrapper">
                        <input
                            type="date"
                            className="date-input"
                            value={endDate}
                            onChange={(e) =>
                                setEndDate(e.target.value)
                            }
                        />

                        <div className="date-initial">
                            {endDate || "없음"}
                        </div>
                    </div>
                </div>

                <div className="modal-section">
                    <div className="modal-label">
                        반복
                    </div>

                    <div className="modal-categories">
                        {Days.map((day, idx) => (
                            <label
                                key={day}
                                className={`modal-categoryitem ${
                                    repeatDays.includes(idx)
                                        ? "on"
                                        : ""
                                }`}
                            >
                                <span>{day}</span>

                                <input
                                    type="checkbox"
                                    value={idx}
                                    checked={repeatDays.includes(idx)}
                                    onChange={() =>
                                        handleDayToggle(idx)
                                    }
                                />
                            </label>
                        ))}
                    </div>
                </div>

                <div className="modal-actions">
                    <button
                        className="leftbutton2"
                        onClick={onClose}
                    >
                        취소
                    </button>

                    <button
                        className="rightbutton"
                        onClick={handleSave}
                    >
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoutineModal;