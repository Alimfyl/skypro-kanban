import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { createTask } from "../../api/tasks";
import Calendar from "../Calendar/Calendar";

function PopNewCard() {
  const navigate = useNavigate();
  
  
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    topic: "Web Design", 
    description: "",
  });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { refreshTasks } = useOutletContext();

  const handleCreateTask = async (e) => {
    e.preventDefault();
    
    
    if (!formData.title.trim() || !formData.description.trim()) {
      setError("Заполните все поля");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      
      const taskData = {
        title: formData.title,
        topic: formData.topic,
        text: formData.description,
        date: selectedDate,
      };

      await createTask(taskData); 

      if(refreshTasks) refreshTasks();
      
      navigate("/"); 

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">✖</Link>
            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">Название задачи</label>
                  <input
                    id="formTitle"
                    className="form-new__input"
                    type="text"
                    name="title"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    autoFocus
                    required
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea"className="subttl">Описание задачи</label>
                  <textarea
                    id="textArea"
                    className="form-new__area"
                    name="description"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    required
                  ></textarea>
                </div>

            <button 
              type="submit"
              className="form-new__create _hover01" 
              disabled={isLoading}
            >
              {isLoading ? "Создание..." : "Создать задачу"}
            </button>

            {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

              </form>
              <Calendar selected={selectedDate} setSelected={setSelectedDate} />
            </div>
            
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {["Web Design", "Research", "Copywriting"].map((cat) => (
                  <div 
                    key={cat}
                    onClick={() => setFormData({ ...formData, topic: cat })}
                    className={`categories__theme ${cat === "Web Design" ? "_orange" : cat === "Research" ? "_green" : "_purple"} ${formData.topic === cat ? "_active-category" : ""}`}
                  >
                    <p>{cat}</p>
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
