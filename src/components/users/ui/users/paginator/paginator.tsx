import s from "../users.module.css";
import {Button} from "../../../../../shared/ui/button/button";
import React, {useState} from "react";

type Props = {
  onPageChanged: (pageNumber: number) => void
  currentPage: number
  portionSize?: number
  totalUsersCount: number
  pageSize: number
};
export const Paginator = ({onPageChanged, currentPage, portionSize = 10, totalUsersCount, pageSize}: Props) => {

  const pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionNumber = portionNumber * portionSize

  const isPrevButtonDisplay = portionNumber > 1 && <Button className={s.prev_next_btn} onClick={() => {
    setPortionNumber(prevState => prevState - 1)
  }}>Prev</Button>
  const isNextButtonDisplay = portionCount > portionNumber && <Button className={s.prev_next_btn} onClick={() => {
    setPortionNumber(prevState => prevState + 1)
  }}>Next</Button>

  const filteredPages = pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)

  return (
      <div className={s.btn_block}>
        {isPrevButtonDisplay}

        {filteredPages.map(el => {
          return <Button
              disabled={currentPage === el}
              className={currentPage === el ? s.selected_page : ''}
              onClick={() => {
                onPageChanged(el)
              }}>{el}</Button>
        })}

        {isNextButtonDisplay}
      </div>
  )
}