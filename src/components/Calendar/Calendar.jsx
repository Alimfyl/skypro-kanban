import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ru } from "date-fns/locale";

function Calendar ( {selected, setSelected} ) {

    return(
        <div className="pop-new-card__calendar calendar">
									<p className="calendar__ttl subttl">Даты</p>
									<div className="calendar__block">
										{/* Блок с новым календарём */}
										<div className="calendar__content" style={{ display: "block"}}>
											<DayPicker
											mode="single"
											locale={ru}
											selected={selected}
											onSelect={(date) => setSelected && setSelected(date || new Date())}
											modifiersStyles={{
												selected: {
													backgroundColor: "#94A6BE",
													color: "white",
													borderRadius: "50%",
												},
											}}/>
											
										</div>
										
										
								
										<input
										type="hidden"
										id="datepick_value"
										value={selected ? selected.toLocaleDateString("ru-RU") : ""}
										readOnly
										defaultValue="08.09.2023"/>
										
									</div>
								</div>
    )
}
export default Calendar