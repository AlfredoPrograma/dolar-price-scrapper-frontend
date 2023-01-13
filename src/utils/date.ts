const getCurrentDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  
  const date = new Date().toLocaleDateString("es-VE", options)

  return date
}

export { getCurrentDate }