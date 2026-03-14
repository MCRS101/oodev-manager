import { Component } from '@angular/core';

@Component({
  selector: 'app-finance',
  standalone: false,
  templateUrl: './finance.html',   // 👈 เช็คว่าชื่อไฟล์ .html ตรงกัน
  styleUrl: './finance.css'       // 👈 เช็คว่าชื่อไฟล์ .css ตรงกัน
})
export class Finance {
  // ข้อมูลสรุปยอดเงิน
  summary = {
    totalRevenue: 245000,
    pendingAmount: 35000,
    completedBills: 12
  };

  // รายการเดินบัญชี
  transactions = [
    { id: 'INV-001', customer: 'บริษัท ลูกค้าหลัก จำกัด', date: '10 มี.ค. 2569', amount: 45000, status: 'paid', method: 'โอนผ่านธนาคาร' },
    { id: 'INV-002', customer: 'ห้างหุ้นส่วน ดีดี จำกัด', date: '12 มี.ค. 2569', amount: 12500, status: 'pending', method: 'เครดิต 30 วัน' },
    { id: 'INV-003', customer: 'บริษัท เอ็นซี จำกัด', date: '14 มี.ค. 2569', amount: 85200, status: 'paid', method: 'เช็คธนาคาร' },
    { id: 'INV-004', customer: 'บริษัท ลูกค้าหลัก จำกัด', date: '15 มี.ค. 2569', amount: 38900, status: 'overdue', method: 'เครดิต 30 วัน' }
  ];
}