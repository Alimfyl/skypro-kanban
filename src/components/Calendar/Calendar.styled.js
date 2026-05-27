export const calendarStyles = {
  calendar: {
    width: '100%',
    maxWidth: '340px',
    marginBottom: '20px',
  },
  calendarTtl: {
    marginBottom: '14px',
  },
  calendarP: {
    color: '#94A6BE',
    fontSize: '14px',
    lineHeight: '1',
  },
  calendarSpan: {
    color: '#000000',
  },
  calendarBlock: {
    display: 'block',
  },
  calendarPeriod: {
    padding: '0',
  },
  subttl: {
    color: '#000',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '1',
  },
  // Навигация и Шапка (Месяц, Год, Стрелки)
  calendarNav: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '14px',
    padding: '0',
  },
  calendarMonth: {
    color: '#94A6BE',
    fontSize: '14px',
    lineHeight: '25px',
    fontWeight: '600',
  },
  navActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navAction: {
    width: '18px',
    height: '25px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
  },
  // Сетка календаря (Контент)
  calendarContent: {
    marginBottom: '12px',
    width: '100%',
  },
  // Строка дней недели (Пн, Вт...) -> Жесткая сетка Grid
  calendarDaysNames: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    justifyItems: 'center',
    alignItems: 'center',
    margin: '7px 0',
    padding: '0',
  },
  calendarDayName: {
    color: '#94A6BE',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: '-0.2px',
  },
  // Сетка чисел месяца 
  calendarCells: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '4px',
    justifyItems: 'center',
  },
  // Базовая ячейка дня
  calendarCell: {
    width: '42px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#94A6BE',
    fontSize: '14px',
    lineHeight: '1',
    letterSpacing: '-0.2px',
    borderRadius: '50%',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  },
  // Состояния дней (Активный / Скрытый другой месяц)
  activeDay: {
    backgroundColor: '#94A6BE',
    color: '#FFFFFF',
  },
  currentToday: {
    fontWeight: '700',
  },
  otherMonth: {
    opacity: '0',
    pointerEvents: 'none',
  }
};
export const globalCalendarCSS = `
  /* База */
  .rdp-root {
    width: 100% !important;
  }
  .rdp-months {
    display: block !important;
  }
  .rdp-month {
    width: 100% !important;
  }

  /* Шапка (месяц + стрелки) */
  .rdp-caption {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    margin: 14px auto 7px auto !important;
    padding: 0 !important;
  }
  .rdp-caption_label {
    font-size: 14px !important;
    font-weight: 600 !important;
    color: #94A6BE !important;
  }
  .rdp-nav {
    display: flex !important;
    gap: 8px !important;
  }
  .rdp-nav_button {
    background: none !important;
    border: none !important;
    cursor: pointer !important;
    padding: 0 !important;
  }
  .rdp-nav_button svg {
    fill: #94A6BE !important;
    width: 14px !important;
    height: 14px !important;
  }

  /* Строка дней недели */
  .rdp-head_row {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr) !important;
    gap: 4px !important;
    justify-items: center !important;
    margin-bottom: 8px !important;
  }
  .rdp-head_cell {
    color: #94A6BE !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    text-align: center !important;
  }

  /* Сетка чисел */
  .rdp-tbody {
    display: block !important;
  }
  .rdp-row {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr) !important;
    gap: 4px !important;
    margin-bottom: 4px !important;
  }
  .rdp-cell {
    text-align: center !important;
  }
  .rdp-day {
    width: 28px !important;
    height: 28px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 12px !important;
    border-radius: 50% !important;
    background: none !important;
    border: none !important;
    cursor: pointer !important;
  }
  .rdp-day:hover {
    background-color: #EAEEF6 !important;
  }
  .rdp-day_selected {
    background-color: #94A6BE !important;
    color: white !important;
  }
  .rdp-day_outside {
    opacity: 0 !important;
    pointer-events: none !important;
  }
`;