import React from "react";

export const data = {
    number: 123,
    text: 'API context'
};

const DataContext = React.createContext(data);

export default DataContext