import { axiosClient } from "@/services/API/axios";
import type { AxiosResponse } from "axios";
export default {

  createInvoice(payload): Promise<AxiosResponse> {
    return axiosClient.post("/invoices", payload)
  },
  async getAllInvoices() {
    return await axiosClient.get("/invoices")
  },
  async getInvoiceById(id: number) {
    return await axiosClient.get(`/invoices/${id}`)
  },
  async updateInvoice(id: number, payload) {
    return await axiosClient.put(`/invoices/${id}`, payload)
  },
  async deleteInvoice(id: number) {
    return await axiosClient.delete(`/invoices/${id}`)
  },

}