import { createReducer, on } from "@ngrx/store";
import { increment } from "../state/counter/counter.action";

export const initialstate = 0;
export const counterReducer = createReducer(initialstate, on(increment, (state) => state + 1));