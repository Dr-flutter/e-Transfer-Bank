export interface User {
  id: string;
  password: string;
  pin: string;
  name: string;
}

export interface Transfer {
  id: string;
  senderId: string;
  recipientName: string;
  recipientAccount: string;
  amount: number;
  transferCode: string;
  secretCode: string;
  status: 'confirmed' | 'pending';
  createdAt: string;
}