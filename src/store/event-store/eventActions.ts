import EventActionTypes from "./eventActionTypes";
import { IEvent } from './IEvent';
import EventAPI from "../api/EventAPI";

export const createEvent = (data: IEvent) => {
  return {
    type: EventActionTypes.CREATE_EVENT,
    payload: EventAPI.createEvent(data) 
  };
}

export const getEvent = (eventId: string) => {
  return {
    type: EventActionTypes.GET_EVENT,
    payload: EventAPI.getEvent(eventId)
  };
}

export const getEvents = () => {
  return {
    type: EventActionTypes.GET_ALL_EVENTS,
    payload: EventAPI.getEvents()
  };
}

export const updateEvnet = (eventId: string, data: IEvent) => {
  return {
    type: EventActionTypes.UPDATE_EVENT,
    payload: EventAPI.updateEvent(eventId, data)
  };
}

export const deleteEvent = (eventId: string) => {
  return {
    type: EventActionTypes.DELETE_EVENT,
    payload: EventAPI.deleteEvent(eventId)
  };
}