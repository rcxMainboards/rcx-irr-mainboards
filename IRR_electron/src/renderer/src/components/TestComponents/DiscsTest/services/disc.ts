import axios from 'axios'
import { API_INTERNAL, IRR_MB_API } from '../../../../utils/serviceEndPoints'

const executeDiskTest = async (profile, TestParams) => {
  const response = await axios.post(
    `${API_INTERNAL}/mountedDrives/TestDrives`,
    {
      ssd_amount: profile.ssd_amount,
      hdd_amount: profile.hdd_amount,
      config: TestParams.config
    }
  )
  return response.data
}

const getPartNumber = async (partNumber, profile) => {
  const response = await axios.get(
    `${IRR_MB_API}/mainboard/get_hp_description/${partNumber}/${profile.product}`
  )
  return response.data
}

const executeDiskTestWihtIntegrated = async (part, profile) => {
  const response = await axios.post(
    `${API_INTERNAL}/mountedDrives/TestDrives`,
    {
      ssd_amount: profile.ssd_amount,
      hdd_amount: profile.hdd_amount,
      integrated_disk: part
    }
  )
  return response.data
}

export { executeDiskTest, getPartNumber, executeDiskTestWihtIntegrated }
