import s from "../users.module.css";
import {Button} from "../../../../../shared/ui/button/button";
import React from "react";

type Props = {
  pages: number[]
  onPageChanged: (pageNumber: number) => void
  currentPage: number
};
export const Paginator = ({pages, ...props}: Props) => {
  return (
      <div className={s.btn_block}>
        {pages.map(el => {
          return <Button
              disabled={props.currentPage === el}
              className={props.currentPage === el ? s.selected_page : ''}
              onClick={() => {
                props.onPageChanged(el)
              }}>{el}</Button>
        })}
      </div>
  )
}