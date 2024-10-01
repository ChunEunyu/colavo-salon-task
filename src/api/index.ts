import { Data } from "../types";

let cache: Data | undefined;

const request = async (url: string): Promise<Data> => {
  if (cache) {
    return cache
  }
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('데이터를 가져오는 중에 오류가 발생하였습니다.');
    }
        
    const data = await response.json() as Data;
    cache = data;

    return data;

  } catch (error) {
    throw new Error('데이터를 가져오는 중에 오류가 발생하였습니다.');
  }
}

export const fetchList = async (): Promise<Data> => {
  const api = 'https://us-central1-colavolab.cloudfunctions.net/requestAssignmentCalculatorData';
  return request(api);
};