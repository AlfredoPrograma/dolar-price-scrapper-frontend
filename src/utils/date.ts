const getCurrentDate = (date?: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  
  const formattedDate = new Date(date || Date.now()).toLocaleDateString("es-VE", options)

  return formattedDate
}

export { getCurrentDate }