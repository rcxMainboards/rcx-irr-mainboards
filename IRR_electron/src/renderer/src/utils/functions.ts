import { AxiosError } from 'axios'

const errorData = (error) => {
  if (error instanceof AxiosError) {
    return error.response?.data.detail
  }
}

const errorStatus = (error) => {
  if (error instanceof AxiosError) {
    return error.response?.status
  }
}

export { errorData, errorStatus }
