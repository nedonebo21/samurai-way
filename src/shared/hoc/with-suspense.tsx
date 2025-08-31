import {ComponentType, Suspense} from "react";
import {Preloader} from "../ui/preloader/preloader";

export const withSuspense = (Component: ComponentType) => {
  return (props: any) => {
    return (
        <Suspense fallback={<Preloader/>}>
          <Component {...props}/>
        </Suspense>
    )
  }
}