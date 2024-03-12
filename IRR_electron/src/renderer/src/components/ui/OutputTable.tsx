import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react'
import { Chip } from '@nextui-org/react'
import { useCallback } from 'react'
import { getMainboardProps, sendOutputLog } from '../../services/mainboard'
import { useEffect } from 'react'
import { TestResult } from '../TestComponents/objectInterfaces'
import { useQuery, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { errorData } from '../../utils/functions'

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
  | 'success'
  | 'danger'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'warning'
  | undefined
> = {
  false: 'danger',
  true: 'success'
}

export default function OutputTable({ Results, user }) {
  console.log(user)
  const mapedResults = Results.map((TestResult: TestResult) => {
    return {
      name: TestResult.Testname,
      mensaje: TestResult.details.message,
      status: TestResult.details.result.toString()
    }
  })

  const { isLoading, data } = useQuery({
    queryKey: ['fingerPrintTest'],
    queryFn: getMainboardProps,
    retry: false,
    refetchOnWindowFocus: false
  })

  const { mutate } = useMutation({
    mutationFn: (args: {
      tests: any
      Passed: any
      mainboard: any
      user: string
    }) => sendOutputLog(args),
    onSuccess: (data) => {
      console.log(data)
    },
    retry: false,
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.data?.detail) {
        console.log(error.response?.data?.detail)
      }
    }
  })

  useEffect(() => {
    if (!isLoading && data) {
      const isPassed = Results.every((test) => test.details.result)
      const mainboardProfile = data
      mutate({
        tests: Results,
        Passed: isPassed,
        mainboard: mainboardProfile,
        user: user
      })
    }
  }, [isLoading, data])

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey]
    switch (columnKey) {
      case 'status':
        return (
          <Chip
            className="capitalize"
            size="sm"
            variant="flat"
            color={statusColorMap[cellValue]}
          >
            {cellValue === 'true' ? 'Paso' : 'Fallo'}
          </Chip>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <Table aria-label="Example static collection table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={mapedResults}>
        {(item: object) => (
          <TableRow key={(item as { name: string }).name}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
