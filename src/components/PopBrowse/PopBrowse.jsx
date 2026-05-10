import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteTask, updateTask } from "../../api/tasks";
import Calendar from "../Calendar/Calendar";

function PopBrowse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cards, refreshTasks } = useOutletContext(); // Получаем данные из MainPage

  // Находим нужную карточку в общем списке
  const currentCard = cards.find((card) => card._id === id);

  // Состояния
  const [isEditing, setIsEditing] = useState(false); // Режим редактирования
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Состояние для редактируемых данных
  const [editData, setEditData] = useState({
    title: "",
    topic: "",
    status: "",
    description: "",
  });

  // Заполняем поля, когда карточка найдена
  useEffect(() => {
    if (currentCard) {
      setEditData({
        title: currentCard.title,
        topic: currentCard.topic,
        status: currentCard.status,
        description: currentCard.description,
      });
    }
  }, [currentCard]);

  if (!currentCard) return null;

  // Удаление задачи
  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm("Вы уверены, что хотите удалить задачу?")) return;

    setIsLoading(true);
    try {
      await deleteTask(id);
      refreshTasks();
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Сохранение изменений
  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateTask(id, editData);
      refreshTasks();
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{currentCard.title}</h3>
              <div className={`categories__theme theme-top _active-category ${currentCard.topic === 'Web Design' ? '_orange' : currentCard.topic === 'Research' ? '_green' : '_purple'}`}>
                <p>{currentCard.topic}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {["Нужно сделать", "В работе", "Тестирование", "Готово"].map((st) => (
                  <div 
                    key={st}
                    onClick={() => isEditing && setEditData({ ...editData, status: st })}
                    className={`status__theme ${editData.status === st ? "_gray" : "_hide"} ${isEditing ? "_active-status" : ""}`}
                    style={{ cursor: isEditing ? "pointer" : "default" }}
                  >
                    <p>{st}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse">
                <div className="form-browse__block">
                  <label className="subttl">Описание задачи</label>
                  <textarea
                    className="form-browse__area"
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                    value={editData.description}
                    onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                  ></textarea>
                </div>
              </form>
              <Calendar periodText="Срок исполнения:" date={currentCard.date} />
            </div>

            {error && <p style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>{error}</p>}

            {/* Группа кнопок: переключается в зависимости от isEditing */}
            {!isEditing ? (
              <div className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button className="btn-browse__edit _btn-bor _hover03" onClick={() => setIsEditing(true)}>
                    Редактировать задачу
                  </button>
                  <button className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete} disabled={isLoading}>
                    Удалить задачу
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01" onClick={() => navigate("/")}>
                  Закрыть
                </button>
              </div>
            ) : (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button className="btn-edit__edit _btn-bg _hover01" onClick={handleSave} disabled={isLoading}>
                    {isLoading ? "Сохранение..." : "Сохранить"}
                  </button>
                  <button className="btn-edit__edit _btn-bor _hover03" onClick={() => setIsEditing(false)}>
                    Отменить
                  </button>
                  <button className="btn-edit__delete _btn-bor _hover03" onClick={handleDelete} disabled={isLoading}>
                    Удалить задачу
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01" onClick={() => navigate("/")}>
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopBrowse;
