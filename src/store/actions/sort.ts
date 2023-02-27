import { SortActionTypes } from '../redusers/types'

export const changeSortParam = (param: string) => {
    return {
        type: SortActionTypes.SORT_BY,
        payload: param
    }
}

export const changeFilterParam = (param: string) => {
    return {
        type: SortActionTypes.FILTER_BY_GENRE,
        payload: param
    }
}