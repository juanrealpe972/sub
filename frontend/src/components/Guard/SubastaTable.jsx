import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  AutocompleteItem,
} from "@nextui-org/react";
import { SearchIcon } from "../../nextui/SearchIcon";
import { PlusIcon } from "../../nextui/PlusIcon";

export default function SubastaTable({
  registrar,
  results,
  actualizar,
  desactivar,
  activar,
}) {
  const [isFollowed, setIsFollowed] = useState("visitar");

  const [filteredResults, setFilteredResults] = useState(results);
  const [searchValue, setSearchValue] = useState("");

  const handleUpdateVari = (id) => {
    localStorage.setItem("id_vari", id);
    actualizar(id);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    const filtered = results.filter((subasta) =>
      subasta.fk_vari.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(filtered);
  };
  return (
    <div>
      <div className="flex py-4 gap-x-3 items-center">
        <AutocompleteItem
          value={searchValue}
          onChange={(value) => handleSearch(value)}
          defaultItems={results}
          inputProps={{
            classNames: {
              input: "ml-1",
              inputWrapper: "h-[48px]",
            },
          }}
          listboxProps={{
            hideSelectedIcon: true,
            itemClasses: {
              base: [
                "rounded-medium",
                "text-default-500",
                "transition-opacity",
                "data-[hover=true]:text-foreground",
                "dark:data-[hover=true]:bg-default-50",
                "data-[pressed=true]:opacity-70",
                "data-[hover=true]:bg-default-200",
                "data-[selectable=true]:focus:bg-default-100",
                "data-[focus-visible=true]:ring-default-500",
              ],
            },
          }}
          aria-label="Select a farm"
          placeholder="Buscar Variedad"
          popoverProps={{
            offset: 10,
            classNames: {
              base: "rounded-large",
              content: "p-1 border-small border-default-100 bg-background",
            },
          }}
          startContent={
            <SearchIcon
              className="text-default-400"
              strokeWidth={2.5}
              size={20}
            />
          }
          radius="full"
          variant="bordered"
        >
          {(variedad) => (
            <AutocompleteItem
              key={variedad.pk_id_vari}
              textValue={variedad.nombre_tipo_vari}
            >
              <div className="flex justify-between items-center">
                <p className="text-small">{variedad.nombre_tipo_vari}</p>
              </div>
            </AutocompleteItem>
          )}
        </AutocompleteItem>
      </div>
      <Card className="max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://nextui.org/avatars/avatar-1.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Zoey Lang
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @zoeylang
              </h5>
            </div>
          </div>
          <Button
            className={
              isFollowed
                ? "bg-transparent text-foreground border-default-200"
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed && "Visitar"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-6 text-small text-default-400">
          <p>
            Frontend developer and UI/UX enthusiast. Join me on this coding
            adventure!
          </p>
          <span className="pt-2">
            #FrontendWithZoey
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
