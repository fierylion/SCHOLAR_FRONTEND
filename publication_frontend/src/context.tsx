import React, { useContext, useReducer, useState, createContext, ReactNode } from 'react'
type MyComponentProps = {
  children: ReactNode;
};
// import reducer from "../reducers/reducer
const AppContext = createContext('')
const initialState = {
  user_details: {},
  user_redirect_message: null,
  article: null,
}
const AppProvider: React.FC<MyComponentProps>= ({children }) => {
  const [peoples, setPeoples] = useState([])
  return (
    <AppContext.Provider value={{ peoples,setPeoples }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }
