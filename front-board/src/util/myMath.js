import axios from "axios";

export const age = 30;
export const name = 'kim';

export function test1() {
  console.log(1)
}

export const test2 = () => {
  console.log(2)
}

export const getData = async () => {
  try {
    const response = await axios.get('url')
    console.log(response.data)
    
  } catch (error) {
    console.error(error)
  }
}