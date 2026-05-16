import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteTask, updateTask } from "../../api/tasks";
import Calendar from "../Calendar/Calendar";

function PopBrowse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cards, refreshTasks } = useOutletContext();

  const currentCard = cards.find((card) => card._id === id);

  const [isEditing, setIsEditing] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // 1. Инициализируем стейт правильными ключами
  const [editData, setEditData] = useState({
    title: "",
    topic: "",
    status: "",
    description: "",
    date: new Date(),
  });

  useEffect(() => {
    if (currentCard) {
      setEditData({
        title: currentCard.title,
        topic: currentCard.topic,
        status: currentCard.status,
        description: currentCard.description || currentCard.text || "",
        date: currentCard.date ? new Date(currentCard.date) : new Date(),
      });
    }
  }, [currentCard]);

  if (!currentCard) return null;

  // 2. Функция форматирования даты для отображения под календарем
  const formatBrowseDate = (dateVal) => {
    if (!dateVal) return "";
    const dateObj = new Date(dateVal);
    return dateObj.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  };

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
              {/* Показываем измененный или текущий заголовок */}
              <h3 className="pop-browse__ttl">{editData.title}</h3>
              <div className={`categories__theme theme-top _active-category ${editData.topic === 'Web Design' ? '_orange' : editData.topic === 'Research' ? '_green' : '_purple'}`}>
                <p>{editData.topic}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"].map((st) => {
                  // Исправлено: определяем переменную isActive локально для каждого элемента массива
                  const isActive = editData.status === st;
                  return (
                    <div 
                      key={st}
                      onClick={() => isEditing && setEditData({ ...editData, status: st })}
                      // Исправлено: в режиме редактирования показываем все статусы для выбора, активный выделяем классом _gray
                      className={`status__theme ${isActive ? "_gray" : isEditing ? "" : "_hide"}`}
                      style={{ cursor: isEditing ? "pointer" : "default" }}
                    >
                      <p>{st}</p>
                    </div>
                  );
                })}
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
                    // Исправлено: функция обновления стейта использует setEditData вместо несуществующей setFormData
                    onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                  ></textarea>
                </div>
              </form>
              
              {/* Исправлено: Календарь теперь полностью контролируемый и обновляет дату в editData */}
              <Calendar
                selected={editData.date}
                setSelected={(newDate) => isEditing && setEditData({ ...editData, date: newDate })} 
              />
            </div>

            {/* Добавлено: Вывод текущей даты в правильном формате (как в макете) */}
            <div className="pop-browse__date-output" style={{ padding: "10px 0", color: "#94A6BE", fontSize: "14px" }}>
              <p>Срок исполнения: <span style={{ color: "#000", fontWeight: "500" }}>{formatBrowseDate(editData.date)}</span></p>
            </div>

            {error && <p style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>{error}</p>}

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
