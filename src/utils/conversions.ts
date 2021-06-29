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
}

export { Conversions }
