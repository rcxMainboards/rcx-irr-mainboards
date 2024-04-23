import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'
import { Chip } from '@nextui-org/react'
import { useCallback } from 'react'
import { TestResult } from '../TestComponents/objectInterfaces'

const columns = [
  {
    key: 'name',
    label: 'Nombre la prueba'
  },
  {
    key: 'mensaje',
    label: 'Mensaje de la prueba'
  },
  {
    key: 'status',
    label: 'Estado'
  }
]

const statusColorMap: Record<
  string,
  'success' | 'danger' | 'default' | 'primary' | 'secondary' | 'warning' | undefined
> = {
  false: 'danger',
  true: 'success'
}

export default function OutputTable({ Results }) {
  const mapedResults = Results.map((TestResult: TestResult) => {
    return {
      name: TestResult.Testname,
      mensaje: TestResult.details.message,
      status: TestResult.details.result.toString()
    }
  })

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey]
    switch (columnKey) {
      case 'status':
        return (
          <Chip className="capitalize" size="sm" variant="flat" color={statusColorMap[cellValue]}>
            {cellValue === 'true' ? 'Paso' : 'Fallo'}
          </Chip>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <Table
      aria-label="Example static collection table"
      isHeaderSticky
      className="max-h-[600px] overflow-scroll"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={mapedResults}>
        {(item: object) => (
          <TableRow key={(item as { name: string }).name}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
