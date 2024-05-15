import React, { createContext } from "react";
import { DeparProvider } from "./DeparContext";
import { TipoVariProvider } from "./TipoVariContext";
import { MunicipioProvider } from "./MunicipioContext";
import { VeredaProvider } from "./VeredaContext";
import { FincaProvider } from "./FincaContext";
import { AuthProvider } from "./AuthContext";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider>
      <AuthProvider>
        <DeparProvider>
          <TipoVariProvider>
            <MunicipioProvider>
              <VeredaProvider>
                <FincaProvider>
                    {children}
                </FincaProvider>
              </VeredaProvider>
            </MunicipioProvider>
          </TipoVariProvider>
        </DeparProvider>
      </AuthProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
