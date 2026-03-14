import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  standalone: false,
  templateUrl: './purchase-order.html',
  styleUrl: './purchase-order.css'
})
export class PurchaseOrder {
  orders = [
    { po: 'PO-1045', customer: 'บริษัท ลูกค้าหลัก จำกัด', date: 'วันนี้ 10:30', total: 45000, status: 'waiting' },
    { po: 'PO-1044', customer: 'บริษัท ลูกค้าหลัก จำกัด', date: 'เมื่อวาน', total: 12500, status: 'waiting' },
    { po: 'PO-1040', customer: 'บริษัท ลูกค้าหลัก จำกัด', date: '20 ต.ค.', total: 85200, status: 'shipping' },
    { po: 'PO-1038', customer: 'บริษัท เอ็นซี จำกัด', date: '18 ต.ค.', total: 25000, status: 'success' },
    { po: 'PO-1036', customer: 'ห้างหุ้นส่วน ดีดี จำกัด', date: '15 ต.ค.', total: 38900, status: 'success' }
  ];
}