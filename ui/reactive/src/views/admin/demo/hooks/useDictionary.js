import { useEffect, useState } from "react"


const fetchDictionary = async () => {
  const data = await fetch("https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt")
  const text = await data.text()
  return text.split("\r\n")
}

export const useDictionary = () => {
    console.log('use dictionary called');
  const [dictionary, setDictionary] = useState([]);
  useEffect(() => {
    fetchDictionary().then(setDictionary);
    console.log('useEffect in dictionary called');
  }, []);

  return dictionary;
}
