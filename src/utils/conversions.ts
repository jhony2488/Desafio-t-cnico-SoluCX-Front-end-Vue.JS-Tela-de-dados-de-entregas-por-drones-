/* eslint-disable */
class Conversions {
  FirstCapitalLetterinaString(name: string) {
    const str = name
    const capitalized = str[0].toUpperCase() + str.substr(1)
    return capitalized
  }

  StringInNumber(str: string) {
    return Number(str)
  }
  VelocityInDroneInNumberInteger(number: number) {
    const n = number
    const numero = `${n}`
    const getNumber = numero.split('.')[0]
    const getNumberInteger = parseInt(getNumber)
    return getNumberInteger
  }
  VelocityInDroneGetNumberAfterPoint(number: number) {
    const n = number
    const numero = `${n}`
    const getNumber= numero.split('.')[1][0]
    const getNumberInteger = parseInt(getNumber)
    return getNumberInteger
  }
}

export { Conversions }
