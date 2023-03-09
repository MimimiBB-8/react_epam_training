import { string } from 'yup';
import { DataActionTypes } from './../reducers/types';
import { dataReducer, initialState } from "./dataReducer";
import { DataAction } from "./types";


describe("data reducer", () => {
    describe("selectedSubreddit", () => {
        it("should return the default state", () => {
            expect(dataReducer(undefined, {})).toBe(initialState);
        });

        it("FETCH_DATA", () => {
            const action = {
                type: DataActionTypes.FETCH_DATA,
                payload: undefined
            };
            expect(dataReducer(initialState, action)).toEqual({ ...initialState, loading: true });
        });
        it('FETCH_DATA_SUCCESS', () => {
            const action = {
                type: DataActionTypes.FETCH_DATA_SUCCESS,
                payload: []
            }
            expect(dataReducer(initialState, action)).toEqual({
                ...initialState,
                loading: false,
                error: null,
                data: action.payload,
            })
        });
        it('FETCH_DATA_ERROR', () => {
            const action = {
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: string
            }
            expect(dataReducer(initialState, action)).toEqual({
                ...initialState,
                loading: false,
                data: [],
                error: action.payload
            })
        });
        it('FETCH_DELETE_SUCCESS', () => {
            const action = {
                type: DataActionTypes.FETCH_DELETE_SUCCESS,
                payload: string
            }
            expect(dataReducer(initialState, action)).toEqual({
                ...initialState,
                data: initialState.data.filter((item) => item.id !== action.payload)
            })
        });
        it('FETCH_ADD_SUCCESS', () => {
            const action = {
                type: DataActionTypes.FETCH_ADD_SUCCESS,
                payload: []
            }
            expect(dataReducer(initialState, action)).toEqual({
                ...initialState,
                loading: false,
                data: action.payload,
                error: null
            })
        });
        it('FETCH_UPDATE_SUCCESS', () => {
            const action = {
                type: DataActionTypes.FETCH_UPDATE_SUCCESS,
                payload: string
            }
            expect(dataReducer(initialState, action)).toEqual({
                ...initialState,
                data: initialState.data.map((item) =>
                    item.id === action.payload
                        ? {
                            ...item,
                            editing: !item.editing
                        }
                        : item
            )})
        });
    });

});
