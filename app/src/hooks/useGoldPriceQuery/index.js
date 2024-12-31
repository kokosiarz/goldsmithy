import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import config from '../../configuration/config'

const goldPriceApiUrl = config.urls.npbGoldPriceApi

export const useGoldPriceQuery = (params) => useQuery({
  queryKey: ['goldPrice'],
  queryFn: () =>
    axios
      .get(goldPriceApiUrl)
      .then((res) => res.data[0]),
  staleTime: 1000 * 60 * 5,
  ...params
})

export const useGoldPriceHistoryQuery = (params) => {
  const today = new Date();
  const monthAgo = new Date(today.getFullYear(), today.getMonth() - 12, today.getDate());
  const yearEnd = today.getFullYear();
  const monthEnd = String(today.getMonth() + 1).padStart(2, '0');
  const dayEnd = String(today.getDate()).padStart(2, '0');
  const yearStart = monthAgo.getFullYear();
  const monthStart = String(monthAgo.getMonth() + 1).padStart(2, '0');
  const dayStart = String(monthAgo.getDate()).padStart(2, '0');
  const formattedDateRange = `${yearStart}-${monthStart}-${dayStart}/${yearEnd}-${monthEnd}-${dayEnd}`
  return useQuery({
    queryKey: ['goldPriceHistory'],
    queryFn: () =>
      axios
        .get(`${goldPriceApiUrl}/${formattedDateRange}`)
        .then((res) => res.data.map((item) => ({ value: item.cena, label: item.data }))),
    staleTime: 1000 * 60 * 5,
    ...params
  })
}

export default useGoldPriceQuery
