import axios from "axios";
import { API_URL } from "@/const/api-config";

export class ClientApi {
  saveClient(clientName, clientPhone) {
    return axios.post(`${API_URL}/landing/lead/create`, {
      name: clientName,
      phone: clientPhone,
    });
  }
}
