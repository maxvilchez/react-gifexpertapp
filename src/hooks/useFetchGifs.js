import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGif"

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getGif(category)
      .then( images => setState({
        data: images,
        loading: false
      }))
  }, [category])

  return state
}
