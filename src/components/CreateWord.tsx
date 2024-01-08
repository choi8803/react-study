import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router";
import { IDay } from './DayList';

export default function CreateWord() {
  const days:IDay[] = useFetch('http://localhost:3001/days');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;
      
      setIsLoading(true);
      fetch(`http://localhost:3001/words`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false
        }),
      }).then(res => {
        if (res.ok) {
          alert("생성이 완료 되었습니다.");
          navigate(`/day/${day}`);
          setIsLoading(true);
        }
      });  
    }
  }

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef}></input>
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>{day.day}</option>
          ))}
        </select>
      </div>
      <button style={{opacity: isLoading ? 0.3 : 1}}>{isLoading ? "저장중..." : "저장"}</button>
    </form>
  );
}