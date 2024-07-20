const getAge = () => {
  const ageEnter = new Date(1996, 2 - 1, 12, 0, 0, 0, 0)
  const dateNow = new Date()
  return dateNow.getFullYear() - ageEnter.getFullYear()
}

export default getAge
