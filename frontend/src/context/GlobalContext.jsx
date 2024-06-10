import React, { createContext } from "react";
import { DeparProvider } from "./DeparContext";
import { TipoVariProvider } from "./TipoVariContext";
import { MunicipioProvider } from "./MunicipioContext";
import { VeredaProvider } from "./VeredaContext";
import { FincaProvider } from "./FincaContext";
import { AuthProvider } from "./AuthContext";
import { VariedadUserProvider } from "./VariedadUserContext";
import { SubastaProvider } from "./SubastaContext";
import { PostulantesProvider } from "./PostulantesContext";
import { OfertaProvider } from "./OfertasContext";
import { CalifiProvider } from "./CalificacionesContext";
<<<<<<< HEAD
import { NotificacionesProvider } from "./NotificacionesContext";
=======

>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const globalContextValue = {}

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <AuthProvider>
        <DeparProvider>
          <TipoVariProvider>
            <MunicipioProvider>
              <VeredaProvider>
                <FincaProvider>
                  <VariedadUserProvider> 
                    <SubastaProvider>
                      <PostulantesProvider>
                        <OfertaProvider>
                          <CalifiProvider>
<<<<<<< HEAD
                            <NotificacionesProvider>
                            {children}
                            </NotificacionesProvider>
=======
                            {children}
>>>>>>> 6a995bdc65b3e7472963d69ab005d8d423b4cb55
                          </CalifiProvider>
                        </OfertaProvider>
                      </PostulantesProvider>
                    </SubastaProvider>
                  </VariedadUserProvider>
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
