import { axiosClient } from "@/services/API/axios";
import type { AxiosResponse } from "axios";
export default {

  createInvoice(payload): Promise<AxiosResponse> {
    return axiosClient.post("/invoices", payload)
  },
  async getAllInvoices() {
    return await axiosClient.get("/invoices")
  },
}