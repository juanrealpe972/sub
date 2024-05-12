import React from "react";
import VeredaT from "./VeredaT";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import DepartamentoTable from "../components/Guard/DepartamentoTable";
import MunicipioTable from "../components/Guard/MunicipioTable";

function GeografiaFullPage() {
  return (
    <div className="flex flex-col px-10 gap-x-4 pt-8 bg-gray-100">
      <Tabs aria-label="Options" variant="bordered">
        <Tab key="departamentos" title="Departamentos">
          <Card>
            <CardBody>
              <DepartamentoTable />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="municipios" title="Municipios">
          <Card>
            <CardBody>
              <MunicipioTable />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="veredas" title="Veredas">
          <Card>
            <CardBody>
              <VeredaT />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>

    </div>
  );
}

export default GeografiaFullPage;
