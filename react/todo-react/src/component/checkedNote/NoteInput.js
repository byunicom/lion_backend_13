const NoteInput = ({ addHandler }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      addHandler(e.target.value.trim());
      e.target.value = ""; // 입력 필드 초기화
    }
  };

  return (
    <input
      type="text"
      placeholder="메모를 입력하고 Enter를 누르세요"
      onKeyDown={handleKeyDown}
      className="main_input"
    />
  );
};

export default NoteInput;
