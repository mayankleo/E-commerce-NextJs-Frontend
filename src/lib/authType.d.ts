export interface LoginRequestBody {
    username: string;
    password: string;
  }
  
export interface DjangoAuthResponse {
    access: string;
    refresh: string;
  }