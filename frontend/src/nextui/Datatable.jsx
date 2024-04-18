import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Tooltip,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { capitalize } from "./utils";
import { EditIcon } from "./EditIcon";
import { EyeIcon } from "./EyeIcon";
import axiosClient from "../api/axios";
import ButtonAtom from "../components/atoms/ButtonAtom";
import AbrirModalTemplate from "../components/templates/AbrirModalTemplate";
import RegisterPageOrganism from "../components/organisms/RegisterPageOrganism";
import ButtonCerrarModalAtom from "../components/atoms/ButtonCerrarModalAtom";

const statusColorMap = {
  activo: "success",
  inactivo: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "pk_cedula_user",
  "nombre_user",
  "email_user",
  "descripcion_user",
  "telefono_user",
  "fecha_nacimiento_user",
  "rol_user",
  "estado_user",
  "actions",
];

export default function App() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "nombre_user",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleToggle = (mode, userId = null) => {
    setMode(mode);
    setSelectedUserId(userId);
    setOpen(true);
  };
  console.log(selectedUserId);

  useEffect(() => {
    axiosClient
      .get("/v1/users")
      .then((res) => {
        console.log(res.data);
        setResults(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const data = [
    { uid: "pk_cedula_user", name: "Cedula", sortable: true },
    { uid: "nombre_user", name: "Usuario", sortable: true },
    { uid: "descripcion_user", name: "Descripción", sortable: true },
    { uid: "telefono_user", name: "Telefono", sortable: true },
    { uid: "fecha_nacimiento_user", name: "Fecha Nacimiento", sortable: true },
    { uid: "rol_user", name: "Rol", sortable: true },
    { uid: "estado_user", name: "Estado", sortable: true },
    { uid: "actions", name: "Acciones", sortable: false },
  ];

  const statusOptions = [
    { name: "Activo", uid: "activo" },
    { name: "Inactivo", uid: "inactivo" },
  ];

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = React.useMemo(() => {
    let filteredResults = results;

    if (hasSearchFilter) {
      filteredResults = filteredResults.filter(
        (result) =>
          String(result.pk_cedula_user)
            .toLowerCase()
            .includes(filterValue.toLowerCase()) ||
          result.fecha_nacimiento_user
            .toLowerCase()
            .includes(filterValue.toLowerCase()) ||
          String(result.nombre_user)
            .toLowerCase()
            .includes(filterValue.toLowerCase()) ||
          result.rol_user.toLowerCase().includes(filterValue.toLowerCase()) ||
          result.email_user.toLowerCase().includes(filterValue.toLowerCase()) ||
          result.estado_user.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredResults = filteredResults.filter((result) =>
        Array.from(statusFilter).includes(result.estado)
      );
    }

    return filteredResults;
  }, [results, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((result, columnKey) => {
    const cellValue = result[columnKey];

    switch (columnKey) {
      case "nombre_user":
        return (
          <User
            avatarProps={{ radius: "lg", src: result.imagen_user }}
            description={result.email_user}
            name={cellValue}
          >
            {result.email_user}
          </User>
        );
      case "estado_user":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[result.estado_user]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <ButtonAtom
                  onClick={() => handleToggle("update", result.pk_cedula_user)}
                >
                  <EditIcon />
                </ButtonAtom>
              </span>
            </Tooltip>
            {result.estado_user === "activo" ? (
              <Tooltip content="Desactivar">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Tooltip>
            ) : (
              <Tooltip content="Activar">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Tooltip>
            )}
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const onStatusFilter = (selectedKeys) => {
    setStatusFilter(selectedKeys);
  };

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 px-10 pt-10">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%] border rounded-xl border-grisMedio"
            placeholder="Buscar..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          {/* <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Estado
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={onStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {data.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div> */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {results.length} usuarios
          </span>
          <label className="flex items-center text-default-400 text-small">
            Columnas por páginas:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    onRowsPerPageChange,
    onSearchChange,
    onClear,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center m-10">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Anterior
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Siguiente
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <>
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[482px]",
        }}
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={data}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"Usuario no encontrado"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.pk_cedula_user}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {open && (
        <AbrirModalTemplate>
          <RegisterPageOrganism
            mode={mode}
            userId={selectedUserId}
            onClose={() => setOpen(false)}
          />
          <ButtonCerrarModalAtom onClose={() => setOpen(false)} />
        </AbrirModalTemplate>
      )}
    </>
  );
}
