import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WashService {
  private washes: Wash[] = [];

  constructor() {}

  addWash(quantity: number) {
    const today = new Date().toISOString().slice(0, 10);
    const wash = this.washes.find(w => w.date === today);
    if (wash) {
      wash.quantity += quantity;
    } else {
      this.washes.push({ id: this.washes.length + 1, date: today, quantity });
    }
  }

  getWashes(): Wash[] {
    return this.washes;
  }

  resetWashes() {
    this.washes = [];
  }
}

interface Wash {
  id: number;
  date: string;
  quantity: number;
}