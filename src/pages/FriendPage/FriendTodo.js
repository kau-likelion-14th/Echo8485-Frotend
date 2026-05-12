import React from "react";

import "../../styles/Todo.css";
import "../../styles/FriendTodo.css";

// 친구 상세 페이지에서 보여줄 임시 todo 데이터이다.
const dummyTodos = [
  { id: 1, text: "프론트 보충자료 읽기", category: "공부", completed: true },
  { id: 2, text: "FriendTodo 구현하기", category: "공부", completed: false },
  { id: 3, text: "동아리 회의", category: "동아리", completed: false },
];

// todo 카테고리별 스타일 정보이다.
const dummyCategories = {
  공부: { backgroundColor: "#E5F8F1", color: "#333" },
  일상: { backgroundColor: "#FFC8BE", color: "#333" },
  동아리: { backgroundColor: "#B6DAFF", color: "#333" },
};

const FriendTodo = ({ title = "To do List" }) => {
  // 현재 컴포넌트는 dummyTodos를 todo 목록 데이터로 사용한다.
  const todos = dummyTodos;

  // 현재 컴포넌트는 dummyCategories를 카테고리 스타일 정보로 사용한다.
  const categories = dummyCategories;

  return (
    <div className="friend-todo">
      <div className="todo-container">
        <div className="todo-header">
          {/* todo 제목 */}
          <div className="todo-title">{title}</div>
        </div>

        <div className="todo-list">
          {/* todo가 비어 있을 경우 */}
          {todos.length === 0 ? (
            <div className="friend-todo__empty">
              등록된 투두가 없습니다.
            </div>
          ) : (
            todos.map((t) => (
              <div
                key={t.id}
                className={`todo-item ${t.completed ? "done" : ""}`}
              >
                {/* 체크박스 */}
                <div
                  className={`checkbox ${t.completed ? "checked" : ""}`}
                />

                {/* todo 내용 */}
                <div className="todo-text">{t.text}</div>

                {/* 카테고리 */}
                <div
                  className="todo-category"
                  style={categories[t.category] ?? undefined}
                >
                  {t.category}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendTodo;