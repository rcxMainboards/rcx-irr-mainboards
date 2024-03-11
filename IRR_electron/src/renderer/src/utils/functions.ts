import { AxiosError } from 'axios'

const errorData = (error) => {
  if (error instanceof AxiosError) {
    return error.response?.data.detail
  }
}

export { errorData }
