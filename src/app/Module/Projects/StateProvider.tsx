import React, { ReactElement, useContext, useState, createContext, Dispatch, useEffect} from "react";

type DispatchFunction = (action: any) => void;

const defaultContext = {
    active: 0,
    updateProject: (active: number) => {}
};

export const StateContext = createContext(defaultContext);

const StateProvider = ({ children } : {children: ReactElement}) => {
    const [active, updateProject] = useState<number>(defaultContext.active);
  
    const updateProjectHandler = (newActive: number) => {
        updateProject(newActive);
    };

    useEffect(() => {
        console.log("StateContext: " + active);
    }, [active])

    return (
      <StateContext.Provider value={{ active, updateProject: updateProjectHandler }}>
        {children}
      </StateContext.Provider>
    );
  };
  

export default StateProvider;